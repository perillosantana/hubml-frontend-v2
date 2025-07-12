import { redirect } from 'react-router-dom'
import { HTTP_STATUS_CODE } from '@/utils/httpStatusCode'

export type HttpResponse<T = unknown> = {
  status: number
  data: T
}

export type Config = RequestInit & {
  responseAs?: 'json' | 'text'
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

export type Request = Omit<Config, 'body'> & {
  url: string
  body?: unknown
  timeout?: number
  params?: ParamsRequest
  cache?: RequestCache
}

export type ParamsRequest = {
  [key: string]: string | boolean | undefined
}

export class HttpError<T = unknown> extends Error {
  response: HttpResponse<T | null>

  constructor(
    message: string,
    options: ErrorOptions & {
      response: HttpResponse<T | null>
    },
  ) {
    super(message, options)

    this.name = 'HttpError'
    this.message = message
    this.response = options.response
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
      response: JSON.parse(JSON.stringify(this.response)),
    }
  }
}

const handleResponse = (response: Response) => {
  if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
    redirect('/auth/signin')
  }

  return response
}

export async function fetcher<T = unknown>({
  url,
  body,
  timeout = 5000,
  cache,
  params,
  ...customConfig
}: Request): Promise<HttpResponse<T>> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)
  const URL_API = import.meta.env.VITE_BACKEND_URL

  const config: Config = {
    ...customConfig,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...customConfig.headers,
    },
    credentials: 'include',
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  if (cache) {
    config.cache = cache
  }

  let fullUrl = `${URL_API}${url}`

  if (params) {
    const queryString = Object.keys(params)
      .map(item => {
        return `${encodeURIComponent(item)}=${encodeURIComponent(params[item] || '')}`
      })
      .join('&')

    fullUrl += `?${queryString}`
  }
  return fetch(`${fullUrl}`, config).then(async response => {
    await handleResponse(response)

    return Promise.all([
      response,
      response[config.responseAs ?? 'json']().catch(() => {
        return null
      }),
    ])
      .then(([response, data]) => {
        if (response.ok) {
          return {
            status: response.status,
            data: data as T,
          }
        }

        throw new HttpError(`http: request to ${url} failed with status ${response.status}`, {
          response: {
            status: response.status,
            data: data as T | null,
          },
        })
      })
      .finally(() => {
        clearTimeout(timeoutId)
      })
  })
}

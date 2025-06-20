import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-16 text-center sm:px-6 lg:px-8 lg:pt-32">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-balance sm:text-7xl">
          Impulsione suas vendas com{' '}
          <span className="text-ml-300 whitespace-nowrap">Inteligência Artificial</span> no Mercado
          Livre
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Maximize seus resultados de vendas com a poderosa combinação de tecnologia e inteligência
          artificial.
        </p>

        <div className="mt-10 flex justify-center gap-x-6">
          <Button variant="ml" size="lg">
            <Link to="/auth/sign-in">Criar conta</Link>
          </Button>
        </div>
      </div>

      <section className="relative overflow-hidden bg-zinc-900/60 py-20">
        <div className="relative mx-auto max-w-7xl px-8">
          <Tabs
            defaultValue="tab-1"
            orientation="horizontal"
            className="flex-row justify-between gap-6"
          >
            <TabsList className="flex flex-col gap-y-1">
              <TabsTrigger
                value="tab-1"
                className="group relative flex w-full cursor-pointer flex-col items-start rounded-full rounded-l-xl rounded-r-none p-6 hover:bg-white/5 data-[state=active]:bg-white/5 data-[state=active]:ring-1 data-[state=active]:ring-white/5 data-[state=active]:ring-inset"
              >
                <h3 className="font-display text-lg font-semibold">Busca de produtos</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Hospede e organize sua biblioteca de vídeos com pastas e tags.
                </p>
              </TabsTrigger>

              <TabsTrigger
                value="tab-2"
                className="group relative flex w-full cursor-pointer flex-col items-start rounded-full rounded-l-xl rounded-r-none p-6 hover:bg-white/5 data-[state=active]:bg-white/5 data-[state=active]:ring-1 data-[state=active]:ring-white/5 data-[state=active]:ring-inset"
              >
                <h3 className="font-display text-lg font-semibold">Busca de produtos</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Hospede e organize sua biblioteca de vídeos com pastas e tags.
                </p>
              </TabsTrigger>

              <TabsTrigger
                value="tab-3"
                className="group relative flex w-full cursor-pointer flex-col items-start rounded-full rounded-l-xl rounded-r-none p-6 hover:bg-white/5 data-[state=active]:bg-white/5 data-[state=active]:ring-1 data-[state=active]:ring-white/5 data-[state=active]:ring-inset"
              >
                <h3 className="font-display text-lg font-semibold">Busca de produtos</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Hospede e organize sua biblioteca de vídeos com pastas e tags.
                </p>
              </TabsTrigger>
            </TabsList>

            <div className="">
              <TabsContent
                value="tab-1"
                className="mt-10 w-[45rem] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl shadow-zinc-950/20 sm:w-auto lg:mt-0 lg:h-[720px] lg:w-[67.8125rem]"
              >
                <img
                  src="https://nivo.video/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuploads-screenshot.622fd8f9.png&w=3840&q=100"
                  alt=""
                />
              </TabsContent>
              <TabsContent
                value="tab-2"
                className="mt-10 w-[45rem] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl shadow-zinc-950/20 sm:w-auto lg:mt-0 lg:h-[720px] lg:w-[67.8125rem]"
              >
                <p className="text-muted-foreground px-4 py-3 text-xs">Content for Tab 2</p>
              </TabsContent>
              <TabsContent
                value="tab-3"
                className="mt-10 w-[45rem] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl shadow-zinc-950/20 sm:w-auto lg:mt-0 lg:h-[720px] lg:w-[67.8125rem]"
              >
                <p className="text-muted-foreground px-4 py-3 text-xs">Content for Tab 3</p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  )
}

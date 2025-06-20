import { Home } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Admin/Header'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function AdminLayout() {
  return (
    <div className="bg-admin flex min-h-svh w-full">
      <SidebarProvider>
        <Header />

        <main className="bg-background relative flex min-h-svh flex-1 flex-col overflow-hidden px-4 peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:px-6 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 lg:px-8">
          <div className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger className="-ms-4" />

              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/admin">
                      <Home size={22} />
                      <span className="sr-only">Dashboard</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="hidden md:block" />

                  <BreadcrumbItem>
                    <BreadcrumbPage>Contacts</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 py-4 lg:gap-6 lg:py-6">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

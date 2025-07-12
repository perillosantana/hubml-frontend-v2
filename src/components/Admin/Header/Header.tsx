import { CreditCard, Home, ShoppingBasket } from 'lucide-react'
import { useLocation, NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export const Header = () => {
  const location = useLocation()

  const items = [
    {
      title: 'Dashboard',
      url: '/admin/',
      icon: Home,
    },
    {
      title: 'Produtos',
      url: '/admin/products',
      icon: ShoppingBasket,
    },
    {
      title: 'Assinatura',
      url: '/admin/subscription',
      icon: CreditCard,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="items-center justify-center">
        HubML <hr className="border-border mx-2 -mt-px w-full border-t" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {items.map(item => {
                const isActive = location.pathname === item.url

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="group/menu-button hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 h-9 gap-3 rounded-md bg-gradient-to-r font-medium hover:bg-transparent [&>svg]:size-auto"
                      isActive={isActive}
                    >
                      <NavLink to={item.url}>
                        <item.icon
                          className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                          size={22}
                        />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

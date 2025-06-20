import { ClipboardType, CreditCard, Home, ShoppingBasket, UserRound } from 'lucide-react'
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
  const items = [
    {
      title: 'Dashboard',
      url: '/admin/products',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Produtos',
      url: '/admin/products',
      icon: ShoppingBasket,
      isActive: false,
    },
    {
      title: 'Descrições',
      url: '/admin/descriptions',
      icon: ClipboardType,
      isActive: false,
    },
    {
      title: 'Assinatura',
      url: '/admin/subscription#',
      icon: CreditCard,
      isActive: false,
    },
    {
      title: 'Usuário',
      url: '/admin/user',
      icon: UserRound,
      isActive: false,
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
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="group/menu-button hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 h-9 gap-3 rounded-md bg-gradient-to-r font-medium hover:bg-transparent [&>svg]:size-auto"
                    isActive={item.isActive}
                  >
                    <a href={item.url}>
                      <item.icon
                        className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                        size={22}
                      />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

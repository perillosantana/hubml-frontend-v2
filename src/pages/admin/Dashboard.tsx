import { TrendingDown } from 'lucide-react'
import { ChartDashboard } from '@/components/Admin/ChartDashboard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Descrições restantes</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  0 de 250
                </CardTitle>
                <CardAction>
                  <Button>Upgrade</Button>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">Pro</div>
                <div className="text-muted-foreground">Renova em: 1º de agosto</div>
              </CardFooter>
            </Card>
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Vendas com ajuda IA</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  1,234
                </CardTitle>
                <CardAction>
                  <Badge variant="outline">
                    <TrendingDown />
                    -20%
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Down 20% this period <TrendingDown className="size-4" />
                </div>
                <div className="text-muted-foreground">Acquisition needs attention</div>
              </CardFooter>
            </Card>
          </div>

          <div className="px-4 lg:px-6">
            <ChartDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

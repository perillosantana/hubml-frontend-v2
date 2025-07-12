import { Circle, CircleCheck, EllipsisVertical } from 'lucide-react'
import type { ProductML } from '../../services'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type TableProductsProps = {
  products: ProductML[]
}

export const TableProducts = ({ products }: TableProductsProps) => {
  return (
    <div className="relative flex flex-1 flex-col gap-4 overflow-auto px-4 outline-none lg:px-6">
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader className="bg-muted sticky top-0 z-10">
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição gerada</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-muted sticky top-0 z-10">
            {products.map(product => {
              return (
                <TableRow className="">
                  <TableCell className="flex justify-center">
                    <span className="relative flex size-20 h-20 w-20 shrink-0 overflow-hidden rounded-sm">
                      <img className="aspect-square size-full" src={product.pictures} />
                    </span>
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.descriptionIA}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-muted-foreground px-1.5">
                      {product.statusDescription === 'zero' && (
                        <>
                          <Circle className="fill-muted" />
                          Não foi otimizado.
                        </>
                      )}

                      {product.statusDescription === 'approved' && (
                        <>
                          <CircleCheck className="fill-green-500" />
                          Otimizado
                        </>
                      )}

                      {product.statusDescription === 'pending' && (
                        <>
                          <Circle className="fill-yellow-500" />
                          Envio para o Meli
                        </>
                      )}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="text-muted-foreground flex size-8 cursor-pointer"
                          size="icon"
                        >
                          <EllipsisVertical />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem>Nova Descrição</DropdownMenuItem>
                        <DropdownMenuItem>Enviar para o Meli</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

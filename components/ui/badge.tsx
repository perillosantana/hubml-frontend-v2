import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-white',
        success: 'border-transparent bg-green-700 text-white',
        destructive: 'border-transparent bg-red-700 text-white',
        outline: 'border-transparent text-gray-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

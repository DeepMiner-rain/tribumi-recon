import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      secondary: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      success: 'bg-green-500/10 text-green-500 border-green-500/20',
      warning: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      danger: 'bg-red-500/10 text-red-500 border-red-500/20',
    }
    
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
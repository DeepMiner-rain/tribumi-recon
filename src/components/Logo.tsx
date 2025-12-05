import { Car } from 'lucide-react'
import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  }
  
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Car className={`${sizes[size]} text-yellow-500`} strokeWidth={2.5} />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${textSizes[size]} font-bold text-gray-900 dark:text-white`}>
            Tribumi
          </span>
          <span className="text-xs text-yellow-500 tracking-wide">
            RECON
          </span>
        </div>
      )}
    </Link>
  )
}
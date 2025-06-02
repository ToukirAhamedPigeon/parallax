import React from 'react'
import ButtonSvg from '@/public/assets/svg/ButtonSvg'
import { cn } from '@/lib/utils'

type ButtonProps = {
  className?: string,
  href?: string,
  onClick?: CallableFunction,
  children: React.ReactNode,
  px?: string,
  white?: string,
}
const Button = ({className, href, onClick, children, px, white}:ButtonProps) => {
    const classes=cn(
      `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`,
    )
    const spanClasses = cn(
      'relative z-10',
    )
  const renderButton = () => (
    <button className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
  )
  const renderLink = () => (
    <a className={classes} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  )
  return href ? renderLink() : renderButton();
}

export default Button

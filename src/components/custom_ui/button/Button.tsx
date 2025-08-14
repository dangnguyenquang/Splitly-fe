// src/components/ui/Button.tsx
import { cn } from "@/helpers/cn"
import React from "react"

type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  className?: string
  onClick?: () => void
  disabled?: boolean
  action?: "cancel" | "save"
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  onClick,
  disabled = false,
  action,
}) => {
  // Style theo action
  const actionClass = {
    cancel:
      "text-black transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground w-fit",
    save: "transition-colors bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto order-1 sm:order-2",
    default:
      "w-full h-10 text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center justify-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(actionClass.default, action ? actionClass[action] : "", className)}
    >
      {children}
    </button>
  )
}

export default Button

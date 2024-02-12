export type ButtonVariant = 'primary' | 'success' | 'danger' | 'warning' | 'info'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'ghost'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

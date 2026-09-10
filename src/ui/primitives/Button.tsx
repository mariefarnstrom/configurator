import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary"

const variants: Record<ButtonVariant, string> = {
    primary: `
        bg-white/10
        text-white
        w-full
    `,
    secondary: `
        bg-blue-500
        text-white
    `,
}

type ButtonProps = {
    children: ReactNode
    variant?: ButtonVariant
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const buttonStyles = `
    rounded-[128px]
    ${variants[variant]}
    ${className}
    `

    return (
        <button className={buttonStyles} {...props}>
            {children}
        </button>
    )

}
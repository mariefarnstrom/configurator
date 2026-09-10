import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary"

const variants: Record<ButtonVariant, string> = {
    primary: `
        bg-white/10
        text-white
        w-full
        shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
    `,
    secondary: `
        h-[30px]
        w-[61px]
        text-white
        items-center
        justify-center
        text-sm
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
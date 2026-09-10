import { Button } from "./Button";

type ThemeToggleProps = {
    className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
    return (
        <div className={`p-2 rounded-[128px] border-2 flex gap-4 ${className}`}>
            <Button variant="secondary" className="bg-white/10">Day</Button>
            <Button variant="secondary" className="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">Night</Button>
        </div>
    )
}
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { SunIcon } from "../../assets/icons/SunIcon";
import { useConfiguratorStore } from "../../store/configuratorStore";

type ThemeToggleProps = {
    className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {

    const setTheme = useConfiguratorStore((state) => state.setTheme);
    const { theme } = useConfiguratorStore()
    return (
        <div
            className={`w-48 p-2 rounded-[128px] flex gap-4 pointer-events-auto backdrop-blur-xs ${theme === "light" ? "bg-white/40" : "bg-black/30"
                } ${className}`}
        >
            <button
                className={`h-7 w-20 rounded-[128px] flex items-center justify-center gap-2 p-2 pr-4
                ${theme === "light" ? "border border-[#999999] bg-white" : "text-[#666666]"}`}
                onClick={() => setTheme("light")}>
                <SunIcon />Light
            </button>
            <button
                className={`h-7 w-20 rounded-[128px] flex items-center justify-center gap-2 p-2 pr-4
                ${theme === "dark" ? "border border-[#999999] bg-black text-white" : "text-[#666666]"}`}
                onClick={() => setTheme("dark")}>
                <MoonIcon />Dark
            </button>
        </div>
    )
}
import { Button } from "./Button";
import { useConfiguratorStore } from "../../store/configuratorStore";

type ThemeToggleProps = {
    className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {

    const setTheme = useConfiguratorStore((state) => state.setTheme);
    return (
        <div className={`p-2 rounded-[128px] border-2 flex gap-4 pointer-events-auto ${className}`}>
            <Button variant="secondary" className="bg-white/10" onClick={() => setTheme("light")}>Day</Button>
            <Button variant="secondary" className="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" onClick={() => setTheme("dark")}>Night</Button>
        </div>
    )
}
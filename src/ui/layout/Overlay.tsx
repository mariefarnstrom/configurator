import { ChoiceSummary } from "../panels/ChoiceSummary";
import { OptionDrawer } from "../panels/OptionDrawer";
import { TechSpecPanel } from "../panels/TechSpecPanel";
import { ThemeToggle } from "../primitives/ThemeToggle";

import { useConfiguratorStore } from "../../store/configuratorStore";

export function Overlay() {
    const { theme } = useConfiguratorStore()
    return (
        <div className={`${theme === "dark" ? "dark" : ""} grid grid-cols-3 absolute inset-0 w-dvw h-dvh pointer-events-none p-[40px_72px_72px_72px]`}>
            <hgroup className="text-primary-text flex flex-col gap-2">
                <h1 className="uppercase font-heading pointer-events-auto font-bold text-5xl/[0.92] tracking-[-3px]">
                    Monster <br />
                    3000
                </h1>
                <p className="font-primary text-2xl/[0.92] tracking-normal opacity-50 font-semibold">
                    <span className="sr-only">Model Code: </span>R2360M
                </p>
            </hgroup>
            <ThemeToggle className="justify-self-center self-start" />
            <TechSpecPanel />
            <ChoiceSummary />
            <OptionDrawer />
        </div>
    )
}
import { create } from "zustand"
import type { Theme, OptionKey, OptionValueMap } from "../types/configurator";

export type ActiveOption = OptionKey | null

export type ConfiguratorState = OptionValueMap & {
    theme: Theme,
    activeOption: ActiveOption,
    setTheme: (theme: Theme) => void,
    setActiveOption: (option: ActiveOption) => void,
    setOption: <K extends OptionKey>(option: K, value: OptionValueMap[K]) => void,
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
    theme: "light",
    activeOption: null,
    chassi: "cyber",
    wheels: "textured",
    rim: "standard",
    color: "matte-silver",
    setTheme: (theme) => set({
        theme: theme,
    }),
    setActiveOption: (option) => set({
        activeOption: option,
    }),
    setOption: <K extends OptionKey>(option: K, value: OptionValueMap[K]) => set({
    [option]: value,
    } as Pick<ConfiguratorState, K>),
}))
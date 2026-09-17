import { create } from "zustand"
import type { Theme, OptionKey, OptionValueMap } from "../types/configurator";

export type ActiveOption = OptionKey | null

export type ConfiguratorState = OptionValueMap & {
    theme: Theme,
    activeOption: ActiveOption,
    activeHotspot: string | null;
    setTheme: (theme: Theme) => void,
    setActiveOption: (option: ActiveOption) => void,
    setOption: <K extends OptionKey>(option: K, value: OptionValueMap[K]) => void,
    setActiveHotspot: (id: string | null) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
    theme: "light",
    activeOption: null,
    chassi: "cyber",
    wheels: "textured",
    rim: "standard",
    color: "matte-silver",
    activeHotspot: null,
    setTheme: (theme) => set({
        theme: theme,
    }),
    setActiveOption: (option) => set({
        activeOption: option,
    }),
    setOption: <K extends OptionKey>(option: K, value: OptionValueMap[K]) => set({
    [option]: value,
    } as Pick<ConfiguratorState, K>),
    setActiveHotspot: (id) => set({ activeHotspot: id }),
}))
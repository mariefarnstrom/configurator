import { create } from "zustand"
import type { ChassiId, ColorId, OptionKey, OptionValueMap, RimId, WheelsId } from "../types/configurator";
import type { Theme } from "../types/configurator";

export type ActiveOption = OptionKey | null

export type ConfiguratorState = {
    theme: Theme,
    activeOption: ActiveOption,
    chassi: ChassiId,
    wheels: WheelsId,
    rim: RimId,
    color: ColorId,
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
    setOption: (option, value) => set({
        [option]: value,
    } as unknown as Partial<ConfiguratorState>),
    setActiveHotspot: (id) => set({ activeHotspot: id }),
}))
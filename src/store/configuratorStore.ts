import { create } from "zustand"
import type { ChassiId, OptionKey, RimId, WheelsId } from "../types/configurator";
import type { Theme } from "../types/configurator";

export type ActiveOption = OptionKey | null

export type ConfiguratorState = {
    theme: Theme,
    activeOption: ActiveOption,
    chassi: ChassiId,
    wheels: WheelsId,
    rim: RimId,
    setTheme: (theme: Theme) => void,
    setActiveOption: (option: ActiveOption) => void,
    setChassi: (chassi: ChassiId) => void,
    setWheels: (wheels: WheelsId) => void;
    setRim: (rim: RimId) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
    theme: "light",
    activeOption: null,
    chassi: "cyber",
    wheels: "textured",
    rim: "standard",
    setTheme: (theme) => set({
        theme: theme,
    }),
    setActiveOption: (option) => set({
        activeOption: option,
    }),
    setChassi: (chassi) => set({
        chassi,
    }),
    setWheels: (wheels) => set({
        wheels,
    }),
    setRim: (rim) => set({
        rim,
    }),
}))
import { create } from "zustand"
import type { ChassiId, RimId, WheelsId } from "../types/configurator";

export type ActiveOption = "wheels" | "chassi" | "rim" | null

export type ConfiguratorState = {
    activeOption: ActiveOption,
    chassi: ChassiId,
    wheels: WheelsId,
    rim: RimId,
    setActiveOption: (option: ActiveOption) => void,
    setChassi: (chassi: ChassiId) => void,
    setWheels: (wheels: WheelsId) => void;
    setRim: (rim: RimId) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
    activeOption: null,
    chassi: "cyber",
    wheels: "textured",
    rim: "standard",
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
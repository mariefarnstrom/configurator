import { create } from "zustand"
import type { ChassiId, RimId, TireId } from "../types/configurator";

export type ActiveOption = "tire" | "chassi" | "rim" | null

export type ConfiguratorState = {
    activeOption: ActiveOption,
    chassi: ChassiId,
    tire: TireId,
    rim: RimId,
    setActiveOption: (option: ActiveOption) => void,
    setChassi: (chassi: ChassiId) => void,
    setTire: (tire: TireId) => void;
    setRim: (rim: RimId) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
    activeOption: null,
    chassi: "cyber",
    tire: "black",
    rim: "standard",
    setActiveOption: (option) => set({
        activeOption: option,
    }),
    setChassi: (chassi) => set({
        chassi,
    }),
    setTire: (tire) => set({
        tire,
    }),
    setRim: (rim) => set({
        rim,
    }),
}))
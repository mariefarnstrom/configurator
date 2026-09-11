import { create } from "zustand"

type ActiveOption = "tire" | "chassi" | null

type ConfiguratorState = {
    activeOption: ActiveOption,
    chassi: string,
    tire: string,
    setActiveOption: (option: ActiveOption) => void,
    setChassi: (chassi: string) => void,
    setTire: (tire: string) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
    activeOption: null,
    chassi: "red",
    tire: "black",
    setActiveOption: (option) => set({
        activeOption: option,
    }),
    setChassi: (chassi) => set({
        chassi,
    }),
    setTire: (tire) => set({
        tire,
    }),
}))
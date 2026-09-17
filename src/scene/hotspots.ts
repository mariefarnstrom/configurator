import type { OptionKey, HotspotId } from "../types/configurator";

export type HotspotConfig = {
    id: HotspotId;
    position: [number, number, number];
    bubblyPosition?: [number, number, number];
    option: OptionKey;
};

export const hotspots: HotspotConfig[] = [
    {
        id: "wheels-left",
        position: [1.6, 1.7, 1.7] as [number, number, number],
        option: "wheels" as const,
    },
    {
        id: "wheels-right",
        position: [-1.8, 1.5, 1.3] as [number, number, number],
        option: "wheels" as const,
    },
    {
        id: "chassi-left",
        position: [1.25, 2.8, 0.5] as [number, number, number],
        option: "chassi" as const,
    },
    {
        id: "chassi-right",
        position: [-1.3, 2.8, 0.5] as [number, number, number],
        option: "chassi" as const,
    },
    {
        id: "rim-left",
        position: [2.2, 1, -1.5] as [number, number, number],
        option: "rim" as const,
    },
    {
        id: "rim-right",
        position: [-2.2, 1, -1.75] as [number, number, number],
        option: "rim" as const,
    },
    {
        id: "color",
        position: [0, 3.2, 2.4] as [number, number, number],
        bubblyPosition: [0, 2.95, 2.6] as [number, number, number],
        option: "color" as const,
    },
]

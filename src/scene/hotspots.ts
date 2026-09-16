import type { OptionKey, HotspotId } from "../types/configurator";

export type HotspotConfig = {
  id: HotspotId;
  position: [number, number, number];
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
        position: [-2.1, 1.8, 1.6] as [number, number, number],
        option: "wheels" as const,
    },
    {
        id: "chassi",
        position: [1.2, 3.1, 0.5] as [number, number, number],
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
        option: "color" as const,
    },
]

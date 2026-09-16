export type Theme = "dark" | "light"

export const OPTION_KEYS = ['wheels', 'chassi', 'rim', 'color'] as const
export type OptionKey = (typeof OPTION_KEYS)[number]

export const HOTSPOT_IDS = ["wheels-left", "wheels-right", "chassi", "rim-left", "rim-right", "color"] as const
export type HotspotId = (typeof HOTSPOT_IDS)[number]

export const RIM_IDS = ['standard', 'sport'] as const
export type RimId = (typeof RIM_IDS)[number]

export const WHEELS_IDS = ['textured', 'smooth'] as const
export type WheelsId = (typeof WHEELS_IDS)[number]

export const CHASSI_IDS = ['cyber', 'bubbly'] as const
export type ChassiId = (typeof CHASSI_IDS)[number]

export const FINISH_IDS = ['matte', 'glossy'] as const
export type FinishId = (typeof FINISH_IDS)[number]

export const COLOR_IDS = ['matte-silver', 'matte-black', 'glossy-silver', 'glossy-black'] as const
export type ColorId = (typeof COLOR_IDS)[number]

export type OptionValueMap = {
    wheels: WheelsId;
    chassi: ChassiId;
    rim: RimId;
    color: ColorId;
}
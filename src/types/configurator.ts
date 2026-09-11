export type Theme = "dark" | "light"

export const RIM_IDS = ['standard', 'sport'] as const
export type RimId = (typeof RIM_IDS)[number]

export const WHEELS_IDS = ['textured', 'smooth'] as const
export type WheelsId = (typeof WHEELS_IDS)[number]

export const CHASSI_IDS = ['cyber', 'bubbly'] as const
export type ChassiId = (typeof CHASSI_IDS)[number]
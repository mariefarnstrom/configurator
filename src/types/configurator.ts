export const RIM_IDS = ['standard', 'sport'] as const
export type RimId = (typeof RIM_IDS)[number]

export const TIRE_IDS = ['black', 'pink'] as const
export type TireId = (typeof TIRE_IDS)[number]

export const CHASSI_IDS = ['cyber', 'bubbly'] as const
export type ChassiId = (typeof CHASSI_IDS)[number]
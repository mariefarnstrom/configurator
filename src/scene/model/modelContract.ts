import type { RimId, WheelsId, ChassiId, ColorId } from "../../types/configurator"

export const MODEL_URL = '/models/WIP_2.glb'

export const RIM_NODES: Record<RimId, string> = {
  standard: 'Rim_1',
  sport: 'Rim_2',
}

export const WHEELS_NODES: Record<WheelsId, string> = {
  textured: 'Wheels_1',
  smooth: 'Wheels_2',
}

export const CHASSI_NODES: Record<ChassiId, string> = {
  cyber: 'Chassi_Cyber_Color',
  bubbly: 'Chassi_Bubble_Color',
}

export const SWITCHABLE_NODES = Object.values(RIM_NODES)

export const COLOR_LIBRARY_NODE = 'Color_library'

export const CHASSI_COLOR_MATERIALS: Record<ChassiId, Record<ColorId, string>> = {
  cyber: {
    silver: 'cyber_chassi_color_silver',
    black: 'cyber_chassi_color_black',
  },
  bubbly: {
    silver: 'Bubble_Chassi_Color_Silver_Glossy',
    black: 'Bubble_Chassi_Color_Black_Glossy',
  },
}
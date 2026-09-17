import type { RimId, WheelsId, ChassiId, ColorId, FinishId } from "../../types/configurator"

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

export const COLOR_MATERIALS: Record<ColorId, string> = {
  'matte-silver': 'cyber_chassi_color_silver',
  'matte-black': 'cyber_chassi_color_black',
  'glossy-silver': 'Bubble_Chassi_Color_Silver_Glossy',
  'glossy-black': 'Bubble_Chassi_Color_Black_Glossy',
}

export const COLOR_FINISH: Record<ColorId, FinishId> = {
  'matte-silver': 'matte',
  'matte-black': 'matte',
  'glossy-silver': 'glossy',
  'glossy-black': 'glossy',
}

export const LIGHTS_ON_NODE = "Color_library_5"
export const LIGHTS_OFF_NODE = "Color_library_6"
export const CYBER_LIGHTS_NODE = "Chassi_Cyber_Lights"
export const BUBBLE_LIGHTS_NODE = "Chassi_Bubble_Lights"
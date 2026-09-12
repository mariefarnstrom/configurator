import type { RimId, WheelsId, ChassiId } from "../../types/configurator"

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
  cyber: 'Chassi_Cyber',
  bubbly: 'Chassi_Bubble',
}

export const SWITCHABLE_NODES = Object.values(RIM_NODES)
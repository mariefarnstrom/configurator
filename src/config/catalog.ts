import type { ChassiId, ColorId, RimId, WheelsId } from "../types/configurator";

export const BASE_PRICE = 1_250_000

export const RIM_OPTIONS: { id: RimId; label: string; price: number }[] = [
  { id: 'standard', label: 'Standard', price: 0 },
  { id: 'sport', label: 'Sport', price: 25_000 },
]

export const WHEELS_OPTIONS: { id: WheelsId; label: string; price: number }[] = [
  { id: 'textured', label: 'Textured', price: 0 },
  { id: 'smooth', label: 'Smooth', price: 8_000 },
]

export const CHASSI_OPTIONS: { id: ChassiId; label: string; price: number }[] = [
  { id: 'cyber', label: 'Cyber', price: 0 },
  { id: 'bubbly', label: 'Bubbly', price: 40_000 },
]

export const COLOR_OPTIONS: { id: ColorId; label: string; price: number }[] = [
  { id: 'silver', label: 'Silver', price: 0 },
  { id: 'black', label: 'Black', price: 0 },
]
import type { ChassiId, RimId, TireId } from "../types/configurator";

export const BASE_PRICE = 1_250_000

export const RIM_OPTIONS: { id: RimId; label: string; price: number }[] = [
  { id: 'standard', label: 'Standard', price: 0 },
  { id: 'sport', label: 'Sport', price: 25_000 },
]

export const TIRE_OPTIONS: { id: TireId; label: string; price: number }[] = [
  { id: 'black', label: 'Black', price: 0 },
  { id: 'pink', label: 'Pink', price: 8_000 },
]

export const CHASSI_OPTIONS: { id: ChassiId; label: string; price: number }[] = [
  { id: 'cyber', label: 'Cyber', price: 0 },
  { id: 'bubbly', label: 'Bubbly', price: 40_000 },
]
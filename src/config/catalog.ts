import type { ChassiId, ColorId, RimId, WheelsId } from "../types/configurator";

import wheelsStandard from "../assets/images/wheels/standard.png";
import wheelsSport from "../assets/images/wheels/sport.png";

export type CatalogItem<Id extends string> = {
  id: Id;
  label: string;
  price: number;
  image: string;
}

export const BASE_PRICE = 1_250_000

export const RIM_OPTIONS: CatalogItem<RimId>[] = [
  { id: 'standard', label: 'Standard', price: 0, image: "TEST" },
  { id: 'sport', label: 'Sport', price: 25_000, image: "TEST" },
]

export const WHEELS_OPTIONS: (CatalogItem<WheelsId> & {
  acceleration: number;
  topSpeed: number;
})[] = [
    {
      id: 'textured',
      label: 'Textured',
      price: 0,
      acceleration: 0,
      topSpeed: 0,
      image: wheelsSport
    },
    {
      id: 'smooth',
      label: 'Smooth',
      price: 8_000,
      acceleration: -0.1,
      topSpeed: 3,
      image: wheelsStandard
    },
  ]

export const CHASSI_OPTIONS: (CatalogItem<ChassiId> & {
  power: number;
  torque: number;
  acceleration: number;
  topSpeed: number;
})[] = [
    { id: 'cyber', label: 'Cyber', price: 0, power: 842, torque: 1240, acceleration: 2.8, topSpeed: 218, image: "TEST" },
    { id: 'bubbly', label: 'Bubbly', price: 40_000, power: 620, torque: 980, acceleration: 3.6, topSpeed: 195, image: "TEST" },
  ]

export const COLOR_OPTIONS: CatalogItem<ColorId>[] = [
  { id: 'silver', label: 'Silver', price: 0, image: "TEST" },
  { id: 'black', label: 'Black', price: 0, image: "TEST" },
]
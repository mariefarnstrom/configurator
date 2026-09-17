import type { ChassiId, ColorId, RimId, WheelsId } from "../types/configurator";

import wheelsStandard from "../assets/images/wheels/standard.png";
import wheelsSport from "../assets/images/wheels/sport.png";

import rimSport from "../assets/images/rims/sport.png";
import rimStandard from "../assets/images/rims/standard.png";

import chassiCyber from "../assets/images/chassis/chassi_cyber.png";
import chassiBubble from "../assets/images/chassis/chassi_bubble.png";

import glossyBlack from "../assets/images/colors/glossy_black.png";
import matteBlack from "../assets/images/colors/matte_black.png";
import glossySilver from "../assets/images/colors/glossy_silver.png";
import matteSilver from "../assets/images/colors/matte_silver.png";

export type CatalogItem<Id extends string> = {
  id: Id;
  label: string;
  price: number;
  image: string;
}

export const BASE_PRICE = 125_000

export const RIM_OPTIONS: CatalogItem<RimId>[] = [
  { id: 'standard', label: 'Standard', price: 0, image: rimStandard },
  { id: 'sport', label: 'Sport', price: 4_500, image: rimSport },
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
      price: 2_500,
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
    { id: 'cyber', label: 'Cyber', price: 0, power: 842, torque: 1240, acceleration: 2.8, topSpeed: 218, image: chassiCyber },
    { id: 'bubbly', label: 'Bubbly', price: 7_500, power: 620, torque: 980, acceleration: 3.6, topSpeed: 195, image: chassiBubble },
  ]

export const COLOR_OPTIONS: CatalogItem<ColorId>[] = [
  { id: 'glossy-silver', label: 'Glossy Silver', price: 1_500, image: glossySilver },
  { id: 'matte-silver', label: 'Matte Silver', price: 0, image: matteSilver },
  { id: 'glossy-black', label: 'Glossy Black', price: 2_000, image: glossyBlack },
  { id: 'matte-black', label: 'Matte Black', price: 0, image: matteBlack },
]
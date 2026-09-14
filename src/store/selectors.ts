import { RIM_OPTIONS, WHEELS_OPTIONS, CHASSI_OPTIONS, COLOR_OPTIONS, BASE_PRICE } from "../config/catalog";
import type { ConfiguratorState } from "./configuratorStore";


export function selectTotalPrice(state: ConfiguratorState): number {
    const rimPrice = RIM_OPTIONS.find((option) => option.id === state.rim)?.price ?? 0;
    const tirePrice = WHEELS_OPTIONS.find((option) => option.id === state.wheels)?.price ?? 0;
    const chassiPrice = CHASSI_OPTIONS.find((option) => option.id === state.chassi)?.price ?? 0;
    const colorPrice = COLOR_OPTIONS.find((option) => option.id === state.color)?.price ?? 0;

    return BASE_PRICE + rimPrice + tirePrice + chassiPrice + colorPrice;
}
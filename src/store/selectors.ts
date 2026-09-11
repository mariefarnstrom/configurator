import { RIM_OPTIONS, TIRE_OPTIONS, CHASSI_OPTIONS, BASE_PRICE } from "../config/catalog";
import type { ConfiguratorState } from "./configuratorStore";


export function selectTotalPrice(state: ConfiguratorState): number {
    const rimPrice = RIM_OPTIONS.find((option) => option.id === state.rim)?.price ?? 0;
    const tirePrice = TIRE_OPTIONS.find((option) => option.id === state.tire)?.price ?? 0;
    const chassiPrice = CHASSI_OPTIONS.find((option) => option.id === state.chassi)?.price ?? 0;

    return BASE_PRICE + rimPrice + tirePrice + chassiPrice;
}
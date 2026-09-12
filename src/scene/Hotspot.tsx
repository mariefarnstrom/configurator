import { Html } from "@react-three/drei";
import { useConfiguratorStore } from "../store/configuratorStore";
import type { OptionKey } from "../types/configurator";

type HotspotProps = {
    position: [number, number, number];
    option: OptionKey;
};


export function Hotspot({ position, option }: HotspotProps) {
    const setActiveOption = useConfiguratorStore((state) => state.setActiveOption);

    return (
        <Html position={position}>
            <button className="bg-red-400" onClick={() => setActiveOption(option)}>
                +
            </button>
        </Html>
    );
}
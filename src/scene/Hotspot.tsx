import { Html } from "@react-three/drei";
import { useConfiguratorStore } from "../store/configuratorStore";
import type { OptionKey } from "../types/configurator";

import PlusIcon from "../assets/icons/plus.svg?react";

type HotspotProps = {
    position: [number, number, number];
    option: OptionKey;
};


export function Hotspot({ position, option }: HotspotProps) {
    const setActiveOption = useConfiguratorStore((state) => state.setActiveOption);

    const activeOption = useConfiguratorStore((state) => state.activeOption);

    const isOpen = activeOption === option;

    return (
        <Html position={position}>
            <button className="bg-hotspot aspect-square w-11.5 flex justify-center items-center rounded-full" onClick={() => setActiveOption(isOpen ? null : option)}>
                <PlusIcon
                        className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${
                            isOpen ? "rotate-45" : "rotate-0"
                        }`}
                    />
            </button>
        </Html>
    );
}
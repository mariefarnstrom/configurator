import { Html } from "@react-three/drei";
import { useConfiguratorStore } from "../store/configuratorStore";
import { OptionDrawer } from "../ui/panels/OptionDrawer";
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
            <div className="relative aspect-square w-11.5">
                <OptionDrawer option={option} />

                <button
                    aria-expanded={isOpen}
                    className="bg-accent/60 absolute inset-0 flex justify-center items-center rounded-full"
                    onClick={() => setActiveOption(isOpen ? null : option)}
                >
                    <PlusIcon
                        className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${isOpen ? "rotate-45" : "rotate-0"
                            }`}
                    />
                </button>
            </div>
        </Html>
    );
}
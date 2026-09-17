import { Html } from "@react-three/drei";
import { useConfiguratorStore } from "../store/configuratorStore";
import { OptionDrawer } from "../ui/panels/OptionDrawer";
import type { OptionKey } from "../types/configurator";
import type { HotspotConfig } from "./hotspots";

import PlusIcon from "../assets/icons/plus.svg?react";

type HotspotProps = HotspotConfig


export function Hotspot({ id, position, option }: HotspotProps) {

    const setActiveOption = useConfiguratorStore((state) => state.setActiveOption);
    const activeOption = useConfiguratorStore((state) => state.activeOption);
    const activeHotspot = useConfiguratorStore((state) => state.activeHotspot);
    const setActiveHotspot = useConfiguratorStore((state) => state.setActiveHotspot);
    const isOpen = activeOption === option && activeHotspot === id;

    const ariaLabel: Record<OptionKey, string> = {
        wheels: "Choose tires",
        rim: "Choose rims",
        chassi: "Choose chassi",
        color: "Choose color",
    }

    return (
        <Html position={position} occlude>
            <div className="relative aspect-square w-11.5">
                {isOpen && <OptionDrawer option={option} />}

                <button
                    aria-label={ariaLabel[option]}
                    aria-expanded={isOpen}
                    className="bg-accent/60 absolute inset-0 flex justify-center items-center rounded-full"
                    onClick={() => {
                        if (isOpen) {
                            setActiveOption(null);
                            setActiveHotspot(null);
                        } else {
                            setActiveOption(option);
                            setActiveHotspot(id);
                        }
                    }}
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
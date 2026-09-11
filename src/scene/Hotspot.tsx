import { Html } from "@react-three/drei";
import { useConfiguratorStore } from "../store/configuratorStore";

type HotspotProps = {
    position: [number, number, number];
    option: "tire" | "chassi" | "rim";
};


export function Hotspot({ position, option }: HotspotProps) {
    const { setActiveOption } = useConfiguratorStore();

    return (
        <Html position={position}>
            <button className="bg-red-400" onClick={() => setActiveOption(option)}>
                +
            </button>
        </Html>
    );
}
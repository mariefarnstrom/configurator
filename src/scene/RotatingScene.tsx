import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

import { CarModel } from "./model/CarModel"
import { Hotspot } from "./Hotspot"
import { hotspots } from "./hotspots"
import { useConfiguratorStore } from "../store/configuratorStore"

type RotatingSceneProps = {
    rotation: React.RefObject<number>
    isDragging: React.RefObject<boolean>
    activeOption: string | null
}

export function RotatingScene({
    rotation,
    isDragging,
    activeOption,
}: RotatingSceneProps) {
    const groupRef = useRef<THREE.Group>(null)
    const chassi = useConfiguratorStore((state) => state.chassi)

    useFrame((_, delta) => {
        if (!groupRef.current) return

        if (!activeOption && !isDragging.current) {
            rotation.current -= delta * 0.00
        }

        groupRef.current.rotation.y = rotation.current
    })

    return (
        <group
            ref={groupRef}
            position={[0, -1, 0]}
        >
            <CarModel />

            {hotspots.map((hotspot) => {
                const position =
                    chassi === "bubbly" && hotspot.bubblyPosition
                        ? hotspot.bubblyPosition
                        : hotspot.position
                return (
                    <Hotspot
                        key={hotspot.id}
                        id={hotspot.id}
                        position={position}
                        option={hotspot.option}
                    />
                )
            })}
        </group>
    )
}
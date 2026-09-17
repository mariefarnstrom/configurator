import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

import { TruckModel } from "./model/TruckModel"
import { Hotspot } from "./Hotspot"
import { hotspots } from "./hotspots"
import { useConfiguratorStore } from "../store/configuratorStore"

type RotatingSceneProps = {
    rotationRef: React.RefObject<number>
    isDraggingRef: React.RefObject<boolean>
    activeOption: string | null
}

export function RotatingScene({
    rotationRef,
    isDraggingRef,
    activeOption,
}: RotatingSceneProps) {
    const groupRef = useRef<THREE.Group>(null)
    const chassi = useConfiguratorStore((state) => state.chassi)

    useFrame((_, delta) => {
        if (!groupRef.current) return

        if (!activeOption && !isDraggingRef.current) {
            rotationRef.current -= delta * 0.03
        }

        groupRef.current.rotation.y = rotationRef.current
    })

    return (
        <group
            ref={groupRef}
            position={[0, -1, 0]}
        >
            <TruckModel />

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
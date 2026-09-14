import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Hotspot } from "../scene/Hotspot"
import { hotspots } from "../scene/hotspots"
import { CarModel } from "../scene/model/CarModel"
import { useDragRotation } from "../hooks/useDragRotation"
import { useConfiguratorStore } from "../store/configuratorStore"

export function TruckCanvas() {

    const { handlePointerDown, handlePointerMove, handlePointerUp, rotation } = useDragRotation()

    const { theme } = useConfiguratorStore()
    const hdri = (theme === "light") ? "/hdri/HDRI_Day.hdr" : "/hdri/HDRI_Night.hdr"

    return (
        <div className={`h-dvh relative
        ${(theme === "dark") ?
                "bg-[radial-gradient(ellipse_120%_90%_at_50%_110%,#1d1d1d_0%,#2e2e2e_20%,#373737_45%,#282828_70%,#222222_100%)]"
                :
                "bg-[radial-gradient(ellipse_125%_95%_at_50%_115%,#DDDDDD_0%,#D5D5D5_20%,#C5C5C5_40%,#B0B0B0_65%,#999999_100%)]"
            }
        `}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}>
            <Canvas camera={{ position: [0, 4, 13], fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />
                <Environment files={hdri} />

                <group
                    rotation={[0, rotation, 0]}
                    position={[0, -1, 0]}
                >
                    <CarModel />
                    {hotspots.map((hotspot) => (
                        <Hotspot
                            key={hotspot.id}
                            position={hotspot.position}
                            option={hotspot.option}
                        />
                    ))}
                </group>

                <OrbitControls
                    enableRotate={false}
                    enablePan={false}
                    minDistance={10}
                    maxDistance={10}
                />
            </Canvas>
        </div>
    )
}
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Hotspot } from "../scene/Hotspot"
import { hotspots } from "../scene/hotspots"
import { CarModel } from "../scene/model/CarModel"
import { useDragRotation } from "../hooks/useDragRotation"
import { useConfiguratorStore } from "../store/configuratorStore"

export function TruckCanvas() {

    const { handlePointerDown, handlePointerMove, handlePointerUp, rotation, isDragging } = useDragRotation()

    const { theme } = useConfiguratorStore()
    const hdri = (theme === "light") ? "/hdri/HDRI_Day.hdr" : "/hdri/HDRI_Night.hdr"

    return (
        <div className={`h-dvh relative
            ${!isDragging ? "cursor-grab" : "cursor-grabbing"}
        ${(theme === "dark") ?
                "bg-[radial-gradient(ellipse_120%_90%_at_50%_110%,#323232_0%,#2b2b2b_20%,#2A2A2A_45%,#202020_70%,#1A1A1A_100%)]"
                :
                "bg-[radial-gradient(ellipse_125%_95%_at_50%_115%,#dbdbdb_0%,#e4e4e4_20%,#e4e4e4_40%,#b8b8b8_75%,#999999_100%)]"
            }
        `}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}>

            {/* Ellipse */}
            <div className={`
            absolute
            left-1/2
            bottom-40
            -translate-x-1/2
            w-[min(1000px,80vw)]
            h-[325px]
            rounded-[50%]
            border
            pointer-events-none
            ${(theme === "light" ? "border-[#999999]" : "border-[#ACACAC]")}
            `} />

            {/* 360 symbol */}
            <div className="absolute bottom-36.5 left-1/2 -translate-x-1/2 z-10 w-18 h-8 p-0 rounded-[128px] bg-white text-sm flex items-center justify-center gap-1 pr-1">
                <img src="/icons/Globe.svg" alt="" className="h-4" />
                <span>360</span>
            </div>

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
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { useDragRotation } from "../hooks/useDragRotation"
import { useConfiguratorStore } from "../store/configuratorStore"
import { RotatingScene } from "../scene/RotatingScene"
import { GlobeIcon } from "../assets/icons/GlobeIcon"

export function TruckCanvas() {

    const { handlePointerDown, handlePointerMove, handlePointerUp, rotationRef, isDraggingRef, isDraggingState } = useDragRotation()

    const { theme, activeOption } = useConfiguratorStore()
    const hdri = (theme === "light") ? "/hdri/HDRI_Day.hdr" : "/hdri/HDRI_Night.hdr"

    return (
        <div className={`h-dvh relative
            ${!isDraggingState ? "cursor-grab" : "cursor-grabbing"}
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
            <div className="absolute bottom-36.5 left-1/2 -translate-x-1/2 z-10 w-18 h-8 p-0 rounded-[128px] text-sm border border-[#999999] flex items-center justify-center gap-1 pr-1 bg-container-big backdrop-blur-2xl text-primary-text"
            >
                <GlobeIcon />
                <span>360</span>
            </div>

            <Canvas camera={{ position: [0, 4, 13], fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />
                <Environment files={hdri} />

                <RotatingScene
                    rotationRef={rotationRef}
                    isDraggingRef={isDraggingRef}
                    activeOption={activeOption}
                />

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
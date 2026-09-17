import { useEffect } from "react";
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { useConfiguratorStore } from "../../store/configuratorStore"
import { applyLightsMaterial } from "../applyLightsMaterial";
import { applyChassiColorMaterial } from "../applyChassiColorMaterial";
import { MODEL_URL, RIM_NODES, WHEELS_NODES, CHASSI_NODES, COLOR_LIBRARY_NODE } from "./modelContract";

function applyVisibility<Id extends string>(
    scene: THREE.Object3D,
    nodes: Record<Id, string>,
    selected: Id,
) {
    for (const [id, nodeName] of Object.entries(nodes) as [Id, string][]) {
        const node = scene.getObjectByName(nodeName)
        if (node) node.visible = id === selected
    }
}

export function TruckModel() {
    const theme = useConfiguratorStore((state) => state.theme);
    const chassi = useConfiguratorStore((state) => state.chassi);
    const wheels = useConfiguratorStore((state) => state.wheels);
    const rim = useConfiguratorStore((state) => state.rim);
    const color = useConfiguratorStore((state) => state.color);
    const { scene, materials } = useGLTF(MODEL_URL)

    useEffect(() => {
        applyVisibility(scene, WHEELS_NODES, wheels)
        applyVisibility(scene, CHASSI_NODES, chassi)
        applyVisibility(scene, RIM_NODES, rim)

        const colorLibrary = scene.getObjectByName(COLOR_LIBRARY_NODE)

        if (colorLibrary) colorLibrary.visible = false
    }, [scene, wheels, chassi, rim])

    useEffect(() => {
        applyLightsMaterial(scene, theme)
    }, [scene, theme])

    useEffect(() => {
        applyChassiColorMaterial(scene, materials, chassi, color)
    }, [scene, materials, chassi, color])

    return <primitive object={scene} />
}
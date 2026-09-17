import * as THREE from "three"
import type { ChassiId, ColorId } from "../types/configurator"
import { CHASSI_NODES, COLOR_MATERIALS } from "./model/modelContract"

export function applyChassiColorMaterial(
    scene: THREE.Object3D,
    materials: Record<string, THREE.Material>,
    chassi: ChassiId,
    color: ColorId,
) {
    const chassiColorNode = scene.getObjectByName(CHASSI_NODES[chassi])
    const colorMaterial = materials[COLOR_MATERIALS[color]]

    if (chassiColorNode instanceof THREE.Mesh && colorMaterial) {
        chassiColorNode.material = colorMaterial
    }
}

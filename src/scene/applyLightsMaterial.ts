import * as THREE from "three"
import type { Theme }  from "../types/configurator"
import { BUBBLE_LIGHTS_NODE, CYBER_LIGHTS_NODE, LIGHTS_OFF_NODE, LIGHTS_ON_NODE } from "./model/modelContract"

export function applyLightsMaterial(
    scene: THREE.Object3D,
    theme: Theme,
) {
    const lightsOn = scene.getObjectByName(LIGHTS_ON_NODE)
    const lightsOff = scene.getObjectByName(LIGHTS_OFF_NODE)

    const cyberLights = scene.getObjectByName(CYBER_LIGHTS_NODE)
    const bubbleLights = scene.getObjectByName(BUBBLE_LIGHTS_NODE)

    if (
        !(lightsOn instanceof THREE.Mesh) ||
        !(lightsOff instanceof THREE.Mesh) ||
        !(cyberLights instanceof THREE.Mesh) ||
        !(bubbleLights instanceof THREE.Mesh)
    ) return


    const material = theme === "dark"
        ? lightsOn.material
        : lightsOff.material

    cyberLights.material = material
    bubbleLights.material = material
}
import * as THREE from "three"
import type { Theme }  from "../types/configurator"

export function applyLightsMaterial(
    scene: THREE.Object3D,
    theme: Theme,
) {
    const lightsOn = scene.getObjectByName("Color_library_5")
    const lightsOff = scene.getObjectByName("Color_library_6")

    const cyberLights = scene.getObjectByName("Chassi_Cyber_Lights")
    const bubbleLights = scene.getObjectByName("Chassi_Bubble_Lights")

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
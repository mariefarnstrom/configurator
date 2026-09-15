import * as THREE from "three"

export function applyLightsMaterial(
    scene: THREE.Object3D,
    theme: "light" | "dark",
) {
    const lightsOn = scene.getObjectByName("Color_library_5") as THREE.Mesh
    const lightsOff = scene.getObjectByName("Color_library_6") as THREE.Mesh

    const cyberLights = scene.getObjectByName("Chassi_Cyber_Lights") as THREE.Mesh
    const bubbleLights = scene.getObjectByName("Chassi_Bubble_Lights") as THREE.Mesh

    if (!lightsOn || !lightsOff || !cyberLights || !bubbleLights) return

    const material = theme === "dark"
        ? lightsOn.material
        : lightsOff.material

    cyberLights.material = material
    bubbleLights.material = material
}
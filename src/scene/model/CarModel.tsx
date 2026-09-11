import { useGLTF } from "@react-three/drei"
import { useConfiguratorStore } from "../../store/configuratorStore"

export function CarModel() {
    const { chassi, tire } = useConfiguratorStore()
    const { scene } = useGLTF("/models/WIP_1.glb")

    const wheels1 = scene.getObjectByName("Wheels_1")
    const wheels2 = scene.getObjectByName("Wheels_2")
    const chassi1 = scene.getObjectByName("Chassi_1")
    const chassi2 = scene.getObjectByName("Chassi_2")

    if (wheels1) wheels1.visible = tire === "black"
    if (wheels2) wheels2.visible = tire === "pink"
    if (chassi1) chassi1.visible = chassi === "cyber"
    if (chassi2) chassi2.visible = chassi === "bubbly"

    return <primitive object={scene} />
}
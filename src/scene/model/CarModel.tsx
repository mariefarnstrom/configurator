import { useGLTF } from "@react-three/drei"
import { useConfiguratorStore } from "../../store/configuratorStore"
import { MODEL_URL } from "./modelContract";

export function CarModel() {
    const chassi = useConfiguratorStore((state) => state.chassi);
    const tire = useConfiguratorStore((state) => state.tire);
    const rim = useConfiguratorStore((state) => state.rim);
    const { scene } = useGLTF(MODEL_URL)

    const wheels1 = scene.getObjectByName("Wheels_1")
    const wheels2 = scene.getObjectByName("Wheels_2")
    const chassi1 = scene.getObjectByName("Chassi_1")
    const chassi2 = scene.getObjectByName("Chassi_2")
    const rim1 = scene.getObjectByName("Rim_1")
    const rim2 = scene.getObjectByName("Rim_2")

    if (wheels1) wheels1.visible = tire === "black"
    if (wheels2) wheels2.visible = tire === "pink"
    if (chassi1) chassi1.visible = chassi === "cyber"
    if (chassi2) chassi2.visible = chassi === "bubbly"
    if (rim1) rim1.visible = rim === "standard"
    if (rim2) rim2.visible = rim === "sport"

    return <primitive object={scene} />
}
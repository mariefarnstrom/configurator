import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { useState } from "react"

function printTree(object: THREE.Object3D, depth = 0) {
    console.log(" ".repeat(depth * 2) + object.name + " (" + object.type + ")")

    object.children.forEach((child) => {
        printTree(child, depth + 1)
    })
}

function Car({ wheels }: { wheels: string }) {
    const { scene } = useGLTF("/models/WIP_1.glb")

    const wheels1 = scene.getObjectByName("Wheels_1")
    const wheels2 = scene.getObjectByName("Wheels_2")

    if (wheels1) wheels1.visible = wheels === "Wheels_1"
    if (wheels2) wheels2.visible = wheels === "Wheels_2"

    printTree(scene)

    return <primitive object={scene} />
}

export function TruckCanvas() {

    const [wheels, setWheels] = useState('Wheels_1');

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
        console.log(wheels);
    }

    return (
        <div className="h-dvh">
            <form onSubmit={handleSubmit}>
                <select onChange={(e) => setWheels(e.target.value)} name="tires" id="">
                    <option value="Wheels_1">Wheels_1</option>
                    <option value="Wheels_2">Wheels_2</option>

                </select>
            </form>
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />

                <Car wheels={wheels} />

                <OrbitControls />
            </Canvas>
        </div>
    )
}
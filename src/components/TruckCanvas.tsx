import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { useState } from "react"

export function TruckCanvas() {

    const [wheels, setWheels] = useState('hej');

    function printTree(object: THREE.Object3D, depth = 0) {
        console.log(" ".repeat(depth * 2) + object.name + " (" + object.type + ")")

        object.children.forEach((child) => {
            printTree(child, depth + 1)
        })
    }

    function Car() {
        const { scene } = useGLTF("/models/WIP_1.glb")

        // const chassi = scene.getObjectByName("Chassi_1")
        // const wheels = scene.getObjectByName("Wheels_1")

        // if (chassi) {
        //     chassi.removeFromParent()
        // }

        // if (wheels) {
        //     wheels.removeFromParent()
        // }

        printTree(scene)

        return <primitive object={scene} />
    }


    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <select onChange={(e) => setWheels(e.target.value)} name="tires" id="">
                    <option value=""></option>

                </select>
                <input name="query" />
                <button type="submit">Search</button>
            </form>
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />

                <Car />

                <OrbitControls />
            </Canvas>
        </>
    )
}
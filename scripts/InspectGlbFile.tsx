import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MODEL_URL } from "../src/scene/model/modelContract";
import * as THREE from "three";

export function InspectGlbFile() {
  const { scene } = useGLTF(MODEL_URL);

  useEffect(() =>
    scene.traverse((child) => {
      if (child instanceof THREE.Group) {
        console.log(child.name, child);
      }
    }),
  );

  // useEffect(() =>
  //     scene.traverse((child) => {
  //         if (child instanceof THREE.Mesh) {
  //             console.log(child.name, child)
  //         }
  //     }))

  //     scene.traverse((object) => {
  //     console.log(object.type, object.name)
  // })

  return null;
}

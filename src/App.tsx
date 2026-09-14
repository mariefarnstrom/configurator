// import { TruckCanvas } from './components/TruckCanvas'
// import { Overlay } from './ui/layout/Overlay'
// import { useConfiguratorStore } from './store/configuratorStore'
// import { useEffect } from 'react'

// function App() {

//   const { theme } = useConfiguratorStore()

//   useEffect(() => {
//     document.body.classList.toggle("dark", theme === "dark")
//   }, [theme])

//   return (
//     <div className='static'>
//       <TruckCanvas></TruckCanvas>
//       <Overlay></Overlay>

//     </div>
//   )
// }

// export default App


import { TruckCanvas } from './components/TruckCanvas'
import { Overlay } from './ui/layout/Overlay'

import { useEffect } from 'react'
import { useGLTF } from "@react-three/drei"
import { MODEL_URL } from './scene/model/modelContract'
import * as THREE from "three"

function App() {

  function InspectGlbFile() {
    const { scene } = useGLTF(MODEL_URL)

    useEffect(() =>
        scene.traverse((child) => {
            if (child instanceof THREE.Group) {
                console.log(child.name, child)
            }
        }))

    // useEffect(() =>
    //     scene.traverse((child) => {
    //         if (child instanceof THREE.Mesh) {
    //             console.log(child.name, child)
    //         }
    //     }))


    //     scene.traverse((object) => {
    //     console.log(object.type, object.name)
    // })

    return null
}

  return (
    <div className='static'>
      <InspectGlbFile/>
      <TruckCanvas></TruckCanvas>
      <Overlay></Overlay>

    </div>
  )
}

export default App
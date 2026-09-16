import { TruckCanvas } from './components/TruckCanvas'
import { Overlay } from './ui/layout/Overlay'


import { InspectGlbFile } from "../scripts/InspectGlbFile"

function App() {


  return (
    <div className='static'>
      <TruckCanvas />
      <Overlay />

      {/* dev: */}
      {import.meta.env.DEV && <InspectGlbFile />}
    </div>
  )
}

export default App
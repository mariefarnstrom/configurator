import { useEffect } from 'react'
import { TruckCanvas } from './components/TruckCanvas'
import { Overlay } from './ui/layout/Overlay'
import { useConfiguratorStore } from './store/configuratorStore'


import { InspectGlbFile } from "../scripts/InspectGlbFile"

function App() {

  const theme = useConfiguratorStore((state) => state.theme)

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className='static'>
      <main>
        <TruckCanvas />
        <Overlay />
      </main>

      {/* dev: */}
      {import.meta.env.DEV && <InspectGlbFile />}
    </div>
  )
}

export default App
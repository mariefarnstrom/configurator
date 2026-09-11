import { TruckCanvas } from './components/TruckCanvas'
import { Overlay } from './ui/layout/Overlay'
import { useConfiguratorStore } from './store/configuratorStore'
import { useEffect } from 'react'

function App() {

  const { theme } = useConfiguratorStore()

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className='static'>
      <TruckCanvas></TruckCanvas>
      <Overlay></Overlay>

    </div>
  )
}

export default App

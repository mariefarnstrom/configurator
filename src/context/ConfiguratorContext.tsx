import { createContext, useContext, useState } from "react"

type ConfiguratorContextType = {
    selectedPart: string | null
    setSelectedPart: (part: string | null) => void
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(
    undefined
)
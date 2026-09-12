import { useState } from "react"

export function useDragRotation() {
    const [rotation, setRotation] = useState(5)
    const [isDragging, setIsDragging] = useState(false)
    const [lastX, setLastX] = useState(0)

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true)
        setLastX(e.clientX)
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return
        const deltaX = e.clientX - lastX
        setRotation((current) => current + deltaX * 0.01)
        setLastX(e.clientX)
    }

    const handlePointerUp = () => {
        setIsDragging(false)
    }

    return {
        rotation,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
    }
}
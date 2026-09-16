import { useRef, useState } from "react"

export function useDragRotation() {
    const rotation = useRef(5)
    const isDragging = useRef(false)
    const [isDraggingState, setIsDraggingState] = useState(false)
    const lastX = useRef(0)

    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true
        setIsDraggingState(true)
        lastX.current = (e.clientX)
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return
        const deltaX = e.clientX - lastX.current
        rotation.current += deltaX * 0.03
        lastX.current = (e.clientX)
    }

    const handlePointerUp = () => {
        isDragging.current = false
        setIsDraggingState(false)
    }

    return {
        rotation,
        isDragging,
        isDraggingState,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
    }
}
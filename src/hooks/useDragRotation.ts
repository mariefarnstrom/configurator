import { useRef, useState } from "react"

export function useDragRotation() {
    const rotationRef = useRef(5)
    const isDraggingRef = useRef(false)
    const [isDraggingState, setIsDraggingState] = useState(false)
    const lastX = useRef(0)

    const handlePointerDown = (e: React.PointerEvent) => {
        isDraggingRef.current = true
        setIsDraggingState(true)
        lastX.current = (e.clientX)
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return
        const deltaX = e.clientX - lastX.current
        rotationRef.current += deltaX * 0.01
        lastX.current = (e.clientX)
    }

    const handlePointerUp = () => {
        isDraggingRef.current = false
        setIsDraggingState(false)
    }

    return {
        rotationRef,
        isDraggingRef,
        isDraggingState,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
    }
}
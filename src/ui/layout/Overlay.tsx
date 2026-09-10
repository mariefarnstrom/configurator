export function Overlay() {
    return (
        <div className="grid grid-cols-3 absolute inset-0 w-dvw h-dvh pointer-events-none">
            <div className="bg-amber-200 w-36 h-36"></div>
            <div className="bg-amber-500 w-14 h-14 justify-self-center"></div>
            <div className="bg-amber-800 w-36 h-36 justify-self-end"></div>
            <div className="bg-amber-950 w-96 h-36 col-span-2 self-end"></div>
            <div className="bg-amber-600 w-48 h-36 justify-self-end self-end"></div>
        </div>
    )
}
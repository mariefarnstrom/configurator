import { useState } from "react"

export function ContinueModal() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-sm font-medium"
            >
                Continue &gt;
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-80 flex items-center justify-center bg-black/40"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        className="w-[400px] rounded-2xl bg-white p-8 text-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 id="modal-title" className="text-2xl font-semibold">
                            Hold your horses.
                        </h2>

                        <p className="mt-3">
                            You can build it, but you can't buy it… yet.
                        </p>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="mt-6"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
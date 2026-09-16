import { useConfiguratorStore } from "../store/configuratorStore"

export function SummaryShape() {
    const { theme } = useConfiguratorStore()

    return (
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 86"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 34C0 29.5817 3.58172 26 8 26H1144.01C1149.2 26 1154.24 24.3195 1158.4 21.2103L1180.32 4.78973C1184.47 1.68047 1189.52 0 1194.71 0H1432C1436.42 0 1440 3.58172 1440 8V86H0V34Z"
                fill={theme === "light" ? "rgba(255, 255, 255, 0.40)" : "rgba(0, 0, 0, 0.20)"}
            />
        </svg>
    )
}
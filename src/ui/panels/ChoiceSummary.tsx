import { useConfiguratorStore } from "../../store/configuratorStore"
import { selectTotalPrice } from "../../store/selectors";

function PriceTag() {
    const totalPrice = useConfiguratorStore(selectTotalPrice);
    return <p>$ {totalPrice.toLocaleString("sv-SE")}</p>;
}

export function ChoiceSummary() {
    const { chassi, wheels, rim, color, theme } = useConfiguratorStore()
    const selection = {
        body: chassi,
        color: color,
        rim: rim,
        tire: wheels,
    }

    return (
        <div
            className={`
                absolute bottom-0 left-0 w-dvw h-[86px]
                text-sm text-first-summary-text font-primary font-medium
                ${theme === "light" ? "light" : "dark"}
            `}
        >
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1440 86"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 34C0 29.5817 3.58172 26 8 26H1144.01C1149.2 26 1154.24 24.3195 1158.4 21.2103L1180.32 4.78973C1184.47 1.68047 1189.52 0 1194.71 0H1432C1436.42 0 1440 3.58172 1440 8V86H0V34Z"
                    fill={theme === "light" ? "white" : "black"}
                />
            </svg>

            <div className="relative z-10 h-full w-2/3 pl-10 flex items-end justify-between">
                <p className="px-6 py-5">
                    Body
                    <span className="text-second-summary-text pl-2 capitalize">
                        {selection.body.charAt(0).toUpperCase() + selection.body.slice(1)}
                    </span>
                </p>

                <p className="px-6 py-5">
                    Color
                    <span className="text-second-summary-text pl-2">
                        {selection.color.charAt(0).toUpperCase() + selection.color.slice(1)}
                    </span>
                </p>

                <p className="px-6 py-5">
                    Rim
                    <span className="text-second-summary-text pl-2">
                        {selection.rim.charAt(0).toUpperCase() + selection.rim.slice(1)}
                    </span>
                </p>

                <p className="px-6 py-5">
                    Tire
                    <span className="text-second-summary-text pl-2">
                        {selection.tire.charAt(0).toUpperCase() + selection.tire.slice(1)}
                    </span>
                </p>
            </div>

            <div className="absolute right-0 top-0 z-10 w-1/6 h-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-end text-primary-text font-semibold">
                    <span className="text-2xl">
                        <PriceTag />
                    </span>


                    <button className="text-sm font-medium">
                        Continue →
                    </button>
                </div>
            </div>
        </div>
    )
}
import { SummaryShape } from "../../components/SummaryShape";
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
            <SummaryShape />

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
                        Continue &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}
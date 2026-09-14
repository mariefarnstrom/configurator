import { Button } from "../primitives/Button"
import { useConfiguratorStore } from "../../store/configuratorStore"
import { selectTotalPrice } from "../../store/selectors";

function PriceTag() {
    const totalPrice = useConfiguratorStore(selectTotalPrice);
    return <p>{totalPrice.toLocaleString("sv-SE")} kr</p>;
}

export function ChoiceSummary() {
    const { chassi, wheels, rim, color } = useConfiguratorStore()
    const selection = {
        body: chassi,
        color: color,
        rim: rim,
        tire: wheels,
    }

    return (
        <div className="w-2xs h-48 justify-self-end self-end text-primary-text text-right">
            <div className="border-b border-[#BABABA] py-2">
                <h2 className="text-[22px] font-medium">CHOICE SUMMARY</h2>
                <p><span className="text-secondary-text pr-2">Body</span> {selection.body}</p>
                <p><span className="text-secondary-text pr-2">Color</span> {selection.color}</p>
                <p><span className="text-secondary-text pr-2">Rim</span> {selection.rim}</p>
                <p><span className="text-secondary-text pr-2">Tire</span> {selection.tire}</p>
            </div>
            <p className="py-4"><PriceTag /></p>
            <Button variant="primary">Place order</Button>
        </div>
    )
}
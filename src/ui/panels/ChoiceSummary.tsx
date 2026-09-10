import { Button } from "../primitives/Button"

export function ChoiceSummary() {
    const selection = {
        body: "Sedan",
        color: "Midnight blue",
        rim: '18" Alloy',
        tire: "All-season",
    }

    const sum = 1250000

    return (
        <div className="w-2xs h-48 justify-self-end self-end text-primary-text text-right">
            <div className="border-b border-[#BABABA] py-2">
                <h2 className="text-[22px] font-medium">CHOICE SUMMARY</h2>
                <p><span className="text-secondary-text pr-2">Body</span> {selection.body}</p>
                <p><span className="text-secondary-text pr-2">Color</span> {selection.color}</p>
                <p><span className="text-secondary-text pr-2">Rim</span> {selection.rim}</p>
                <p><span className="text-secondary-text pr-2">Tire</span> {selection.tire}</p>
            </div>
            <p className="py-4">{sum}</p>
            <Button variant="primary">Place order</Button>
        </div>
    )
}
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
        <div className="w-48 h-48 justify-self-end self-end text-primary-text text-right">
            <h2>CHOICE SUMMARY</h2>
            <p><span className="text-secondary-text">Body</span> {selection.body}</p>
            <p><span className="text-secondary-text">Color</span> {selection.color}</p>
            <p><span className="text-secondary-text">Rim</span> {selection.rim}</p>
            <p><span className="text-secondary-text">Tire</span> {selection.tire}</p>

            <p>{sum}</p>
            <Button variant="primary">Place order</Button>
        </div>
    )
}
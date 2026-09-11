import { useConfiguratorStore } from "../../store/configuratorStore";

export function OptionDrawer() {
    const { activeOption, setTire } = useConfiguratorStore()

    if (activeOption !== "tire") {
        return null;
    }

    return (
        <div className="absolute top-80 left-20 pointer-events-auto flex flex-col">
            <h2>TIRE</h2>
            <button onClick={() => setTire("black")}>Black</button>
            <button onClick={() => setTire("pink")}>Pink</button>
        </div>
    )
}
import { useConfiguratorStore } from "../../store/configuratorStore";
import type { ActiveOption } from "../../store/configuratorStore";
import { CHASSI_OPTIONS, RIM_OPTIONS, TIRE_OPTIONS } from "../../config/catalog";
import type { ChassiId, RimId, TireId } from "../../types/configurator";

type OptionKey = Exclude<ActiveOption, null>;
type OptionItem = { id: string; label: string; price: number };

const OPTION_LABELS: Record<OptionKey, string> = {
    tire: "TIRE",
    chassi: "CHASSI",
    rim: "RIM",
}

const OPTION_LISTS: Record<OptionKey, OptionItem[]> = {
    tire: TIRE_OPTIONS,
    chassi: CHASSI_OPTIONS,
    rim: RIM_OPTIONS,
}

export function OptionDrawer() {
    const activeOption = useConfiguratorStore((state) => state.activeOption);
    const setTire = useConfiguratorStore((state) => state.setTire);
    const setChassi = useConfiguratorStore((state) => state.setChassi);
    const setRim = useConfiguratorStore((state) => state.setRim);

    if (!activeOption) {
        return null;
    }

    const selectHandlers: Record<OptionKey, (id: string) => void> = {
        tire: (id) => setTire(id as TireId),
        chassi: (id) => setChassi(id as ChassiId),
        rim: (id) => setRim(id as RimId),
    }

    const options = OPTION_LISTS[activeOption];
    const onSelect = selectHandlers[activeOption];

    return (
        <div className="absolute top-80 left-20 pointer-events-auto flex flex-col">
            <h2>{OPTION_LABELS[activeOption]}</h2>
            {options.map((option) => (
                <button key={option.id} onClick={() => onSelect(option.id)}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}

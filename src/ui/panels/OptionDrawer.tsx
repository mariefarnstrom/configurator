import { useConfiguratorStore } from "../../store/configuratorStore";
import { CHASSI_OPTIONS, COLOR_OPTIONS, RIM_OPTIONS, WHEELS_OPTIONS } from "../../config/catalog";
import type { ChassiId, ColorId, OptionKey, RimId, WheelsId } from "../../types/configurator";

type OptionItem = { id: string; label: string; price: number };

const OPTION_LABELS: Record<OptionKey, string> = {
    wheels: "WHEELS",
    chassi: "CHASSI",
    rim: "RIM",
    color: "COLOR",
}

const OPTION_LISTS: Record<OptionKey, OptionItem[]> = {
    wheels: WHEELS_OPTIONS,
    chassi: CHASSI_OPTIONS,
    rim: RIM_OPTIONS,
    color: COLOR_OPTIONS,
}

export function OptionDrawer() {
    const activeOption = useConfiguratorStore((state) => state.activeOption);
    const setWheels = useConfiguratorStore((state) => state.setWheels);
    const setChassi = useConfiguratorStore((state) => state.setChassi);
    const setRim = useConfiguratorStore((state) => state.setRim);
    const setColor = useConfiguratorStore((state) => state.setColor);

    if (!activeOption) {
        return null;
    }

    const selectHandlers: Record<OptionKey, (id: string) => void> = {
        wheels: (id) => setWheels(id as WheelsId),
        chassi: (id) => setChassi(id as ChassiId),
        rim: (id) => setRim(id as RimId),
        color: (id) => setColor(id as ColorId),
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

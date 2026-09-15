import { useConfiguratorStore } from "../../store/configuratorStore";
import { CHASSI_OPTIONS, COLOR_OPTIONS, RIM_OPTIONS, WHEELS_OPTIONS } from "../../config/catalog";
import type { CatalogItem } from "../../config/catalog";
import type { ChassiId, ColorId, OptionKey, RimId, WheelsId } from "../../types/configurator";

type OptionItem = CatalogItem<WheelsId | ChassiId | RimId | ColorId>;

type OptionDrawerProps = {
    option: OptionKey;
};

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

const RADIUS = 57;
const START_ANGLE = -85;
const SPREAD = 75;

function fanOffset(index: number, count: number) {
    const angle = count === 1
        ? START_ANGLE + SPREAD / 2
        : START_ANGLE + (SPREAD * index) / (count - 1);

    const radians = (angle * Math.PI) / 180;

    return {
        x: Math.cos(radians) * RADIUS,
        y: Math.sin(radians) * RADIUS,
    };
}

export function OptionDrawer({ option }: OptionDrawerProps) {
    const activeOption = useConfiguratorStore((state) => state.activeOption);
    const selectedId = useConfiguratorStore((state) => state[option]);
    const setOption = useConfiguratorStore((state) => state.setOption);

    const isOpen = activeOption === option;
    const options = OPTION_LISTS[option];


    return (
        <div className="contents" role="group" aria-label={OPTION_LABELS[option]}>
            {options.map((item, index) => {
                const { x, y } = fanOffset(index, options.length);
                const isSelected = selectedId === item.id;

                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => setOption(option, item.id)}
                        aria-pressed={isSelected}
                        tabIndex={isOpen ? 0 : -1}
                        style={{
                            transform: isOpen
                                ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                                : "translate(-50%, -50%) scale(0)",
                            opacity: isOpen ? 1 : 0,
                            transitionDelay: `${isOpen ? index * 60 : 0}ms`,
                        }}
                        className={`absolute top-1/2 left-1/2 aspect-square w-13.75 bg-white rounded-full transition-[transform,opacity] duration-400 ease-out motion-reduce:transition-none ${isSelected ? "outline-[1px] outline-offset-2 outline-solid outline-white" : " " }`}
                    >
                        <span className="absolute inset-0 rounded-full overflow-hidden">
                            <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                        </span>

                        <span className="font-primary absolute top-1/2 left-full ml-3 -translate-y-1/2 text-sm whitespace-nowrap text-white">
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    )
}

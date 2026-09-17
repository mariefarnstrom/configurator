import { useEffect, useRef } from "react";
import { useConfiguratorStore } from "../../store/configuratorStore";
import { CHASSI_OPTIONS, COLOR_OPTIONS, RIM_OPTIONS, WHEELS_OPTIONS } from "../../config/catalog";
import type { CatalogItem } from "../../config/catalog";
import type { OptionValueMap, OptionKey } from "../../types/configurator";

type OptionItem = CatalogItem<OptionValueMap[OptionKey]>;

type OptionDrawerProps = {
    option: OptionKey;
    isOpen: boolean;
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

const RADIUS_BASE = 57;
const RADIUS_GROWTH = 10;

const START_ANGLE_BASE = -90;
const START_ANGLE_SHIFT = 35;

const ANGLE_STEP_BASE = 75;
const ANGLE_STEP_SHRINK = 15;

//increase radius by every extra alternative
function getRadius(count: number) {
    return RADIUS_BASE + Math.max(0, count - 2) * RADIUS_GROWTH;
}

//reduce angle by every extra alternative
function getAngleStep(count: number) {
    return ANGLE_STEP_BASE - Math.max(0, count - 2) * ANGLE_STEP_SHRINK;
}

//move angle counterclockwise by every extra alternative
function getStartAngle(count: number) {
    return START_ANGLE_BASE - Math.max(0, count - 2) * START_ANGLE_SHIFT;
}

function fanOffset(index: number, count: number) {
    const radius = getRadius(count);
    const angleStep = getAngleStep(count);
    const startAngle = getStartAngle(count);
    const spread = angleStep * (count - 1);

    const angle = count === 1
        ? startAngle + spread / 2
        : startAngle + angleStep * index;

    const radians = (angle * Math.PI) / 180;
    return {
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
    };
}

export function OptionDrawer({ option, isOpen }: OptionDrawerProps) {
    const selectedId = useConfiguratorStore((state) => state[option]);
    const setOption = useConfiguratorStore((state) => state.setOption);

    const options = OPTION_LISTS[option];

    const firstOptionRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen) {
            firstOptionRef.current?.focus();
        }
    }, [isOpen]);


    return (
        <div className="contents" role="group" aria-label={OPTION_LABELS[option]}>
            {options.map((item, index) => {
                const { x, y } = fanOffset(index, options.length);
                const isSelected = selectedId === item.id;
                const isRightSide = x >= 0;

                return (
                    <button
                        key={item.id}
                        ref={index === 0 ? firstOptionRef : undefined}
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
                        className={`absolute top-1/2 left-1/2 aspect-square w-13.75 rounded-full transition-[transform,opacity] duration-400 ease-out motion-reduce:transition-none ${isOpen ? "" : "pointer-events-none"} ${isSelected ? "outline-[1px] outline-offset-2 outline-solid outline-white" : " "}`}
                    >
                        <span className="absolute inset-0 rounded-full overflow-hidden">
                            <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                        </span>

                        <span className={`font-primary absolute top-1/20 -translate-y-1/2 text-sm whitespace-nowrap text-white ${isRightSide ? "left-full ml-0.5" : "right-full mr-0.5"
                            }`}
                        >
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    )
}

import type { ComponentType, SVGProps } from "react";
import PowerIcon from "../../assets/icons/power.svg?react";
import TorqueIcon from "../../assets/icons/torque.svg?react";
import AccelerationIcon from "../../assets/icons/acceleration.svg?react";
import TopSpeedIcon from "../../assets/icons/topSpeed.svg?react";

type TechSpec = {
  label: string;
  value: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const specs: TechSpec[] = [
  { label: "Power", value: "842 Kw", Icon: PowerIcon },
  { label: "Torque", value: "1240 Nm", Icon: TorqueIcon },
  { label: "0-100km/h", value: "2.8s", Icon: AccelerationIcon },
  { label: "Top Speed", value: "218 km/h", Icon: TopSpeedIcon },
];

export function TechSpecPanel() {
  return (
    <section className="justify-self-end self-start bg-gray-500 py-6 px-4 rounded-lg pointer-events-auto">
      <h2 className="font-heading uppercase pb-4.5 text-[22px]/6">
        Technical <br />
        specification
      </h2>

      <dl className="grid grid-cols-2 gap-1">
        {specs.map(({ label, value, Icon }) => (
          <div
            key={label}
            className="bg-gray-400 rounded-xl aspect-76/86 px-3 py-1.75 flex flex-col justify-between"
          >
            <div
              aria-hidden="true"
              className="aspect-square w-6 flex justify-center items-center"
            >
              <Icon />
            </div>

            <div>
              <dt className="font-primary text-xs">{label}</dt>
              <dd className="font-primary text-base">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}

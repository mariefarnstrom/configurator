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
    <section className="justify-self-end self-start bg-gray-500 py-6 px-4 rounded-lg pointer-events-auto min w-59 text-primary-text">
      <h2 className="font-primary pb-4.5 text-[18px]/[0.92] font-semibold tracking-[-1.26px]">
        Technical specification
      </h2>

      <dl className="grid grid-cols-2 gap-1">
        {specs.map(({ label, value, Icon }) => (
          <div
            key={label}
            className="bg-gray-400 rounded-lg aspect-square p-2 flex flex-col justify-between min-w-25"
          >

            <Icon aria-hidden="true" className="stroke-current" />


            <div className="font-primary font-medium">
              <dt className="text-xs tracking-[-0.72px] opacity-50">{label}</dt>
              <dd className="text-base tracking-[-0.96px]">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}

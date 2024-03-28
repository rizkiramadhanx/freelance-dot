import { ChevronRightIcon } from "../../../public/svg";
import { twMerge as tw } from "tailwind-merge";

const dataBreadcrumbs = ["Home", "Layananan Desain", "Omah Apik"];

const Breadcrumbs = () => {
  return (
    <div className="flex gap-2">
      {dataBreadcrumbs.map((data, key) => (
        <div key={key} className="flex gap-2">
          <div className={tw(key + 1 !== dataBreadcrumbs.length ? 'text-red-brand' : 'text-[#999999]', 'text-[14px] font-semibold')}>{data}</div>
          <div className={tw(key + 1 === dataBreadcrumbs.length && "hidden")}>
            <ChevronRightIcon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;

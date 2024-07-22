import React from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

const Card = ({
  variant = "default",
  className,
  label,
  value,
  right,
  children,
}) => {
  return variant === "default" ? (
    <div className={`card ${className}`}>
      <div className="flex items-center">
        <div className={"flex flex-col gap-2 content-between overflow-hidden"}>
          <div className={"font-bold text-lg"}>{label}</div>
          <div className={"text-sm"}>{value}</div>
        </div>
      </div>
      {children && <div className="grow">{children}</div>}
    </div>
  ) : (
    <div className={`card-full ${className}`}>
      <div className={"flex flex-col gap-1 content-between overflow-hidden"}>
        <div className={"font-bold text-md"}>{label}</div>
        <div className={"text-xs"}>{value}</div>
      </div>
      {right && <div className={"shrink-0 text-sm"}>{right}</div>}
    </div>
  );
};

const Icon = ({ name, className }) => {
  const mapping = {
    plus: <PlusIcon />,
    user: <UserIcon />,
    x: <XMarkIcon />,
  };
  return React.cloneElement(mapping[name], {
    className: `size-5 hover:cursor-pointer ${className}`,
  });
};

export { Card, Icon };

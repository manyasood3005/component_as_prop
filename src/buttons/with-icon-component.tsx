import React, { ComponentType, ReactNode } from "react";
import { IconProps } from "./types";

type ButtonProps = {
  children: ReactNode;
  Icon: ComponentType<IconProps>;
};

export const ButtonWithIconComponent = ({ children, Icon }: ButtonProps) => {
  return (
    <button className="button">
      <span className="button-icon">
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
};

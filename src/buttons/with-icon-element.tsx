import React, { ReactElement, ReactNode } from "react";
import { IconProps } from "./types";

type ButtonProps = {
  children: ReactNode;
  icon: ReactElement<IconProps>;
};

export const ButtonWithIconElement = ({ children, icon }: ButtonProps) => {
  return (
    <button className="button">
      <span className="button-icon">{icon}</span>
      <span>{children}</span>
    </button>
  );
};

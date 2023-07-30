import React, { ReactNode, ReactElement } from "react";
import { IconProps } from "./types";

type ButtonProps = {
  children: ReactNode;
  renderIcon: () => ReactElement<IconProps>;
};

export const ButtonWithIconRenderFunc = ({
  children,
  renderIcon
}: ButtonProps) => {
  const icon = renderIcon();
  return (
    <button className="button">
      <span className="button-icon">{icon}</span>
      <span>{children}</span>
    </button>
  );
};

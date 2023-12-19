import React, { ReactElement } from "react";

enum Size {
  ExSmall,
  Small,
  Medium,
  Large,
}

const sizeToString = (size: Size): string => {
  switch (size) {
    case Size.Small:
      return "sm";
      break;
    case Size.Medium:
      return "md";
      break;
    case Size.Large:
      return "lg";
      break;
    default:
      return "xs";
      break;
  }
};

const Loading: React.FC<{ size?: Size }> = ({ size = Size.ExSmall }) => {
  return (
    <span
      className={`loading loading-spinner loading-${sizeToString(size)}`}
    ></span>
  );
};

export { Loading, Size };

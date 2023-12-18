import React, { ReactElement } from "react";

enum Size {
  ExSmall,
  Small,
  Medium,
  Large,
}

const Loading: React.FC<{ size?: Size }> = ({
  size = Size.ExSmall,
}): ReactElement => {
  let classModifier = "xs";
  switch (size) {
    case Size.Small:
      classModifier = "sm";
      break;
    case Size.Medium:
      classModifier = "md";
      break;
    case Size.Large:
      classModifier = "lg";
      break;
    default:
      break;
  }

  return (
    <span className={`loading loading-spinner loading-${classModifier}`}></span>
  );
};

export { Loading, Size };

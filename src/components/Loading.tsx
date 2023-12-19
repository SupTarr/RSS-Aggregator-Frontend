enum Size {
  ExSmall,
  Small,
  Medium,
  Large,
}

type PropsType = {
  size?: Size;
};

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

const Loading = ({ size = Size.ExSmall }: PropsType) => {
  return (
    <span
      className={`loading loading-spinner loading-${sizeToString(size)}`}
    ></span>
  );
};

export { Loading, Size };

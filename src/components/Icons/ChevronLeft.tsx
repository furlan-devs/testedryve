import { IconProps } from "../Icon/types";

export const ChevronLeftIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-8 -8 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path d="M7.41 1.41L6 0 0 6 6 12 7.41 10.59 2.83 6z" fill={color} />
    </svg>
  );
};

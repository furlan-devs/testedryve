import { IconProps } from "../Icon/types";

export const RightArrowIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-7 -10 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path d="M0 0L5 5 10 0z" fill={color} />
    </svg>
  );
};

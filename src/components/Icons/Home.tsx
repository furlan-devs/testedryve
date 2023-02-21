import { IconProps } from "../Icon/types";

export const HomeIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -3 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        id="prefix__a"
        d="M8 17L8 11 12 11 12 17 17 17 17 9 20 9 10 0 0 9 3 9 3 17z"
        fill={color}
      />
    </svg>
  );
};

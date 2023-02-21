import { IconProps } from "../Icon/types";

export const FilterIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-3 -6 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path d="M7 12h4v-2H7v2zM0 0v2h18V0H0zm3 7h12V5H3v2z" fill={color} />
    </svg>
  );
};

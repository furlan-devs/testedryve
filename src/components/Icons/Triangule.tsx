import { IconProps } from "../Icon/types";

export const TrianguleIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M7 0v6h.73l-3.94 7H0v6h6v-2h8v2h6v-6h-3.79l-3.94-7H13V0M9 2h2v2H9m1 2.04l4 7.11V15H6v-1.85M2 15h2v2H2m14-2h2v2h-2"
        fill={color}
      />
    </svg>
  );
};

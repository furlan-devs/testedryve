import { IconProps } from "../Icon/types";

export const BellIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M8 19.5c1.1 0 2-.9 2-2H6c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V1.5C9.5.67 8.83 0 8 0S6.5.67 6.5 1.5v.68C3.63 2.86 2 5.42 2 8.5v5l-2 2v1h16v-1l-2-2z"
        fill={color}
      />
    </svg>
  );
};

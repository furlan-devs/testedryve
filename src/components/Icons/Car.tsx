import { IconProps } from "../Icon/types";

export const CarIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M15.92 1.01C15.72.42 15.16 0 14.5 0h-11c-.66 0-1.21.42-1.42 1.01L0 7v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V7l-2.08-5.99zM3.5 11C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8 5 8.67 5 9.5 4.33 11 3.5 11zm11 0c-.83 0-1.5-.67-1.5-1.5S13.67 8 14.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM2 6l1.5-4.5h11L16 6H2z"
        fill={color}
      />
    </svg>
  );
};

import { IconProps } from "../Icon/types";

export const AddIcon: React.FC<IconProps> = ({
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
        d="M9.66668 5.66668H5.66668V9.66668H4.33334V5.66668H0.333344V4.33334H4.33334V0.333344H5.66668V4.33334H9.66668V5.66668Z"
        fill={color}
      />
    </svg>
  );
};

import { IconProps } from "../Icon/types";

export const ComputerIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -2 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M30.667 12.68L24 12.667c-.733 0-1.333.6-1.333 1.333v12c0 .733.6 1.333 1.333 1.333h6.667c.733 0 1.333-.6 1.333-1.333V14c0-.733-.6-1.32-1.333-1.32zm0 11.987H24v-9.334h6.667v9.334zm-4-24h-24C1.187.667 0 1.853 0 3.333v16C0 20.8 1.187 22 2.667 22H12v2.667H9.333v2.666H20v-2.666h-2.667V22H20v-2.667H2.667v-16h24V10h2.666V3.333c0-1.48-1.2-2.666-2.666-2.666zM15.96 10l-1.293-4-1.294 4h-4.04l3.294 2.347-1.254 3.88 3.294-2.4 3.293 2.4-1.253-3.88L20 10h-4.04z"
        fill={color}
      />
    </svg>
  );
};

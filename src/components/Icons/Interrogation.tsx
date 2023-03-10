import { IconProps } from "../Icon/types";

export const InterrogationIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 10,
  ...svgProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -5 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M7 .333C3.32.333.333 3.32.333 7c0 3.68 2.987 6.667 6.667 6.667 3.68 0 6.667-2.987 6.667-6.667C13.667 3.32 10.68.333 7 .333zm.667 11.334H6.333v-1.334h1.334v1.334zM9.047 6.5l-.6.613C7.967 7.6 7.667 8 7.667 9H6.333v-.333c0-.734.3-1.4.78-1.887l.827-.84c.247-.24.393-.573.393-.94 0-.733-.6-1.333-1.333-1.333S5.667 4.267 5.667 5H4.333c0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 .587-.24 1.12-.62 1.5z"
        fill={color}
      />
    </svg>
  );
};

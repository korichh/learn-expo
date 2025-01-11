import { Svg } from "react-native-svg";
import { icons } from "@/constants/icons";

interface IconProps {
  name: string;
  size?: number;
  fill?: string;
}

export default function Icon({ name, size = 32, fill = "#000" }: IconProps) {
  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill={fill}
    >
      {icons[name]}
    </Svg>
  )
}

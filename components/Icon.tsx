import { Svg, G, Use } from "react-native-svg";
import { icons } from "@/constants/icons";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
}

export default function Icon({ name, width = 32, height = 32, fill = "#000" }: IconProps) {
  return (
    <Svg
      viewBox="0 0 32 32"
      width={width}
      height={height}
      fill={fill}
    >
      {icons[name]}
    </Svg>
  )
}
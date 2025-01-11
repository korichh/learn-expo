import { ImageSourcePropType } from "react-native";

type TImages = Record<string, ImageSourcePropType>;

export const images: TImages = {
  "logo": require("@/assets/images/logo.png"),
  "avatar": require("@/assets/images/avatar.png"),
}

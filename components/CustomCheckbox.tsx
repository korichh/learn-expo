import { Checkbox } from "expo-checkbox";
import { StyleProp, View, ViewStyle } from "react-native";

interface CustomCheckboxProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  defaultColor: string;
  checkedColor: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function CustomCheckbox({ isChecked, setIsChecked, defaultColor, checkedColor, size = 24, style = {}, containerStyle = {} }: CustomCheckboxProps) {
  return (
    <View style={[containerStyle, { overflow: "hidden", backgroundColor: defaultColor, width: size, height: size }]}>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? checkedColor : undefined}
        style={[style, { width: size, height: size }]}
      />
    </View>
  )
}

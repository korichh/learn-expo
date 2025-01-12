import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title?: string;
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function Header({ title, leftItem, rightItem, style }: HeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.item, { left: 0 }]}>{leftItem}</View>
      <Text style={styles.text}>{title}</Text>
      <View style={[styles.item, { right: 0 }]}>{rightItem}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 16,
    position: "relative",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 24
  },
  item: {
    position: "absolute",
    top: "50%",
    transform: [
      { translateY: "-50%" }
    ]
  }
});

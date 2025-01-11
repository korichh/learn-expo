import { Stack } from "expo-router/stack";
import { StyleSheet } from "react-native";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      animation: "slide_from_right",
      statusBarStyle: "light",
      statusBarBackgroundColor: "#19191B",
      contentStyle: layoutStyles.stackContent,
    }}>
      <Stack.Screen name="(phone)/index" />
      <Stack.Screen name="phone-code/index" />
      <Stack.Screen name="create-profile/index" />
    </Stack>
  );
}

export const layoutStyles = StyleSheet.create({
  stackContent: {
    backgroundColor: "#19191B",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    marginBottom: "auto",
  },
  logo: {
    width: 72,
    height: 72,
    marginHorizontal: "auto"
  },
  content: {
    marginBottom: "auto",
    minHeight: 380
  },
  title: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center"
  },
  subtitleContainer: {
    minHeight: 80
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center"
  },
  input: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    padding: 12,
    backgroundColor: "#2A2A32",
    borderRadius: 4,
    height: 44,
  },
  button: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    textAlign: "center",
    verticalAlign: "middle",
    paddingHorizontal: 12,
    borderRadius: 4,
    height: 44,
  },
  buttonActive: {
    backgroundColor: "#D2AD56",
  },
  buttonDisabled: {
    backgroundColor: "#404040",
    color: "#9F9F9F"
  },
});

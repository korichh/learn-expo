import { Stack } from "expo-router/stack";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <Stack.Screen name="(phone)/index" />
      <Stack.Screen name="code/index" />
      <Stack.Screen name="profile/index" />
    </Stack>
  );
}

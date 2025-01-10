import { Stack } from "expo-router/stack";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "simple_push" }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main)" />
    </Stack>
  );
}

import React from "react";
import { Stack } from "expo-router/stack";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      animation: "simple_push",
      statusBarStyle: "light",
      statusBarBackgroundColor: "#19191B",
      contentStyle: layoutStyles.stackContent
    }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main)" />
    </Stack>
  );
}

export const layoutStyles = StyleSheet.create({
  stackContent: {
    backgroundColor: "#19191B",
  }
})

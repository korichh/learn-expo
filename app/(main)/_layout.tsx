import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Icon from "@/components/Icon";

export default function MainLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      animation: "shift",
      sceneStyle: layoutStyles.tabsScene,
    }}>
      <Tabs.Screen
        name="bars/index"
        options={{
          title: "Bars",
          tabBarIcon: ({ color }) => <Icon name="bars" size={26} fill={color} />,
        }}
      />
      <Tabs.Screen
        name="ratings/index"
        options={{
          title: "Ratings",
          tabBarIcon: ({ color }) => <Icon name="ratings" size={26} fill={color} />,
        }}
      />
      <Tabs.Screen
        name="community/index"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => <Icon name="community" size={26} fill={color} />,
        }}
      />
      <Tabs.Screen
        name="rewards/index"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => <Icon name="rewards" size={26} fill={color} />,
        }}
      />
    </Tabs>
  );
}

export const layoutStyles = StyleSheet.create({
  tabsScene: {
    backgroundColor: "#19191B",
  }
})

import { Tabs } from "expo-router";
import Icon from "@/components/Icon";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, animation: "fade" }}>
      <Tabs.Screen
        name="bars/index"
        options={{
          title: "Bars",
          tabBarIcon: ({ color }) => <Icon name="bars" />,
        }}
      />
      <Tabs.Screen
        name="ratings/index"
        options={{
          title: "Ratings",
          tabBarIcon: ({ color }) => <Icon name="ratings" />,
        }}
      />
      <Tabs.Screen
        name="community/index"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => <Icon name="community" />,
        }}
      />
      <Tabs.Screen
        name="rewards/index"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => <Icon name="rewards" />,
        }}
      />
    </Tabs>
  );
}
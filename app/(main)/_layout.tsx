import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Icon from "@/components/Icon";

export default function MainLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      animation: "shift",
      sceneStyle: layoutStyles.tabsScene,
      tabBarStyle: layoutStyles.tabsBar,
      tabBarLabelStyle: layoutStyles.tabsLabel,
      tabBarActiveTintColor: "#D2AD56",
      tabBarInactiveTintColor: "#474747",
    }}>
      <Tabs.Screen
        name="bars/index"
        options={{
          title: "Bars",
          tabBarIcon: ({ color }) => <Icon name="house" size={26} fill={color} />,
        }}
      />
      <Tabs.Screen
        name="ratings/index"
        options={{
          title: "Ratings",
          tabBarIcon: ({ color }) => <Icon name="star" size={26} fill={color} />,
        }}
      />
      <Tabs.Screen
        name="community/index"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => <Icon name="crowd" size={26} fill={color} />,
        }}
      />
      <Tabs.Screen
        name="rewards/index"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => <Icon name="discount" size={26} fill={color} />,
        }}
      />
    </Tabs>
  );
}

export const layoutStyles = StyleSheet.create({
  tabsScene: {
    backgroundColor: "#19191B",
  },
  tabsBar: {
    backgroundColor: "#19191B",
    borderTopWidth: 0,
    height: 50,
  },
  tabsLabel: {
    fontSize: 10,
    fontWeight: "700",
  },
  container: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 0
  },
  scrollView: {
    flex: 1,
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
})

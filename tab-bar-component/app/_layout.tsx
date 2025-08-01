import { HapticTab } from "@/components/HapticTab";
import SpecialTabButton from "@/components/SpecialTabButton";
import BlurTabBarBackground from "@/components/TabBarBackground";

import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarBadgeStyle: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
        },
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        animation: "fade",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarBadge: 2,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="custom"
        options={{
          title: "Custom",
          tabBarButton: SpecialTabButton,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log("Test");
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="hidden" options={{ href: null }} />
    </Tabs>
  );
}

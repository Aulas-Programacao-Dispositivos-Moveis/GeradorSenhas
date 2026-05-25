import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Toast from "react-native-toast-message";
import { colors } from "../const/Colors";

export default function RootLayout() {
  return (
    <>
      <Tabs screenOptions={{
        tabBarActiveTintColor: colors.blue,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.blue,
          height: 80,
          paddingBottom: 0,
          paddingTop: 20,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        }
      }}>
        <Tabs.Screen name="index" options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={colors.gray}
            />
          ),
        }} />
        <Tabs.Screen name="passwords" options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "lock-closed" : "lock-closed-outline"}
              size={size}
              color={colors.gray}
            />
          ),
        }} />
      </Tabs>
      <Toast />
    </>
  );
}

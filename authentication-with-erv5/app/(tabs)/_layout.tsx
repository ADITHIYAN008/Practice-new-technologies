import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  const isAdmin = true;
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Protected guard={isAdmin}>
        <Tabs.Screen name="admin" />
      </Tabs.Protected>
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default Layout;

import { useAuth } from "@/provider/AuthProvider";
import { Link } from "expo-router";

import { Button, Text, View } from "react-native";

export default function Index() {
  const { signIn } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Sign in" onPress={() => signIn()} />
      <Link href={"/register"} asChild>
        <Button title="Register" />
      </Link>
    </View>
  );
}

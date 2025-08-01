import { Link } from "expo-router";
import { Button, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Link href={"/profile"} push asChild>
        <Button title="Go to profile" />
      </Link>
      {[...Array(30)].map((_, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Image
            source={require("../assets/images/react-logo.png")}
            style={{
              width: 32,
              height: 32,
              marginRight: 16,
            }}
          />
          <Text style={{ fontSize: 18 }}>Dummy Item {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

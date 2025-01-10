import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Link href="/bars" asChild>
        <Button title="Next" />
      </Link>
    </View>
  );
}

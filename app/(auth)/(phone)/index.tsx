import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function PhoneScreen() {
  return (
    <View>
      <Text>Phone Screen</Text>
      <Link href="/code" asChild>
        <Button title="Next" />
      </Link>
    </View>
  );
}

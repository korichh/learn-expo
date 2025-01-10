import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function CodeScreen() {
  return (
    <View>
      <Text>Code Screen</Text>
      <Link href="/profile" asChild>
        <Button title="Next" />
      </Link>
    </View>
  );
}

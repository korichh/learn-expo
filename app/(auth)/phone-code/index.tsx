import { useEffect, useRef, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { StyleSheet, ScrollView, View, Text, Image, TextInput, Pressable } from "react-native";
import { images } from "@/constants/images";
import { layoutStyles } from "../_layout";

const timerInitial = 30;

export default function CodeScreen() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [timerValue, setTimerValue] = useState<number>(timerInitial);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (inputValue) setIsValid(true);
    else setIsValid(false);
  }, [inputValue]);

  useEffect(() => {
    if (!timerInterval.current) {
      timerInterval.current = setInterval(() => {
        setTimerValue(prevValue => {
          const newValue = prevValue - 1;

          if (timerInterval.current && newValue <= 0) {
            clearInterval(timerInterval.current);
            timerInterval.current = null;
          }

          return newValue;
        });
      }, 1000);
    }

    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
        timerInterval.current = null;
      }
    }
  }, [timerValue])

  return (
    <ScrollView contentContainerStyle={layoutStyles.scrollViewContent}>
      <View style={layoutStyles.container}>
        <Image source={images.logo} resizeMode="contain" style={[layoutStyles.header, layoutStyles.logo]} />
        <View style={layoutStyles.content}>
          <Text style={[layoutStyles.title, styles.title]}>Verification code</Text>
          <View style={layoutStyles.subtitleContainer}>
            <Text style={layoutStyles.subtitle}>Enter the 4 digit code</Text>
            <Text style={layoutStyles.subtitle}>sent to +XXX-XXX-XXXX</Text>
          </View>
          <TextInput
            style={[layoutStyles.input, styles.input]}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="X-X-X-X"
            placeholderTextColor="#949498"
            keyboardType="number-pad"
          />
          <Link
            href="/create-profile"
            style={[layoutStyles.button, styles.button, isValid ? layoutStyles.buttonActive : layoutStyles.buttonDisabled]}
            disabled={isValid ? false : true}
          >
            Next
          </Link>
          <View style={styles.sendContainer}>
            <Pressable
              onPress={() => setTimerValue(timerInitial)}
              disabled={timerValue <= 0 ? false : true}
            >
              <Text style={[timerValue <= 0 ? styles.sendButtonTextActive : styles.sendButtonTextDisabled]}>Send Again</Text>
            </Pressable>
            {timerValue > 0 && <Text style={styles.sendText}>({timerValue}s)</Text>}
          </View>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Change Phone Number</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 32,
  },
  input: {
    textAlign: "center",
    marginBottom: 32
  },
  button: {
    marginBottom: 24
  },
  sendContainer: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  sendButtonTextActive: {
    color: "#D2AD56",
  },
  sendButtonTextDisabled: {
    color: "#69562B",
  },
  sendText: {
    color: "#D2AD56",
    fontWeight: "700",
    marginLeft: 5
  },
  backButtonText: {
    textDecorationLine: "underline",
    color: "#D2AD56",
    textAlign: "center"
  }
});

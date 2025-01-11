import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { StyleSheet, ScrollView, View, Text, Image, Pressable, TextInput } from "react-native";
import { images } from "@/constants/images";
import { layoutStyles } from "../_layout";
import CustomCheckbox from "@/components/CustomCheckbox";

export default function PhoneScreen() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
  const [isAgeChecked, setIsAgeChecked] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue && isTermsChecked && isAgeChecked) setIsValid(true);
    else setIsValid(false);
  }, [inputValue, isTermsChecked, isAgeChecked]);

  return (
    <ScrollView contentContainerStyle={layoutStyles.scrollViewContent}>
      <View style={layoutStyles.container}>
        <Image source={images.logo} resizeMode="contain" style={[layoutStyles.header, layoutStyles.logo]} />
        <View style={layoutStyles.content}>
          <Text style={[layoutStyles.title, styles.title]}>Enter your phone number</Text>
          <View style={layoutStyles.subtitleContainer}>
            <Text style={layoutStyles.subtitle}>To get verification code</Text>
          </View>
          <TextInput
            style={[layoutStyles.input, styles.input]}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="000-000-0000"
            placeholderTextColor="#949498"
            keyboardType="number-pad"
          />
          <Link
            href="/phone-code"
            style={[layoutStyles.button, styles.button, isValid ? layoutStyles.buttonActive : layoutStyles.buttonDisabled]}
            disabled={isValid ? false : true}
          >
            Next
          </Link>
          <Pressable
            onPress={() => setIsTermsChecked(prev => !prev)}
            style={[styles.label, { marginBottom: 12 }]}
          >
            <CustomCheckbox
              isChecked={isTermsChecked}
              setIsChecked={setIsTermsChecked}
              checkedColor="#37B34A"
              defaultColor="#5F5F5F"
              size={22}
              containerStyle={styles.checkboxContainer}
              style={styles.checkbox}
            />
            <Text style={styles.labelText}>I agree with Fiesta’s <Link href="https://google.com" style={{ textDecorationLine: "underline" }}>Terms of Service</Link></Text>
          </Pressable>
          <Pressable
            onPress={() => setIsAgeChecked(prev => !prev)}
            style={styles.label}
          >
            <CustomCheckbox
              isChecked={isAgeChecked}
              setIsChecked={setIsAgeChecked}
              checkedColor="#37B34A"
              defaultColor="#5F5F5F"
              size={22}
              style={styles.checkbox}
              containerStyle={styles.checkboxContainer}
            />
            <Text style={styles.labelText}>I confirm that I am at least 18 years of age</Text>
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
    textAlign: "left",
    marginBottom: 32
  },
  button: {
    marginBottom: 32
  },
  label: {
    flexDirection: "row",
  },
  checkboxContainer: {
    borderRadius: 3,
    marginRight: 12
  },
  checkbox: {
    borderWidth: 3,
    borderColor: "transparent",
  },
  labelText: {
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 20,
    color: "#fff",
  }
});

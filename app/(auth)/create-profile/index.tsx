import { useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { StyleSheet, ScrollView, View, Text, Image, Pressable, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { layoutStyles } from "../_layout";
import Header from "@/components/auth/Header";
import Icon from "@/components/Icon";
import { images } from "@/constants/images";

export default function ProfileScreen() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [inputFirstName, setInputFirstName] = useState<string>("");
  const [inputLastName, setInputLastName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (inputFirstName && inputLastName) setIsValid(true);
    else setIsValid(false);
  }, [inputFirstName, inputLastName]);

  const pickAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "livePhotos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={layoutStyles.scrollViewContent}>
      <View style={layoutStyles.container}>
        <Header
          title="Create Profile"
          leftItem={
            <Pressable
              style={styles.arrowBack}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow" size={20} fill="#fff" />
            </Pressable>
          }
          style={layoutStyles.header}
        />
        <View style={layoutStyles.content}>
          <View style={styles.avatarContainer}>
            <Pressable
              onPress={pickAvatar}
              style={styles.avatar}
            >
              <View style={styles.avatarImageContainer}>
                <Image source={avatar ? { uri: avatar } : images.avatar} style={styles.avatarImage} resizeMode="contain" />
              </View>
              <Text style={styles.avatarText}>Add profile photo</Text>
            </Pressable>
          </View>
          <TextInput
            style={[layoutStyles.input, styles.input]}
            value={inputFirstName}
            onChangeText={setInputFirstName}
            placeholder="Enter Your First Name"
            placeholderTextColor="#949498"
          />
          <TextInput
            style={[layoutStyles.input, styles.input]}
            value={inputLastName}
            onChangeText={setInputLastName}
            placeholder="Enter Your Last Name"
            placeholderTextColor="#949498"
          />
          <Link
            href="/bars"
            style={[layoutStyles.button, isValid ? layoutStyles.buttonActive : layoutStyles.buttonDisabled]}
            disabled={isValid ? false : true}
          >
            Next
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  arrowBack: {
    padding: 4
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 40
  },
  avatar: {
    alignItems: "center"
  },
  avatarImageContainer: {
    padding: 5,
    borderWidth: 4,
    borderRadius: "100%",
    borderColor: "#D2AD56",
    marginBottom: 8,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  avatarText: {
    backgroundColor: "#2A2A32",
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 14,
    lineHeight: 20,
    borderRadius: 4,
    color: "#fff",
  },
  input: {
    marginBottom: 32
  },
});

import { useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, Image, TextInput } from "react-native";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { layoutStyles } from "../_layout";
import { images } from "@/constants/images";

const tabs = [{
  id: 0,
  title: "All",
  content: (
    <View></View>
  )
}, {
  id: 1,
  title: "Favorites",
  content: (
    <View></View>
  )
}];

export default function BarsScreen() {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [inputBars, setInputBars] = useState<string>("");

  return (
    <View style={layoutStyles.container}>
      <Header
        title="Bars"
        leftItem={
          <Icon name="send-diag" size={20} fill="#D2AD56" />
        }
        rightItem={
          <Image source={images.avatar1} style={styles.avatar} resizeMode="contain" />
        }
      />
      <ScrollView
        style={layoutStyles.scrollView}
      >
        <View style={styles.searchBars}>
          <TextInput
            style={[layoutStyles.input, styles.input]}
            value={inputBars}
            onChangeText={setInputBars}
            placeholder="Search Bars"
            placeholderTextColor="#949498"
          />
          <Pressable style={styles.searchBarsButton}>
            <Icon name="filter" size={18} fill="#fff" />
          </Pressable>
        </View>
        <View style={styles.tabHeader}>
          {tabs.map(tab => (
            <Pressable
              onPress={() => { }}
              key={tab.id}
            >
              <Text>{tab.title}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.tabContent}>
          {tabs.find(tab => tab.id === activeTab)?.content}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2
  },
  searchBars: {
    backgroundColor: "#2A2A32",
    borderRadius: 4,
    marginBottom: 16,
    position: "relative"
  },
  searchBarsButton: {
    position: "absolute",
    top: "50%",
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    transform: [
      { translateY: "-50%" }
    ]
  },
  input: {
    paddingHorizontal: 16,
    paddingRight: 48
  },
  tabHeader: {
  },
  tabContent: {
  },
});

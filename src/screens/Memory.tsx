import Ionicons from "@expo/vector-icons/Ionicons";
import { Favs, Highlights, NewMemory, Photos } from "../components/memory";
import {
  MediaTypeOptions,
  launchImageLibraryAsync,
  ImageInfo,
} from "expo-image-picker";
import {
  Platform,
  Pressable,
  StyleSheet,
  View,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Screen } from "../components/screen";
import { Text } from "../components/ui";
import { useColorSchemeValue } from "../hooks/useColorSchemeValue";
import { useState } from "react";
import { useToken } from "../hooks/useToken";

const renderScene = SceneMap({
  photos: Photos,
  favs: Favs,
});

const Memory = () => {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions();
  const [neutral50, neutral500, neutral900] = useToken("colors", [
    "neutral.50",
    "neutral.500",
    "neutral.900",
  ]);

  const [index, setIndex] = useState(0);
  const [tabs] = useState([
    {
      key: "photos",
      title: "Photos",
      icon: "images-outline",
    },
    { key: "favs", title: "Favs", icon: "heart-outline" },
  ]);
  const [visible, setVisible] = useState(false);
  const [assets, setAssets] = useState<ImageInfo[]>([]);

  const openMediaLibrary = async () => {
    if (Platform.OS === "web") {
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsMultipleSelection: true,
        exif: true,
      });

      if (!result.cancelled) {
        setAssets(result.selected);
        setVisible(true);
      }
    } else {
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.All,
        exif: true,
      });

      if (!result.cancelled) {
        setAssets([result]);
        setVisible(true);
      }
    }
  };

  return (
    <Screen style={{ paddingVertical: 8 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Guland</Text>

        <View style={{ borderRadius: 9999, overflow: "hidden" }}>
          <Pressable
            android_ripple={{ color: neutral500 }}
            onPress={openMediaLibrary}
            style={{ padding: 8 }}
          >
            <Ionicons
              name="add"
              size={24}
              color={useColorSchemeValue(neutral900, neutral50)}
            />
          </Pressable>
        </View>
      </View>

      <Highlights />

      <TabView
        navigationState={{ index, routes: tabs }}
        initialLayout={{ width }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderIcon={({ route }) => (
              <Ionicons
                name={route.icon as any}
                size={20}
                color={colorScheme === "dark" ? neutral50 : neutral900}
              />
            )}
            labelStyle={{ display: "none" }}
            indicatorStyle={{
              backgroundColor: useColorSchemeValue(neutral900, neutral500),
            }}
            style={{
              backgroundColor: useColorSchemeValue(neutral50, neutral900),
            }}
          />
        )}
      />

      {visible && (
        <NewMemory visible={visible} setVisible={setVisible} assets={assets} />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
});

export default Memory;

import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageInfo } from "expo-image-picker";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Text } from "../ui";
import { useColorSchemeValue } from "../../hooks/useColorSchemeValue";
import { useToken } from "../../hooks/useToken";

interface NewMemoryProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  assets: ImageInfo[];
}

const NewMemory = ({ visible, setVisible, assets }: NewMemoryProps) => {
  console.log(assets);
  const [neutral50, neutral500, neutral900] = useToken("colors", [
    "neutral.50",
    "neutral.500",
    "neutral.900",
  ]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onDismiss={() => setVisible(false)}
      onRequestClose={() => setVisible(false)}
    >
      <View
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: useColorSchemeValue(neutral50, neutral900),
        }}
      >
        <View style={styles.header}>
          <View
            style={{
              borderRadius: 9999,
              overflow: "hidden",
            }}
          >
            <Pressable
              android_ripple={{ color: neutral500 }}
              onPress={() => setVisible(false)}
              style={{ padding: 8 }}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={useColorSchemeValue(neutral900, neutral50)}
              />
            </Pressable>
          </View>

          <Text style={{ fontSize: 18, fontWeight: "bold" }}>New memory</Text>

          <View
            style={{
              borderRadius: 9999,
              overflow: "hidden",
            }}
          >
            <Pressable
              android_ripple={{ color: neutral500 }}
              onPress={() => {}}
              style={{ padding: 8 }}
            >
              <Ionicons
                name="checkmark"
                size={24}
                color={useColorSchemeValue(neutral900, neutral50)}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.main}>
          <View
            style={{
              position: "relative",
              width: 64,
              height: 64,
              marginRight: 8,
            }}
          >
            <Image source={{ uri: assets[0].uri }} style={styles.image} />

            {assets.length > 1 && (
              <Ionicons
                name="images"
                style={{ position: "absolute", top: 4, right: 4 }}
              />
            )}
          </View>

          <TextInput
            placeholder="Write caption"
            multiline
            placeholderTextColor={useColorSchemeValue(neutral900, neutral50)}
            style={{
              flex: 1,
              color: useColorSchemeValue(neutral900, neutral50),
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
  },
});

export default NewMemory;

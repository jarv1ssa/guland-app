import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Text } from "../ui";
import { useColorSchemeValue } from "../../hooks/useColorSchemeValue";
import { useToken } from "../../hooks/useToken";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

const Item = () => {
  const [neutral200, neutral700] = useToken("colors", [
    "neutral.200",
    "neutral.700",
  ]);

  return (
    <Pressable
      style={[
        styles.item,
        { backgroundColor: useColorSchemeValue(neutral200, neutral700) },
      ]}
    ></Pressable>
  );
};

const renderItem = ({ index }: { index: number }) => {
  console.log(index);
  return <Item />;
};

const Highlights = () => {
  const [neutral50, neutral500, neutral900] = useToken("colors", [
    "neutral.50",
    "neutral.500",
    "neutral.900",
  ]);

  return (
    <View style={{ marginHorizontal: 16, marginBottom: 24 }}>
      <Text style={{ fontWeight: "bold" }}>Memory highlights</Text>
      <Text>Keep our favorite memories here</Text>

      <Pressable
        style={[
          styles.item,
          {
            borderWidth: 1,
            borderColor: useColorSchemeValue(neutral900, neutral500),
            marginTop: 16,
          },
        ]}
      >
        <Ionicons
          name="add"
          size={28}
          color={useColorSchemeValue(neutral900, neutral50)}
        />
      </Pressable>

      {/* <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        style={styles.list}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
  item: {
    width: 64,
    height: 64,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderRadius: 9999,
  },
});

export default Highlights;

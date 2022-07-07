import { Navigation } from "./src/components/navigation";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import { PropsWithChildren } from "react";
import { useToken } from "./src/hooks/useToken";
import { useColorSchemeValue } from "./src/hooks/useColorSchemeValue";

const WebView = ({ children }: PropsWithChildren<{}>) => {
  const [light, border, dark] = useToken("colors", [
    "neutral.50",
    "neutral.700",
    "neutral.900",
  ]);

  return (
    <View
      style={{ flex: 1, backgroundColor: useColorSchemeValue(light, dark) }}
    >
      <View
        style={{
          maxWidth: 500,
          flex: 1,
          margin: "auto",
          borderWidth: 1,
          borderLeftColor: border,
          borderRightColor: border,
        }}
      >
        {children}
      </View>
    </View>
  );
};

const App = () =>
  Platform.OS === "web" ? (
    <WebView>
      <Navigation />
    </WebView>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Navigation />
    </SafeAreaView>
  );

export default App;

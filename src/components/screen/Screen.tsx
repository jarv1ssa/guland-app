import { PropsWithChildren } from "react";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { useColorSchemeValue } from "../../hooks/useColorSchemeValue";
import { useToken } from "../../hooks/useToken";

interface ScreenProps {
  style?: StyleProp<ViewStyle>;
}

const Screen = ({
  children,
  style,
  ...rest
}: PropsWithChildren<ScreenProps>) => {
  const [light, dark] = useToken("colors", ["neutral.50", "neutral.900"]);

  return (
    <ScrollView
      style={[
        { backgroundColor: useColorSchemeValue(light, dark) },
        style,
      ]}
      {...rest}
    >
      {children}
    </ScrollView>
  );
};

export default Screen;

import { PropsWithChildren } from "react";
import { StyleProp, Text as RNText, TextStyle } from "react-native";
import { useColorSchemeValue } from "../../hooks/useColorSchemeValue";
import { useToken } from "../../hooks/useToken";

interface TextProps {
  style?: StyleProp<TextStyle>;
}

const Text = ({ children, style }: PropsWithChildren<TextProps>) => {
  const [light, dark] = useToken("colors", ["neutral.50", "neutral.900"]);

  return (
    <RNText style={[{ color: useColorSchemeValue(dark, light) }, style]}>
      {children}
    </RNText>
  );
};

export default Text;

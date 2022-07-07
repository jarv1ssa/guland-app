import { useColorScheme } from "react-native";

export const useColorSchemeValue = (light: any, dark: any) => {
  const colorScheme = useColorScheme();

  return colorScheme === "dark" ? dark : light;
};

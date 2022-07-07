import theme, { Theme } from "../theme";

export const useToken = (key: keyof Theme, subkeys: string[]) => {
  if (key === "colors") {
    return subkeys.map((subkey) => {
      const [color, shade] = subkey.split(".");

      return theme[key][color][shade];
    });
  }

  return subkeys.map((subkey) => theme[key][subkey]);
};

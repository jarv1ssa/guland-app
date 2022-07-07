import "dotenv/config";

export default {
  name: "guland",
  slug: "guland",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: ["expo-image-picker"],
  extra: {
    IK_PUBLIC_KEY: process.env.IK_PUBLIC_KEY,
    IK_URL_ENDPOINT: process.env.IK_URL_ENDPOINT,
    IK_AUTH_ENDPOINT: process.env.IK_AUTH_ENDPOINT,
  },
};

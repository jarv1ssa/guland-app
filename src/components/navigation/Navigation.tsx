import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Memory } from "../../screens";
import { useToken } from "../../hooks/useToken";
import { useColorSchemeValue } from "../../hooks/useColorSchemeValue";
import { useWindowDimensions } from "react-native";

const routes = [
  {
    name: "Home",
    icon: "home-outline",
    focusedIcon: "home",
  },
  {
    name: "Memory",
    icon: "images-outline",
    focusedIcon: "images",
  },
];

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  const { width } = useWindowDimensions();
  const [light, dark, pink] = useToken("colors", [
    "neutral.50",
    "neutral.900",
    "pink.500",
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Memory"
        initialLayout={{ width }}
        tabBarPosition="bottom"
        screenOptions={({ route }) => {
          const _route = routes.find(({ name }) => route.name === name)!;

          return {
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: useColorSchemeValue(light, dark),
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarInactiveTintColor: useColorSchemeValue(dark, light),
            tabBarActiveTintColor: pink,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused ? (_route.focusedIcon as any) : (_route.icon as any)
                }
                size={24}
                color={color}
              />
            ),
            tabBarIndicatorStyle: {
              display: "none",
            },
            tabBarIndicatorContainerStyle: {
              display: "none",
            },
          };
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Memory" component={Memory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Avatar from "./components/Avatar";
import { Ionicons } from "@expo/vector-icons";
import TourPlanScreen from "./screens/TourPlanScreen";
import TripScreen from "./screens/TripScreen";
import TripDetailsScreen from "./screens/TripDetailsScreen";
import FovuriteTripScreen from "./screens/FovuriteTripScreen";
import IntrestedTripScreen from "./screens/IntrestedTripScreen";
import DayToDayPlanScreen from "./screens/DayToDayPlanScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import Logout from "./components/Logout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1c1c1d" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="IntrestedTrip" component={IntrestedTripScreen} />
      <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
      <Stack.Screen name="TripDayToDay" component={DayToDayPlanScreen} />
    </Stack.Navigator>
  );
}

function TripStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1c1c1d" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="TourPlan"
        component={TourPlanScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TripScreen"
        component={TripScreen}
        options={{
          title: "Filter Trip",
        }}
      />
      <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
      <Stack.Screen name="TripDayToDay" component={DayToDayPlanScreen} />
    </Stack.Navigator>
  );
}

function FavouriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1c1c1d" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="FavouriteScreen"
        component={FovuriteTripScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
      <Stack.Screen name="TripDayToDay" component={DayToDayPlanScreen} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#E5FE5A",
          position: "absolute",
          bottom: 40,
          marginHorizontal: 20,
          borderRadius: 50,
          height: 60,
          paddingBottom: 5,
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        headerRight: () => <Avatar />,
        headerStyle: { backgroundColor: "#1c1c1d" },
        title: "TripWise",
        headerTitleStyle: { color: "#FFFFFF", fontFamily: "PoppinBold" },
      }}
    >
      <Tab.Screen
        name="Home Screen"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color="#151517"
            />
          ),
          tabBarActiveTintColor: "#151517",
          tabBarIconStyle: { marginTop: 8 },
        }}
      />
      <Tab.Screen
        name="TourPlan"
        component={TripStack}
        options={{
          tabBarLabel: "Plan Tour",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "map" : "map-outline"}
              size={24}
              color="#151517"
            />
          ),
          tabBarIconStyle: { marginTop: 8 },
          tabBarActiveTintColor: "#151517",
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteStack}
        options={{
          tabBarLabel: "Favourite Tour",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color="#151517"
            />
          ),
          tabBarIconStyle: { marginTop: 8 },
          tabBarActiveTintColor: "#151517",
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Akronim: require("./assets/fonts/Akronim-Regular.ttf"),
    PoppinBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    poppinLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoopinItalic: require("./assets/fonts/Poppins-Italic.ttf"),
    PoopinBoldItalic: require("./assets/fonts/Poppins-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{
            headerStyle: { backgroundColor: "#1c1c1d" },
            headerTintColor: "white",
            title: "User Profile",
            headerRight: () => <Logout />,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

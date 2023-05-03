import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{
  /** Screens */
}
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
        <Stack.Navigator>
      <Stack.Screen
      name='HomeScreen'
      component={HomeScreen}
      />
        </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

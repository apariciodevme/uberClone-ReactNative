import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Provider } from "react-redux";
import { store } from "./store";


export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <View style={styles.container}>
          <Text>Lets go uber</Text>
        </View>
      </TailwindProvider>
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

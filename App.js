import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import colors from "./app/config/colors"
import HomeScreen from "./HomeScreen"
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen"
import coffees from "./app/config/coffees"

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <StatusBar style={"light"} />
      <HomeScreen/>
    </View>
  )
}
export default App


const styles = StyleSheet.create({})

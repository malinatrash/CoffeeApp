import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import colors from './app/config/colors'
import HomeScreen from "./HomeScreen";

const App = () => {
<<<<<<< HEAD
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <StatusBar style={"light"} />
      <HomeScreen/>
    </View>
  )
=======
    return (
        <View style={{flex: 1, backgroundColor: colors.dark}}>
            <StatusBar style={"light"}/>
            <HomeScreen/>
        </View>
    );
>>>>>>> parent of 143e185 (Реализовал страницу с детальной информацией о кофе)
}
export default App


const styles = StyleSheet.create({})

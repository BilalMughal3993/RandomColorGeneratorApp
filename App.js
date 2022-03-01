import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import ColorGenerator from './components/ColorGenerator';

export default function App() {
  return (
   
      <ImageBackground source={require("./assets/bg2.jpg")}
      style={styles.container}>
       <View >
     
     <StatusBar style="auto" />
     <ColorGenerator/>
    </View>
        </ImageBackground>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  
  },
});

import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const ColorGenerator = () => {
  return (

    <View >
        <TouchableOpacity
        // onPress={codeGenerator}
         style={styles.containerC}>
        <Text style={styles.text1}>Random color Generator</Text>
        </TouchableOpacity>

    </View>
  )
}
const styles =StyleSheet.create({
    containerC:{
        marginTop:50,
      
        backgroundColor:"grey"
    },
    text1:{
fontSize:30,
padding:10
    }

})
export default ColorGenerator
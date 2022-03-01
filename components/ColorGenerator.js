import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native'


const ColorGenerator = () => {
    const randomColor = ()=>{
        const red =Math.floor( Math.random()*256);
        const blue =Math.floor( Math.random()*256);
        const green =Math.floor( Math.random()*256);
        return`rbg(${red},${blue},${green})`
        
    }
  return (

    <View >
        <TouchableOpacity
        onPress={()=>{
            Alert.alert(randomColor())}
        }
         style={styles.containerC}>
        <Text style={styles.text1}>Random color Generator</Text>
        </TouchableOpacity>
        <View style={styles.containerC2}>
            <Text style={styles.text2}>
                
            </Text>
        </View>

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
    },
    containerC2:{
      
        marginTop:60,
        
        
    },
    text2:{
        padding:20,
        backgroundColor:'grey'
    }

})
export default ColorGenerator
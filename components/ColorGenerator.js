
import {View,Text,TouchableOpacity,StyleSheet,Alert,FlatList,ImageBackground } from 'react-native'
import { useState } from 'react'




const ColorGenerator = () => {
    const[color,setcolor]=useState([])
    const randomColor = (item)=>{
        const red =Math.floor( Math.random()*256);
        const blue =Math.floor( Math.random()*256);
        const green =Math.floor( Math.random()*256);
        return`rgb(${red},${green},${blue})`
        
    };
    
  return (

    <View >
        <TouchableOpacity
        onPress={()=>{
            
            setcolor([...color,randomColor()])
            }

        }
        
         style={styles.containerC}>
        <ImageBackground source={require("../assets/bg-color.jpg")} >
            <Text style={styles.text1}>Random color Generator</Text>
        </ImageBackground>
        </TouchableOpacity>
        <View>
        <FlatList 
        style={styles.flat}
        data={color}
        keyExtractor={(key)=>key} 
        renderItem={({item})=>{
            return (    
               
        <View style={{margin:10,padding:10,backgroundColor:item,
        borderRadius:20}}>
            <Text style={{
                // marginTop:20,
                fontSize:25,
                textAlign:"center",
                textTransform:"uppercase",
        padding:15,
        
         }}
         >{item}
        </Text>
        </View>
            );
        }}
        
        >
        
        </FlatList>
        </View>

    </View>
  )
}
const styles =StyleSheet.create({
   
    containerC:{
        
        marginTop:50,
        borderWidth:8,
        borderLeftColor:"yellow",
        borderBottomColor:"red",
        borderRightColor:"#00d0ff",
        borderTopColor:"#00ffa2"
    
    },
    text1:{
      
fontSize:23,
padding:10,
fontWeight:"bold",


    },
    flat:{
        
      borderWidth:4,
    //   borderRadius:20,
    borderLeftColor:"#ffff00",
    borderBottomColor:"red",
    borderRightColor:"#00d0ff",
    borderTopColor:"#00ffa2",
      elevation:5,
      marginTop:20,
      marginBottom:20,
      shadowRadius:30,
      shadowOpacity:30,
      
      shadowOffset:{width:0,height:0},
      shadowColor:"#ff00dd"
    },
    containerC2:{
      
        marginTop:60,
        
        
    },
    

})
export default ColorGenerator
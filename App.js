/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

   function App(){
    const[userNumber,setUserNumber]=useState(0)
    function pickedNumberHandler(pickNumber){
      setUserNumber(pickNumber)
    }
    let Screen =<StartGameScreen numberPicked={pickedNumberHandler}/>
    if(userNumber){
      Screen=<GameScreen/>
    }
    return(
    <LinearGradient colors={["#4e0329","#ddb52f"]} style={styles.rootScreen}>
     <ImageBackground source={require("./assets/background.png")} style={styles.rootScreen} resizeMode="cover" 
     imageStyle={styles.backgroundImage}>
    {Screen}
    </ImageBackground>
    </LinearGradient>
    )
   }

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  backgroundImage:{
    opacity:0.15
  },
rootScreen:{
  flex:1,
  backgroundColor:"#ddb52f"
}
})

export default App;

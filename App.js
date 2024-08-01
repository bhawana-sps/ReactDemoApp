/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors  from "./contants/Colors";
import GameOverScreen from './screens/GameOverScreen';
   function App(){
    const[userNumber,setUserNumber]=useState()
    const[gameOver,setgameOverr]=useState(true)
    function pickedNumberHandler(pickNumber){
      setUserNumber(pickNumber)
      setgameOverr(false)
    }
    function gameOverHandler(){
      setgameOverr(true)
    }
    let Screen =<StartGameScreen numberPicked={pickedNumberHandler}/>
    if(userNumber){
      Screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }
    if(gameOver && userNumber){
      Screen=<GameOverScreen/>
    }
     return (
       <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={[styles.rootScreen]} >
         <ImageBackground source={require("./assets/background.png")} style={{ flex: 1 }} resizeMode="over" borderRadius={2}
           imageStyle={styles.backgroundImage}
         >

           <SafeAreaView style={{flex:1}}>
           {Screen}
           </SafeAreaView>

         </ImageBackground>
       </LinearGradient>
     )
   }

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  
  },
  backgroundImage:{
    opacity:0.15
  },
rootScreen:{
  flex:1,
  backgroundColor:Colors.accent500
}
})

export default App;

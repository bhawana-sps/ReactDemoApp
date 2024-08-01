import { Alert, StyleSheet, Text, View } from "react-native"
import Title from "../components/ui/Title"
import NumberContainer from "../components/game/NumberContainer"
import { useEffect, useState } from "react"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionDesign from "../components/ui/Instruction.Design"
import ButtonContainer from "../components/ui/ButtonContainer"
import Icon from 'react-native-ionicons'

function generateRandomBetween(min,max,exclude){
const rndNum=Math.floor(Math.random() * (max-min))+min
if(rndNum===exclude){
    try{
        return generateRandomBetween(min,max,exclude)
    }
    catch{
        userNumber
    }
    
}
else{
    return rndNum
}
}
let minBoundary=1
let maxBoundary=100
function GameScreen(props){
    const initialGuess=generateRandomBetween(1,100,props.userNumber )
   const[currentGuess,setCurrentGuess]=useState(initialGuess)
   useEffect(()=>{
     if(currentGuess===props.userNumber){
        props.onGameOver()
     }
   },[currentGuess,props.userNumber,props.onGameOver])
   function nextGuessHandler(direction){
    if((direction=="lower" && currentGuess<props.userNumber) || (direction=="greater" && currentGuess>props.userNumber)){
        Alert.alert("Don't lie","You are wrong",[{text:"sorry",style:"cancel"}])
        return
    }
    if(direction=="lower"){
        maxBoundary=currentGuess
    }else{
        maxBoundary=currentGuess
        minBoundary=+1
    }
    const newRndNaumber= generateRandomBetween(minBoundary,maxBoundary,currentGuess )
    setCurrentGuess(newRndNaumber)

   }
    return(
        <View style={styles.screen}>
           <Title text={"Oponent's Guess"}></Title>
           <NumberContainer text={currentGuess}></NumberContainer>
            <Card>
            <InstructionDesign style={styles.instructionDesign}>High or Low ?</InstructionDesign>
            <View style={styles.buttonsContainer}>
            <ButtonContainer>
            <PrimaryButton text={"-"} pressHandler={nextGuessHandler.bind(this,"lower")}> </PrimaryButton>
            </ButtonContainer>
            <ButtonContainer>
            <PrimaryButton text={"+"} pressHandler={nextGuessHandler.bind(this,"greater")}> </PrimaryButton>
            </ButtonContainer>
            </View>
           
        </Card>
        </View>
  
    )
}
const styles=StyleSheet.create({
    instructionDesign:{
        marginBottom:12
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    screen:{
        flex:1,
        padding:24
    },
    
})
export default GameScreen
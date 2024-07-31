import { Alert, TextInput, View } from "react-native";
import { StyleSheet } from 'react-native';
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen(props){
    const[enteredNumber,setEnteredNumber] = useState("")
    function numberInputHandler(enteredNumber){
        setEnteredNumber(enteredNumber)
    }
    function resetInputHandler(){
        setEnteredNumber("")
    }
    function confirmInputHandler(){
        const number=parseInt(enteredNumber)
        if(isNaN(number) || number<=0 || number>99){
            Alert.alert("Invalid Number","Number has to be between 1 and 99",
                [{text:"Okay!!" ,style:"destructive",onPress: resetInputHandler }]
            )
            return
        }
        props.numberPicked(number)
    }
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={numberInputHandler}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
            <PrimaryButton text={"Reset"} pressHandler={resetInputHandler} />
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton text={"Confirm"} pressHandler={confirmInputHandler}/>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
inputContainer:{
    // flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:100,
    marginHorizontal:24,
    borderRadius:8,
    padding:16,
    backgroundColor:"#3b021f",
    //only for android
    elevation:4,
    //I can use in IOS only
    shadowColor:"black",
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25
},
numberInput:{
fontSize:32,
height:50,
width:50,
paddingTop:4,
textAlign:"center",
borderBottomColor:"#ddb52f",
borderBottomWidth:2,
color:"#ddb52f",
marginVertical:8,
fontWeight:"bold"
},
buttonsContainer:{
    flexDirection:"row"
},
buttonContainer:{
    flex:1
}
})
export default StartGameScreen
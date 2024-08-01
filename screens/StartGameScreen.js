import { Alert, TextInput, View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../contants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionDesign from "../components/ui/Instruction.Design";
import ButtonContainer from "../components/ui/ButtonContainer";
function StartGameScreen(props) {
    const [enteredNumber, setEnteredNumber] = useState("")
    function numberInputHandler(enteredNumber) {
        setEnteredNumber(enteredNumber)
    }
    function resetInputHandler() {
        setEnteredNumber("")
    }
    function confirmInputHandler() {
        const number = parseInt(enteredNumber)
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert("Invalid Number", "Number has to be between 1 and 99",
                [{ text: "Okay!!", style: "destructive", onPress: resetInputHandler }]
            )
            return
        }
        props.numberPicked(number)
    }
    return (
        <View style={styles.rootContainer}>
            <Title text={"Guess My Number"}> </Title>
            <Card>
                <InstructionDesign> Enter Number</InstructionDesign>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"
                    value={enteredNumber}
                    onChangeText={numberInputHandler} />
                <View style={styles.buttonsContainer}>
                    <ButtonContainer>
                        <PrimaryButton text={"Reset"} pressHandler={resetInputHandler} />
                    </ButtonContainer>
                    <ButtonContainer>
                        <PrimaryButton text={"Confirm"} pressHandler={confirmInputHandler} />
                    </ButtonContainer>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    numberInput: {
        fontSize: 32,
        height: 50,
        width: 50,
        paddingTop: 4,
        textAlign: "center",
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold"
    }
})
export default StartGameScreen
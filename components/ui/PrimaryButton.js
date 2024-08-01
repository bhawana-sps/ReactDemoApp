import { Pressable, Text, View } from "react-native"
import { StyleSheet } from 'react-native';
import Colors  from "../../contants/Colors";

function PrimaryButton(props){
   
return(
    <View style={styles.buttonOuterContainer}>
    <Pressable style={({pressed})=> pressed ?[styles.buttonInnerContainer,styles.pressed]: styles.buttonInnerContainer}
     onPress={props.pressHandler} android_ripple={{color:Colors.primary600}}>
  
        <Text style={styles.buttonText}>{props.text}</Text>
        </Pressable>
    </View>
   
)
}
const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden"
    },
    buttonInnerContainer:{
        backgroundColor:Colors.primary500,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    },
    //done for ios ripple effect
    pressed:{
        opacity:0.75
    }
})
export default PrimaryButton
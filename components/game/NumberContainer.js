import { StyleSheet, View,Text } from "react-native"
import Colors  from "../../contants/Colors";

function NumberContainer(props){
return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{props.text}</Text>
    </View>
)
}
const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        padding:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        margin:24

    },
    numberText:{
        color:Colors.accent500,
        fontWeight:"bold",
        fontSize:36
    }
})
export default NumberContainer
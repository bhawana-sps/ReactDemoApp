import { StyleSheet, Text, View } from "react-native"
import Colors  from "../../contants/Colors";
function Title(props){
return(
    <Text style={styles.title}>{props.text}</Text>
)
}
const styles=StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:"black",
        color:"white",
        textAlign:"center",
        borderWidth:2,
        borderColor:"white",
        padding:12,
        fontFamily:"OpenSans-Bold"
    }
})
export default Title
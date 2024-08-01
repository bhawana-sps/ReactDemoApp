import { Text,StyleSheet } from "react-native"
import Colors  from "../../contants/Colors";
function InstructionDesign({children, style}){
return(
    <Text style={[styles.insttructionText,style]}>{children}</Text>
)
}
const styles=StyleSheet.create({
    insttructionText:{
        color:Colors.accent500,
        fontSize:24
    },
    
})
export default InstructionDesign
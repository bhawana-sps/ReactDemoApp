import { View,StyleSheet } from "react-native"
import Colors  from "../../contants/Colors";
function Card({children}){
return(
    <View style={styles.inputContainer}>
     {children}
    </View>
)
}
const styles=StyleSheet.create({
    inputContainer:{
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:38,
        marginHorizontal:24,
        borderRadius:8,
        padding:16,
        backgroundColor:Colors.primary800,
        //only for android
        elevation:4,
        //I can use in IOS only
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25
    }
})
export default Card
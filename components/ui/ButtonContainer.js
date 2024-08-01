import { View, StyleSheet } from "react-native";

function ButtonContainer({ children }) {
    return (

        <View style={styles.buttonContainer}>
            {children}
        </View>

    )
}
const styles = StyleSheet.create({

    buttonContainer: {
        flex: 1
    }
})
export default ButtonContainer
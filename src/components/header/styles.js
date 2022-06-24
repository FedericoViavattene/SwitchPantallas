import Colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: 120,
        marginTop: 60,
        paddingTop: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: Colors.textColorPrimary,
        fontSize: 22,
        fontFamily: "openSansBold",
    },
    
});

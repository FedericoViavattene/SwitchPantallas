import Colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: 90,
        paddingTop: 60,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: Colors.textColorPrimary,
        fontSize: 22,
        fontWeight:"bold"
    },
    
});

import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({

    containerTouchable :{
        flex: 1,
        alignItems: "center",
        marginVertical: 10
    },
    container: {
        flex: 1,
        alignItems: "center",

    },
    containerScroll: {
        flex: 1,

    },
    title:{
        fontSize: 20,
        marginVertical: 10

    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: "center",
        minWidth: 300,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:  'space-between',
        paddingHorizontal: 25,
        marginTop: height > 600 ? 20 : 10,
        
    },
    button: {
        width: width / 7,
        alignItems: "center"
    },
    summaryContainer: {
        marginVertical: height > 600 ? 30 : 20,
        alignItems: "center",
        width: width / 3,
        paddingVertical: height > 600 ? 30  : 20,
        
    },
    subtitle:{
        fontSize: 16,
    }

})
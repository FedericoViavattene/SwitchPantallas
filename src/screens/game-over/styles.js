import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    resultContainer: {
        marginBottom: 30,
        padding: 20,
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    Image : {
        width: "80%",
        height: height * 0.3,
    }
})
import {
     Button,
     Keyboard,
     KeyboardAvoidingView,
     Platform,
     ScrollView,
     Text,
     TouchableWithoutFeedback,
     View,
} from "react-native";
import { Card, Input, NumberContainer } from "../../components/index";
import React, {useState} from "react";

import Colors from "../../constants/colors";
import { styles } from "./styles";

const StartGame = ({onStartGame}) =>{

    const [enteredValue, setEnteredValue ] = useState("");
    const [confirmed, setConfirmed ] = useState("");
    const [selectedNumber, setSelectedNumber ] = useState(false);
    const isIOS = Platform.OS ===  "ios";

    const handlerInputNumber = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""))
    }

    const handlerClearInput = () =>{
        setEnteredValue("");
    }

    const handlerConfirmInput = () => {

        const chooseNumber = parseInt (enteredValue)
        if ( isNaN ( chooseNumber )  || chooseNumber <= 0 || chooseNumber >99) return;

        setConfirmed (true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue("")
    };

    let confirmedOutput;
    if(confirmed){
        confirmedOutput= (
        <Card style={styles.summaryContainer}>
            <Text style={styles.subtitle}> Tu seleccion</Text>
            <NumberContainer> {selectedNumber} </NumberContainer>
            <Button
                title="Empezar Juego"
                onPress={() => props.onStartGame (selectedNumber)}
                color={Colors.secondary}/>
        </Card>
     );
    };
    

return (
    <KeyboardAvoidingView
        style ={styles.container}
        behavior = {isIOS ? "position" : "height"}
        keyboardVerticalOffset = {30}>
       

    <TouchableWithoutFeedback
      style ={styles.containerTouchable}
      onPress ={() => {
        Keyboard.dismiss();

     }}
     >
    <ScrollView style = {styles.containerScroll}>
        <Text style= {styles.title}>Empezar Juego</Text>
        <Card style = {styles.inputContainer}>
            <Text> Seleccione un numero</Text>
            <Input 
                placeholder="Ingresa un numero" 
                keyboardType="numeric"
                autoCapitalize ="none"
                autoCorrect = {false}
                maxLength = {2}
                blurOnSubmit = {true}
                onChangeText = {handlerInputNumber}
                value = {enteredValue}
                />
                <View style = {styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button 
                        title ="Limpiemos" 
                        onPress ={ () => handlerClearInput ()} 
                        color={Colors.primary}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button 
                        title ="Confirmar" 
                        onPress ={ () => handlerConfirmInput} 
                        color={Colors.secondary}
                        />
                    </View>
                </View>  
            </Card>
            {confirmedOutput}
        </ScrollView>
     </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    );
};

export default StartGame;
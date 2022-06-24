import {
     Button,
     Keyboard,
     Text,
     TouchableWithoutFeedback,
     View
} from "react-native";
import { Card, Input, NumberContainer } from "../../components/index";
import React, {useState} from "react";

import Colors from "../../constants/colors";
import { styles } from "./styles";

const StartGame = ({onStartGame}) =>{

    const [enteredValue, setEnteredValue ] = useState("");
    const [confirmed, setConfirmed ] = useState("");
    const [selectedNumber, setSelectedNumber ] = useState(false);

    const handlerInputNumber = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""))
    }

    const handlerClearInput = () =>{
        setEnteredValue("");
        setConfirmed(false);
    };

    const handlerConfirmInput = () => {

        const choseNumber = parseInt (enteredValue);
        if ( isNaN ( choseNumber )  || choseNumber <= 0 || choseNumber >99) return;

        setConfirmed (true)
        setSelectedNumber(choseNumber)
        setEnteredValue("")
    } 

    let confirmedOutput;
        if (confirmed){
            confirmedOutput = (
                <Card style={styles.summaryContainer}>
                    <Text style={styles.subtitle}>Tu seleccion</Text>
                    <NumberContainer> {selectedNumber} </NumberContainer>
                    <Button 
                        title="Empezar Juego" 
                        onPress={() => onStartGame(selectedNumber)}>
                        color = {Colors.secondary}
                    </Button>
                </Card>
            );
        }
    

return (
    <TouchableWithoutFeedback
     style ={styles.containerTouchable}
     onPress ={() => {
        Keyboard.dismiss();

     }}
     >
    <View style = {styles.container}>
        <Text style= {styles.title}>
                Comencemos
        </Text>
        <Card style = {styles.inputContainer}>
            <Text> Selecciona el numero</Text>
            <Input 
                placeholder="Ingresa un numero loco" 
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
                        <Button title ="Confirmar" 
                        onPress ={ () => handlerConfirmInput ()} 
                        color={Colors.secondary}
                        />
                    </View>
                </View>  
            </Card>
            {confirmedOutput}
        </View>
     </TouchableWithoutFeedback>

    );
};

export default StartGame;
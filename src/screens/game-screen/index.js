import { Alert, Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useEffect, useRef, useState } from "react";

import Colors from "../../constants/colors"
import { styles } from "./styles";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
};
const GameScreen = ({userOptions , onGameOver}) => {

    
    
    
    const [currentGuess, setCurrentGuess] = useState (
        generateRandomBetween (1, 100, userOptions));
    
        const [rounds, setRounds] = useState(0);
    
        const currentLow = useRef(1);
        const currentHigh = useRef(100);
        
const handlerNextGuess = direction => {
    if(
        (direction === 'lower' && currentGuess < userOptions) ||
        (direction === 'greater' && currentGuess > userOptions)
    ){
        Alert.alert("Deja de mentir!", "Vos sabes que no es verdad...", [
            {text : 'Perdoname', style: 'cancel'}
        ])
        return;
    }

    if (direction === 'lower')
        currentHigh.current = currentGuess
    else
        currentLow.current = currentGuess

    const nextNumber = generateRandomBetween(
        currentLow.current, 
        currentHigh.current, 
        currentGuess
        );
    setCurrentGuess(nextNumber)
    setRounds (current => current + 1)
};


    useEffect(() => {
        if(currentGuess == userOptions) onGameOver(rounds)

    }, [currentGuess, userOptions, onGameOver]);

    return(
        <View style = {styles.container}>
            <Text>
                La suposicion del oponente
            </Text>
            <NumberContainer> {currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
             <Button 
             title="Menor" 
             onPress={() => handlerNextGuess('lower')} 
             color = {Colors.primary}
             />
             <Button 
             title="Mayor" 
             onPress={() => handlerNextGuess('greater')} 
             color = {Colors.primary}
             />
            </View>        
        </View>
    )
}

export default GameScreen;

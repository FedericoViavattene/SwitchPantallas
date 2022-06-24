import { Button, Image, Text, View } from "react-native";

import { Card } from "../../components/index";
import Colors from "../../constants/colors";
import React from "react";
import { styles } from "./styles";

const GameOver = ({rounds, choise, onRestart}) =>{
    return (
        <View style = {styles.container}>

        <Image
        style = {styles.Image} 
        source={{ 
            uri: 'https://www.mentsalud.com/wp-content/uploads/2020/08/game-over-videojuegos-924x480.jpg'
            }}
        />
        <Card style = { styles.resultContainer}>
            <Text> Intentos  : {rounds} </Text>
            <Text> El numero era: {choise}</Text>
        </Card>
        <Button title ="Reiniciar" onPress={onRestart} color = {Colors.primary}/>
    </View>
    )
}

export default GameOver;

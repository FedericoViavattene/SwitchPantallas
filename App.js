import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import GameOver from './src/screens/game-over';
import GameScreen from './src/screens/game-screen';
import { Header } from "./src/components/index";
import StartGame from './src/screens/start-game';
import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  let [loaded] = useFonts({
    openSans: require ("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require ("./assets/fonts/OpenSans-Bold.ttf"),
    openSansLight: require ("./assets/fonts/OpenSans-Light.ttf"),
    openSansMedium: require ("./assets/fonts/OpenSans-Medium.ttf"),
        
  });

  if (!loaded){
    return <AppLoading/>;
  }

  const handlerGameOver =  rounds =>{
    setGuessRounds (rounds)
  }
  
  const handlerStartGame = (selectedNumber) =>{
    setUserNumber(selectedNumber);
  }
  
  const handlerRestart = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }
  

  let content = <StartGame onStartGame = { handlerStartGame}/>;

  if (userNumber && guessRounds <= 0 ) {
    content = (<GameScreen userOptions={userNumber} onGameOver= {handlerGameOver} />);
  } else if (guessRounds >  0 ){
    content = (<GameOver rounds={guessRounds} choise = {userNumber} onRestart = {handlerRestart}/>);
  }
  return (
    <View style={styles.container}>
      <Header title = "Juegardo de numeros"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});

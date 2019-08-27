import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/screen/StartGameScreen";
import GameScreen from "./components/screen/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.app}>
      <Header title="Zgadywanka" />
      {userNumber ? (
        <GameScreen shoosenNumber={userNumber} />
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    height: "100%"
  }
});

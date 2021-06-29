import { useState } from "react";
import HomeScreen from "./views/homeScreen.js";
import { translations } from "./utils/translations.js";
import "./App.css";

function App() {
  const [nick, setNick] = "";
  const [gameStarted, setGameStarted] = useState(false);
  const [answersChecked, setAnswersChecked] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleAnswersChecked = () => {
    setGameStarted(false);
    setAnswersChecked(true);
  };

  const handleFinishGame = () => {
    setAnswersChecked(false);
    setGameFinished(true);
  };

  const handleNick = (e) => {
    setNick(e.target.value);
  };

  let section = "";

  if (gameStarted) {
    section = "game started";
  } else {
    section = (
      <HomeScreen
        mainTitle={translations.mainTitle}
        nickPlaceholder={translations.nickPlaceholder}
        nick={nick}
        startButton={translations.startButton}
        handleNick={handleNick}
        handleStartGame={handleStartGame}
      />
    );
  }

  return <div className="App">{section}</div>;
}

export default App;

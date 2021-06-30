import { useState, useEffect } from "react";
import HomeScreen from "./views/HomeScreen.js";
import GameScreen from "./views/GameScreen.js";
import { translations } from "./utils/translations.js";
import { getWords } from "./api";
import "./App.css";

function App() {
  const [nick, setNick] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [answersChecked, setAnswersChecked] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [words, setWords] = useState(null);
  const [gameTitle, setGameTitle] = useState(null);
  console.log(words);

  useEffect(() => {
    const createGameHeadline = (nick, question) => {
      return `Hello ${nick}, please ${question}`;
    };
    const doGetWords = async () => {
      try {
        const result = await getWords();
        setWords(result.all_words);
        setGameTitle(createGameHeadline(nick, result.question));
      } catch (error) {
        console.log(error);
      }
    };
    if (gameStarted) {
      doGetWords();
    }
  }, [gameStarted]);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleCheckAnswers = () => {
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
    section = (
      <GameScreen
        gameTitle={gameTitle}
        words={words}
        loading={translations.loading}
        checkButton={translations.checkButton}
        handleCheckAnswers={handleCheckAnswers}
      />
    );
  } else if (answersChecked) {
    section = "answer check";
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

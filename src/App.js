import { useState, useEffect } from "react";
import HomeScreen from "./views/HomeScreen.js";
import GameScreen from "./views/GameScreen.js";
import { translations } from "./utils/translations.js";
import { getWords } from "./api";
import "./App.css";

function App() {
  const [nick, setNick] = useState(null);
  const [nickError, setNickError] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [answersChecked, setAnswersChecked] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [words, setWords] = useState(null);
  const [chosenWords, setChosenWords] = useState([]);
  const [gameTitle, setGameTitle] = useState(null);

  console.log(chosenWords);

  useEffect(() => {
    const doGetWords = async () => {
      try {
        const result = await getWords();
        setWords(result.all_words);
        setGameTitle(result.question);
      } catch (error) {
        console.log(error);
      }
    };
    if (gameStarted) {
      doGetWords();
    }
  }, [gameStarted]);

  const handleStartGame = (e) => {
    console.log(e);
    e.preventDefault();
    if (nick && nick.length > 2) {
      setGameStarted(true);
    } else {
      setNickError(true);
    }
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

  const handleWordClick = (e) => {
    const copyChosenWords = [...chosenWords];
    const chosenWord = e.target.innerText;
    // const chosenWordId = e.target.id;
    const wordAlreadyChosen = copyChosenWords.includes(chosenWord);
    if (wordAlreadyChosen) {
      copyChosenWords.splice(
        copyChosenWords.findIndex((word) => word === chosenWord),
        1
      );
    } else {
      copyChosenWords.push(chosenWord);
    }
    setChosenWords([...copyChosenWords]);
    // console.log(e.target);
  };

  let section = "";

  if (gameStarted) {
    section = (
      <GameScreen
        gameTitle={gameTitle}
        words={words}
        loading={translations.loading}
        checkButton={translations.checkButton}
        handleWordClick={handleWordClick}
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
        nickError={nickError}
        nickErrorMessage={translations.nickErrorMessage}
        startButton={translations.startButton}
        handleNick={handleNick}
        handleStartGame={handleStartGame}
      />
    );
  }

  return <div className="App">{section}</div>;
}

export default App;

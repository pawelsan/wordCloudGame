import { useState, useEffect } from "react";
import HomeScreen from "./views/HomeScreen.js";
import GameScreen from "./views/GameScreen.js";
import ResultScreen from "./views/ResultScreen.js";
import { translations } from "./utils/translations.js";
import { getWords } from "./api";

function App() {
  const [nick, setNick] = useState("");
  const [nickError, setNickError] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [answersChecked, setAnswersChecked] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [words, setWords] = useState(null);
  const [chosenWords, setChosenWords] = useState([]);
  const [correctWords, setCorrectWords] = useState([]);
  const [gameTitle, setGameTitle] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const doGetWords = async () => {
      try {
        const result = await getWords();
        setWords(result.all_words);
        setCorrectWords(result.good_words);
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
    e.preventDefault();
    if (nick && nick.length > 2) {
      setGameStarted(true);
    } else {
      setNickError(true);
    }
  };

  const handleCheckAnswers = () => {
    setAnswersChecked(true);
  };

  const handleFinishGame = () => {
    setGameStarted(false);
    setAnswersChecked(false);
    setGameFinished(true);
    const scoreCalculation = () => {
      let value = 0;
      chosenWords.forEach((word) => {
        if (correctWords.includes(word)) {
          value = value + 2;
        } else {
          value = value - 1;
        }
      });
      correctWords.forEach((word) => {
        if (!chosenWords.includes(word)) {
          value = value - 1;
        }
      });
      return value;
    };
    setScore(scoreCalculation());
  };

  const handleNick = (e) => {
    setNick(e.target.value);
  };

  const handleWordClick = (e) => {
    const copyChosenWords = [...chosenWords];
    const chosenWord = e.target.innerText;
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
  };

  let section = "";

  if (gameStarted) {
    section = (
      <GameScreen
        gameTitle={gameTitle}
        words={words}
        chosenWords={chosenWords}
        loading={translations.loading}
        gameFinished={gameFinished}
        checkButton={translations.checkButton}
        handleWordClick={handleWordClick}
        handleCheckAnswers={handleCheckAnswers}
        answersChecked={answersChecked}
        correctWords={correctWords}
        finishButton={translations.finishButton}
        handleFinishGame={handleFinishGame}
      />
    );
  } else if (gameFinished) {
    section = (
      <ResultScreen
        score={score}
        nick={nick}
        endText1={translations.endText1}
        endText2={translations.endText2}
        endText3={translations.endText3}
        endText4={translations.endText4}
      />
    );
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

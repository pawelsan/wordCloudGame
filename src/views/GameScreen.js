const GameScreen = ({
  gameTitle,
  words,
  chosenWords,
  loading,
  checkButton,
  handleCheckAnswers,
  handleWordClick,
  answersChecked,
  correctWords,
}) => {
  const wordList =
    words &&
    words.map((word, index) => {
      let className;
      if (!answersChecked && chosenWords.includes(word)) {
        className = "selected";
      }
      if (
        answersChecked &&
        chosenWords.includes(word) &&
        correctWords.includes(word)
      ) {
        className = "correct";
      }
      if (
        answersChecked &&
        chosenWords.includes(word) &&
        !correctWords.includes(word)
      ) {
        className = "incorrect";
      }

      return (
        <li
          key={index}
          id={index}
          className={className}
          onClick={!answersChecked ? (e) => handleWordClick(e) : null}
        >
          {word}
        </li>
      );
    });
  return (
    <>
      <div className="game--title">{gameTitle ? gameTitle : loading}</div>
      <div className="game--container">
        <ul>{wordList}</ul>
      </div>
      <button
        className="game--button"
        type="submit"
        onClick={handleCheckAnswers}
      >
        {checkButton}
      </button>
    </>
  );
};

export default GameScreen;

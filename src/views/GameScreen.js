const GameScreen = ({
  gameTitle,
  words,
  loading,
  checkButton,
  handleCheckAnswers,
}) => {
  const wordList =
    words && words.map((word, index) => <li key={index}>{word}</li>);
  return (
    <>
      <span>{gameTitle ? gameTitle : loading}</span>
      <div>
        <ul>{wordList}</ul>
      </div>
      <button type="submit" onClick={handleCheckAnswers}>
        {checkButton}
      </button>
    </>
  );
};

export default GameScreen;

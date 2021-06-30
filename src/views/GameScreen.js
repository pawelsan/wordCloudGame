const GameScreen = ({
  gameTitle,
  words,
  loading,
  checkButton,
  handleCheckAnswers,
  handleWordClick,
}) => {
  const wordList =
    words &&
    words.map((word, index) => (
      <li key={index} id={index} onClick={(e) => handleWordClick(e)}>
        {word}
      </li>
    ));
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

const HomeScreen = ({
  mainTitle,
  nickPlaceholder,
  handleNick,
  nick,
  nickError,
  nickErrorMessage,
  handleStartGame,
  startButton,
}) => {
  return (
    <>
      <h1>{mainTitle}</h1>
      <form>
        <input
          type="text"
          id="nick"
          placeholder={nickPlaceholder}
          onChange={(e) => handleNick(e)}
          value={nick}
        />
        <button onClick={(e) => handleStartGame(e)}>{startButton}</button>
        {nickError && <span>{nickErrorMessage}</span>}
      </form>
    </>
  );
};

export default HomeScreen;

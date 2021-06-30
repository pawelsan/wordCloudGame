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
      <h1 className="game--main-title">{mainTitle}</h1>
      <form>
        <input
          type="text"
          id="nick"
          placeholder={nickPlaceholder}
          onChange={(e) => handleNick(e)}
          value={nick}
        />
        <button onClick={(e) => handleStartGame(e)}>{startButton}</button>
        {nickError && <div className="error--message">{nickErrorMessage}</div>}
      </form>
    </>
  );
};

export default HomeScreen;

const HomeScreen = (props) => {
  return (
    <>
      <h1>{props.mainTitle}</h1>
      <form>
        <input
          type="text"
          id="nick"
          placeholder={props.nickPlaceholder}
          onChange={(e) => props.handleNick(e)}
          value={props.nick}
        />
        <button type="submit" onClick={props.handleStartGame}>
          {props.startButton}
        </button>
      </form>
    </>
  );
};

export default HomeScreen;

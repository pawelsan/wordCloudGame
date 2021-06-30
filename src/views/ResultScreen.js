const ResultScreen = ({ score, nick, endText1, endText2, endText3 }) => {
  return (
    <div className="end--screen">
      <span className="end--text">{`${endText1}, ${nick}!`}</span>
      <span className="end--text">{endText2}</span>
      <span className="end--result">{`${score} ${endText3}`}</span>
    </div>
  );
};

export default ResultScreen;

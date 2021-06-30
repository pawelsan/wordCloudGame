const ResultScreen = ({
  score,
  nick,
  endText1,
  endText2,
  endText3,
  endText4,
}) => {
  return (
    <div className="end--screen">
      <span className="end--text">{`${
        score > 0 ? endText1 : endText4
      }, ${nick}!`}</span>
      <span className="end--text">{endText2}</span>
      <span className="end--result">{`${score} ${endText3}`}</span>
    </div>
  );
};

export default ResultScreen;

import "../styles/Count.css";

function Count({ numClicks }) {
  return (
    <>
      <div className="contador">{numClicks}</div>
    </>
  );
}

export { Count };

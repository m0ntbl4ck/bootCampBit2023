import "./Button.css";
function Button({ text, calcular }) {
  return (
    <>
      <button onClick={calcular}>{text}</button>
    </>
  );
}
export { Button };

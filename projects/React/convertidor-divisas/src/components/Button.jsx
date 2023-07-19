function Button({ text, convertir }) {
  return (
    <>
      <button onClick={convertir}>{text}</button>
    </>
  );
}

export { Button };

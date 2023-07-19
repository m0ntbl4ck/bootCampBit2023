function Button({ accion, text }) {
  return (
    <>
      <button onCLick={accion} className="btn btn-success">
        {text}
      </button>
    </>
  );
}
export { Button };

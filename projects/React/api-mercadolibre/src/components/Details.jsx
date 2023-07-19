function Details({ detalles }) {
  return (
    <section className="container col">
      <div>
        <h3>{detalles.title}</h3>
        <img src={detalles.thumbnail} alt="Imagen del producto" />
        <p>
          {detalles.currency_id} {detalles.price}
        </p>
      </div>
    </section>
  );
}
export { Details };

import B from './ComponenteB';

function A(props) {
  let texto_enviado_de_Padre = props.text;
  return (
    <li>
      <B mensaje={texto_enviado_de_Padre} />
    </li>
  );
}

export default A;

import React from 'react';
import App from './App';

const PageBody = () => {
  const [text, setText] = useState('Texto inicial');
  const [image, setImage] = useState('imagen-inicial.jpg');

  return (
    <div>
      <h1>{text}</h1>
      <img src={computador.png} alt="Imagen" />
      <button onClick={() => setText('Nuevo texto')}>Cambiar texto</button>
      <button onClick={() => setImage('nueva-imagen.jpg')}>Cambiar imagen</button>
    </div>
  );
};

export default PageBody;
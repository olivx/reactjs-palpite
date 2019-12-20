import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

function App(){

  const [estado, setEstado] = useState('START')
  const [palpite, setPalpite] = useState(150)
  const [max, setMax] = useState(300)
  const [min, setMin] = useState(1)
  const [numPalpite, setNumPalpite] = useState(0)
  const iniciarJogo = () => {
    setEstado('RODANDO')
  
  }
  
  const zerar = () => {
    setNumPalpite(1)
    setMax(300)
    setMin(1)
    setPalpite(150)
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1)
    setMax(palpite)
    const proxPalpite =  parseInt((palpite - min)/ 2) + min
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpite(numPalpite + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }

  const acertou = () => {
    setEstado('FIM')
  }

  if (estado == "FIM"){
    return(
      <div className="container">
        <div className="item">
          <p>Acertei o resultado é: {palpite} em {numPalpite} vezes </p>
          <button className="btn" onClick={iniciarJogo}> Começar a jogar </button>
        </div>
      </div>
    );
  }



  if(estado === 'START'){
    return (
      <div className="container">
        <button className="btn" onClick={iniciarJogo}> Começar a jogar </button>
      </div>
    )
  }




  return(
    <div>

      <div className="container cont-limit">
        <div className="item">
          <p> De um palpite que eu vou acertar ! escolha um numero ate 300 </p>
        </div>
        <div className="item">
          <p> meu palpite é : {palpite} <button className="btn btn-right" onClick={zerar}> Zerar </button></p> 
        </div>
      </div>
      <div className="container">
        <div className="item"><button className="btn" onClick={menor}>Menor</button></div>
        <div className="item"><button className="btn" onClick={acertou}>Acertou</button></div>
        <div className="item"><button className="btn" onClick={maior}>Maior</button></div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

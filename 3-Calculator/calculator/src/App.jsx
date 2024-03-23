import { useState } from 'react'
import "./App.css"

function App() 
{
  const [num,setNum] = useState(0);
  const [oldnum,setprinum] = useState(0);
  const [operador,setoperador] = useState();

  function inputNum(e)
  {
    var input=e.target.value
    if(num == 0)
    {
      setNum(input);
    }
    else
    {
      setNum(num + input);
    }
  }
  function apagartudo()
  {
    setNum(0)
  }
  function apagarum()
  {
    setNum(num - 1)
  }
  function porcentagem()
  {
    setNum(num / 100)
  }
  function igual_a()
  {
    if(operador == "/")
    {
      setNum(oldnum / num)
    }
    if(operador == "X")
    {
      setNum(oldnum * num)
    }
    if(operador == "-")
    {
      setNum(oldnum - num)
    }
    if(operador == "+")
    {
      setNum(parseFloat(oldnum) + parseFloat(num))
    }
  }
  function operadorinsa(e)
  {
    var operadorinput = e.target.value
    setoperador(operadorinput)
    setprinum(num)
    setNum(0)
  }
  return (
    <div className='calt'>
      <div class="calculadora">
        <div className='tela'>
          <h1 id='num'>{num}</h1>
        </div>
        <div className='numeros'>
          <div className='operadores'>
          <button id='diferentesAC' onClick={apagartudo}>AC</button>
          <button id='diferentes' onClick={porcentagem}>%</button>
          <button id='diferentes' onClick={operadorinsa} value={"/"}>÷</button>
          </div>
          <div className='um'>
          <button id='numeross' onClick={inputNum} value={1}>1</button>
          <button id='numeross' onClick={inputNum} value={2}>2</button>
          <button id='numeross' onClick={inputNum} value={3}>3</button>
          <button id='diferentes' onClick={operadorinsa} value={"X"}>X</button>
          </div>
          <div className='dois'>
          <button id='numeross' onClick={inputNum} value={4}>4</button>
          <button id='numeross' onClick={inputNum} value={5}>5</button>
          <button id='numeross' onClick={inputNum} value={6}>6</button>
          <button id='diferentes' onClick={operadorinsa} value={"-"}>-</button>
          </div>
          <div className='tres'>
          <button id='numeross' onClick={inputNum} value={7}>7</button>
          <button id='numeross' onClick={inputNum} value={8}>8</button>
          <button id='numeross' onClick={inputNum} value={9}>9</button>
          <button id='diferentes'onClick={operadorinsa} value={"+"}>+</button>
          </div>
          <div className='quatro'>
          <button id='numeross' onClick={inputNum} value={"."}>.</button>
          <button id='numeross' onClick={inputNum} value={0}>0</button>
          <button id='numeross' onClick={apagarum}>⌫</button>
          <button id='diferente' onClick={igual_a}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

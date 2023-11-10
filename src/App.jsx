import { useState } from 'react';
import './App.css';

function App() {
  const [firstInput,  setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [result, setResult] = useState('');

  function action (operator) {
    if (firstInput === '' || secondInput === '') {
      alert('Заполните поля')
    } else if (operator === 'plus') {
      const res = +firstInput + +secondInput;
      setResult(res)
    } else if (operator === 'minus') {
      const res = firstInput - secondInput;
      setResult(res)
    } else if (operator === 'multiply') {
      const res = firstInput * secondInput;
      setResult(res)
    } else if (secondInput === '0') {
      alert('На ноль делить нельзя!')
    } else if (operator === 'delenie') {
      const res = firstInput / secondInput;
      setResult(res)
    }
  }

  return (
    <>
      <div className="wrapper">
        <form className='form'>
          <label>
            <span>Введите первое число</span>
            <br />
            <input value={firstInput} onChange={(e) => setFirstInput(e.target.value)} type="number"/>
          </label>
          <label>
            <span>Введите второе число</span>
            <br />
            <input value={secondInput} onChange={(e) => setSecondInput(e.target.value)} type="number"/>
          </label>
          <div className="buttons">
            <button onClick={(e) => {e.preventDefault(); action('plus')}}>+</button>
            <button onClick={(e) => {e.preventDefault(); action('minus')}}>-</button>
            <button onClick={(e) => {e.preventDefault(); action('delenie')}}>/</button>
            <button onClick={(e) => {e.preventDefault(); action('multiply')}}>*</button>
          </div>
          <button type='button' onClick={() => {setFirstInput(''); setSecondInput('')}}>Очистить</button>

          <label>
            <span>Ответ</span>
            <br />
            <div className='result'>{result}</div>
          </label>
        </form>
      </div>
    </>
  )
}

export default App;
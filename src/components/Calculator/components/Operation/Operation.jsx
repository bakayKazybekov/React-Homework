import { useState } from "react";

function Operation ({ setResult }) {
    const [firstInput,  setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');

    function action (operator) {
        // нужен ли здесь trim, ведь в калькуляторе input с типом number?
        if (!firstInput.trim() || !secondInput.trim()) {
            alert('Заполните поля') 
            return
        }
        switch(operator) {
            case 'plus' :
                setResult(+firstInput + +secondInput)
                break;
            case 'minus' :
                setResult(firstInput - secondInput)
                break;
            case 'multiply' :
                setResult(firstInput * secondInput)
                break;
            case 'dividing' :
                if (secondInput === '0') {
                    alert('На ноль делить нельзя!')
                } else {
                    setResult(firstInput / secondInput)
                }
                break;
        }
    }

    return (
        <div className='form'>
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
                {/* с помощью preventDefault я хотел предотвратить обновление страницы, но уже нашел другой способ */}
                <button onClick={() => action('plus')}>+</button>
                <button onClick={() => action('minus')}>-</button>
                <button onClick={() => action('dividing')}>/</button>
                <button onClick={() => action('multiply')}>*</button>
            </div>
            <button type='button' onClick={() => {setFirstInput(''); setSecondInput(''); setResult('')}}>Очистить</button>
        </div>
    )
}

export default Operation;
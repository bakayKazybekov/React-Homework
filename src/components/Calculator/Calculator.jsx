import { useState } from 'react';
import Operation from './components/Operation/Operation';
import Result from './components/Result/Result';

function Calculator () {
    const [result, setResult] = useState('');

    return (
        <div className="wrapper">
            <Operation
                setResult={setResult}
            />
            <Result
                result={result}
            />
        </div>
    )
}

export default Calculator;
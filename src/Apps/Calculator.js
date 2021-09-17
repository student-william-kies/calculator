import './App.css';
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import {useState} from "react";

function Calculator()
{
    const [result, setResult] = useState('');
    const numbersTop = [7, 8, 9];
    const numbersMiddle = [4, 5, 6];
    const numbersBottom = [1, 2, 3];
    const lastNumber = 0;
    const equal = '=';

    const [operator, setOperator] = useState('');
    const listOperator = ['+', '-', '*', '/'];

    const [bool, setBool] = useState(false);

    function Click(e)
    {
        const eventNumber = result + e.target.value;
        const eventOpe = e.target.value;
        setResult(eventNumber);
        setOperator(eventOpe);

        if(eventOpe === equal)
        {
            let newResult = eval(result);
            setResult(newResult);
            if (newResult > '9000')
            {
                setBool(true);

            }
        }
    }

    return(
        <div className='center-calc'>
            <div className='calculator'>
                <div className='top-screen' id='top-screen'><BeautifulScreen bool={bool} result={result} /></div>
                <div className='container'>
                    <div className='numbers'>
                        <div className='list-number'><AmazingNumberButton click={Click} numbersTop={numbersTop} numbersMiddle={numbersMiddle} numbersBottom={numbersBottom} /></div>
                    </div>
                    <div className='operators'>
                        <div className='list-operator'><GreatOperationButton selectOperator={Click} operators={listOperator} /></div>
                    </div>
                </div>
                <div className='equal'>
                    <div className='last-button'><MagnificientEqualButton click={Click} operator={operator} equal={equal} lastNumber={lastNumber} /></div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
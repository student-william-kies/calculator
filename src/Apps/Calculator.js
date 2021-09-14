import './App.css';
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";

const result = 0;
const numbersTop = [7, 8, 9];
const numbersMiddle = [4, 5, 6];
const numbersBottom = [1, 2, 3];
const operator = ['+', '-', '*', '/'];
const equal = '=';

function Calculator()
{
    return(
        <div className='center-calc'>
            <div className='calculator'>
                <div className='top-screen' id='top-screen'><BeautifulScreen result={result} /></div>
                <div className='container'>
                    <div className='numbers'>
                        <div className='list-number'><AmazingNumberButton numbersTop={numbersTop} numbersMiddle={numbersMiddle} numbersBottom={numbersBottom} /></div>
                    </div>
                    <div className='operators'>
                        <div className='list-operator'><GreatOperationButton operator={operator} /></div>
                    </div>
                </div>
                <div className='equal'>
                    <div className='last-button'><MagnificientEqualButton equal={equal} lastNumber={result} /></div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
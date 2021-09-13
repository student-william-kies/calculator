import './App.css';
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";

const result = 0;
const numbers1 = [7, 8, 9];
const numbers2 = [4, 5, 6];
const numbers3 = [1, 2, 3];

function Calculator()
{
    return(
        <div className='center-calc'>
            <div className='calculator'>
                <div className='top-screen' id='top-screen'><BeautifulScreen result={result} /></div>
                <div className='list-number'><AmazingNumberButton numbers1={numbers1} numbers2={numbers2} numbers3={numbers3} /></div>
                <div className='list-operator'></div>
            </div>
        </div>
    );
}

export default Calculator;
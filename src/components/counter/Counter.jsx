import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddCounter from './AddCounter';
import CounterButton from './CounterButton';
import Notification from './Notification';

export default function Counter()
{
    const initState = {
        count: 0,
        counterItems: [1,2,5,10,100],
        resetClicked: false
    } 

    const [counterState, setCount] = useState(initState);
    
    function increment(value)
    {
        const newValue = counterState.count + value;
        setCount({...counterState, count : newValue, resetClicked: false});
    }

    function decrement(value)
    {
        const newValue = counterState.count - value;
        setCount({...counterState, count : newValue, resetClicked: false});
    }

    function reset()
    {
        const newValue = 0;
        console.log(50 + -3);
        setCount({...counterState, count : newValue, resetClicked: true});
        
    }

    function addValueToCounter(value)
    {
        const values = counterState.counterItems;
        values.push(value);
        setCount({...counterState, counterItems: values});   
    }

    function removeValueFromCounter(valueToRemove)
    {
        const existingValues = counterState.counterItems.filter((value) => value !== valueToRemove);
        setCount({...counterState, counterItems: existingValues});   
    }

    return(
        <>
        {counterState.resetClicked === true &&
            <Notification title="Info" message="Reset Counter Initiated." />
        }
        <div className="container text-center col-2">
            <div className="row text-center pt-5 pb-3">
                <div className='col'>
                    <h1 className="display-4">{counterState.count}</h1>
                </div>
            </div>

            {counterState.counterItems.map((item,index)=>{
               return <CounterButton incrementBy={item} incrementCall={increment} decrementCall={decrement} removeCall={removeValueFromCounter} />
            })}
            <div className='row text-center'>
                <div className='col-6'>
                    <AddCounter updateMainCounter={addValueToCounter} />
                </div>
                <div className='col-6'>
                    <button className="btn btn-lg btn-outline-danger col-12" onClick={reset}>Reset</button>    
                </div>
            </div>
            
        </div>
        </>
    );
}
import React, {use, useState} from 'react'

interface Props {
    name: string;
    age: number;
}

const Counter = () => {

    const [count, setCount ] = useState<number>(0);;
    //const [props, setProps] = useState<Props>((name: 'Armand', age:30));

    const handleIncrement = () => {
        setCount(count + 1);
    }

  return (
    <div className='bg-white'>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Counter
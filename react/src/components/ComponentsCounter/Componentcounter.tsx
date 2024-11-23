import { useState } from "react"

export const Componentcounter = () => {

    const [counter, setCounter] = useState<number>(0);

    const incrementar = () => {
        setCounter((prev)=>prev+1);
    }

    const decrementar = () => {
        setCounter((prev)=>prev-1);
    }

  return (
    <div>

        <h2>valor del counter: {counter}</h2>

        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>

        
    </div>
  )
}

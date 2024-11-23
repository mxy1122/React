import { useEffect,useState } from "react"


export const ComponentUseEffect = () => {

    const [state, setState] = useState(false);

    useEffect(() => {
        console.log("componente montado");
    }, []);
    useEffect(() => {
        console.log(state);
    }, [state]);


  return (
    <div>

        <p>{state ? "verdadero" : "falso"}</p>

        <button onClick={() => {setState(!state)}}>

            cambiar estado

        </button>


    </div>
  )
}

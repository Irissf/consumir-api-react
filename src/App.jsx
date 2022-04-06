import {React,useState,useEffect} from 'react'

const App = () => {

    const[contador,setContador] = useState(0)

    //Se ejecuta al renderizar una web, por lo que al aumentar el contador
    //se renderiza de nuevo
    useEffect(()=>{
        console.log("renderizado "+ contador)
    },[contador]);

    return (
        <div className='container'>
            <h1>Rick and morty</h1>
            <h3>{contador}</h3>
            <button onClick={() => setContador(contador + 1)}>agregar</button>
        </div>
    )
};

export default App
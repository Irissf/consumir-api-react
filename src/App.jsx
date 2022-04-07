import {React,useState,useEffect} from 'react'
import Formulario from './components/Formulario';

const App = () => {

    return (
        <div className='container'>
            <h1>App Rick and Morty</h1>
           <Formulario></Formulario>
        </div>
    )
};

export default App
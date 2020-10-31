import React, {useState, useEffect} from 'react'
import Feature from './feature'
import Masonry from "react-responsive-masonry"

export default function Part() {
    const [parts, setparts] = useState([]);

    
    //ejecuta el Get al servidor para 
    useEffect(() => {
        GetParts()
        //funcion que ejecuta el intervalo y lo elimina para evitar la recursividad
        const interval = setInterval(GetParts,10000);
        return () => clearInterval(interval);
      }, []);


    async function GetParts(){
        await fetch('http://localhost:3000/parts')
        .then(response => response.json())
        .then(data => setparts(data))  
    }
    
    //funcion que controla que no este vacio el json y renderiza cada caso
    function haveParts(){
        if (parts.length === 0) {
            return <span>Cargando Datos...</span>
        } else {
            let feature = parts.map((part)=>{
                return  (<Feature key={part.Key} part={part} ></Feature>)
                })
            return feature
           
        }
    }
    return (
        <div className="container">
        <Masonry columnsCount={4}>
            { 
               haveParts()
            }
        </Masonry>   
        </div>   
    )
}

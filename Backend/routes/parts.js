const express = require('express')
const router = express.Router()
const parts = require('../parts.json')

//function que recibe un objeto control y modifica sus numeros retornandolo modificado
function UpdateControls(control){
    //actualiza los valores de X
    control.X.dev = Math.round(Math.random() * 10 );
    control.X.devOut = Math.round(Math.random() * 10 )
    control.X.state = Math.round(Math.random() * 2 )
    //actualiza los valores de Y
    control.Y.dev = Math.round(Math.random() * 10 );
    control.Y.devOut = Math.round(Math.random() * 10 )
    control.Y.state = Math.round(Math.random() * 2 )
    //actualiza los valores de Z
    control.Z.dev = Math.round(Math.random() * 10 );
    control.Z.devOut = Math.round(Math.random() * 10 )
    control.Z.state = Math.round(Math.random() * 2 )
    //actualiza los valores de Diameter
    control.Diameter.dev = Math.round(Math.random() * 10 );
    control.Diameter.devOut = Math.round(Math.random() * 10 )
    control.Diameter.state = Math.round(Math.random() * 2 )
    return control
}

//Getting Part
router.get('/', (req, res) => {

    //recorre el json de Parts y modifica los numero por numeros aleatorios 
    const newparts = parts.map((part) =>{
        
        //recorre los ya existentes controles en el json y modifica sus valores
        part.controls.map((control)=>{
            return UpdateControls;
        })

        //genero un numero aleatorio para determinar la cantidad de controles a agregar
        let num = Math.round(Math.random() * 5)
        //itero la cantidad sorteada
        for (num; num > 0; num--) {
            //genera un control base
            let newcontrol = {
                "keyControl": 0,
                "X": {
                "dev": 0,
                "devOut": 0,
                "state": 0
                },
                "Y": {
                "dev": 0,
                "devOut": 0,
                "state": 0
                },
                "Z": {
                "dev": 0,
                "devOut": 0,
                "state": 0
                },
                "Diameter": {
                "dev": 0,
                "devOut": 0,
                "state": 0
                }
            }
            //inserto en los controles el nuevo control con sus valores modificados
            part.controls.push(UpdateControls(newcontrol))
            
        }
        
        return part;
    })
    
    //envia como respuesta el nuevo json con numero aleatorios
    res.send(newparts)
})


module.exports = router
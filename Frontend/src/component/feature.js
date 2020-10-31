import React  from 'react'
import Control from './control'
import { BsExclamationCircle, BsXCircle, BsCheckCircle, BsCircle  } from "react-icons/bs";
import Masonry from "react-responsive-masonry"

export default function Feature(props) {
    const part = props.part;
    function typeColor(){
        switch (part.type) {
            case 1:
                return {backgroundColor: '#1F9121'} ;
            case 0:
                return {backgroundColor: '#F30C0C'} ;
            case 2:
                return {backgroundColor: '#D9D913'} ;    
            default:
                return {backgroundColor: '#D9D913'} ;
        }
    }

    function stateIcon(state){
        switch (state) {
          case 1: return <BsCheckCircle />
          case 2: return <BsExclamationCircle />
          case 0: return <BsXCircle />
          default:
            return <BsExclamationCircle />;
        }
      }
      
    return (
        <div className="feature">
            <div className="featureTitle" style={typeColor()}>
            <BsCircle />
            {part.name}
            {stateIcon(part.type)}
            </div>
            <Masonry columnsCount={2}>
            {
                
                part.controls.map((control) =>{
                    return <Control key={control.keyControl} control={control}></Control>
                     
                })
                  
            }
            </Masonry>
        </div>  
    )
}

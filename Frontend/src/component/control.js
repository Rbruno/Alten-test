import React from 'react'
import { BsExclamationCircle, BsXCircle, BsCheckCircle  } from "react-icons/bs";


export default function control(props) {
  let X, Y, Z, diameter;
  X = props.control.X;
  Y = props.control.Y;
  Z = props.control.Z;
  diameter = props.control.Diameter;

  function stateIcon(state){
    switch (state) {
      case 1: return <BsCheckCircle />
      case 2: return <BsExclamationCircle />
      case 0: return <BsXCircle />
      default:
        return <BsExclamationCircle />;
      
    }
  }

  function stateColor(state){
    switch (state) {
        case 1:
            return { color: '#1F9121'} ;
        case 0:
            return { color: '#F30C0C'} ;
        case 2:
            return { color: '#D9D913'} ;    
        default:
            return { color: '#D9D913'} ;
    }
}
    return (
        <table className="controlTable">
        <thead>
        <tr>
          <th>Control</th>
          <th>Dev</th>
          <th>Dev Out tol</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>X</td>
          <td>{X.dev}</td>
          <td>{X.devOut}</td>
          <td  style={stateColor(X.state)}>{stateIcon(X.state)}</td>
        </tr>
        <tr>
          <td>Y</td>
          <td>{Y.dev}</td>
          <td>{Y.devOut}</td>
          <td  style={stateColor(Y.state)}>{stateIcon(Y.state)}</td>
        </tr>
        <tr>
          <td>Z</td>
          <td>{Z.dev}</td>
          <td>{Z.devOut}</td>
          <td  style={stateColor(Z.state)} >{stateIcon(Z.state)}</td>
        </tr>
        <tr>
          <td>Diameter</td>
          <td>{diameter.dev}</td>
          <td>{diameter.devOut}</td>
          <td  style={stateColor(diameter.state)}>{stateIcon(diameter.state)}</td>
        </tr>
      </tbody>
      </table>
    )
}

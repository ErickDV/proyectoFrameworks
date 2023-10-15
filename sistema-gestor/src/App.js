import logo from './logo.svg';
import './App.css';
//import { TextField, Button } from '@material-ui/core';
function App() {
  return (
    <div className='contenedor'>
        <h2>Expediente</h2>
        <input id='expediente'></input>
        <h2>Contraseña</h2>
        <input id='password' type='password'></input>
    </div>
  );
}

export default App;

import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from './context/AuthProvider'
import axios from 'axios' //'./api/axios';

const LOGING_URL = '';
const Login = () => {

    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrmsg] = useState('');
    const [success, setSuccess] = useState(false);
    //se enfoca en la entrada del usuario
    useEffect(()=>{
        userRef.current.focus();
    },[])

    //limpiar los mensajes de errores si el usuario o la contrasena cambia
    useEffect(()=>{
        setErrmsg('');
    },[user,pwd])

   function handleSubmit (event) {
        event.preventDefault();
        axios.post('http://localhost:3000/login',{user, pwd})
        .then(res => console.log(res, 'hola'))
        .catch(err => console.log(err), 'ggbro')
        setSuccess(true);
   }

    return(
        <section className="contenedor">
            <h1>Inicio de sesion</h1>
            <form className='contenedor' onSubmit={handleSubmit}>
                <label htmlFor="userID" >userID</label>
                <input  
                    id='userID' 
                    ref={userRef} 
                    autoComplete='off' 
                    //funcion anonima
                    onChange={(e) => setUser(e.target.value)}
                    //para limpiar entradas despues de el submit
                    value={user}
                    required
                    >
                </input>
                <label htmlFor="password" >Contraseña</label>
                <input
                    type='password'  
                    id='password'  
                    autoComplete='off' 
                    //funcion anonima
                    onChange={(e) => setPwd(e.target.value)}
                    //para limpiar entradas despues de el submit
                    value={pwd}
                    required
                    >
                </input>
                <button>Iniciar Sesion</button>
            </form>
        </section>
    )
}

export default Login
import {useRef, useState, useEffect} from 'react';

const Login = () => {

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

    return(
        <section className="contenedor">
            <h1>Inicio de sesion</h1>
            <form className='contenedor'>
                <label htmlFor="expediente" >Expediente</label>
                <input  
                    id='expediente' 
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
                    ref={userRef} 
                    autoComplete='off' 
                    //funcion anonima
                    onChange={(e) => setUser(e.target.value)}
                    //para limpiar entradas despues de el submit
                    value={user}
                    required
                    >
                    </input>
               
            </form>
        </section>
    )
}

export default Login
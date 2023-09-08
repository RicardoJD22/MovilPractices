import logo from './logo.svg';
import './Signup.css';
import Tabla from './Tabla'
import {useState} from 'react';

function App() {

  const[counter, setCounter]= useState(0);
  const[nombre, setNombre]= useState();
  const[ApellidoP, setApellidoP]=useState();
  const[ApellidoM, setApellidoM]=useState();
  const[sexo, setSexo]=useState();
  const[Telefono, setTelefono]=useState();
  const[Direccion, setDireccion]=useState();
  const[CP, setCP]=useState();
  const[edad, setedad]=useState();
  const[Nacionalidad, setnac]=useState();
  const[email, setemail]=useState();
  const [contraseña, setContraseña] = useState('');
  const[popupStyle, showPopup] = useState("hide")
  const popup = () => {
    showPopup("save-popup")
    setTimeout(() => showPopup("hiden"), 3000)
  }



  function onAdd(){
    let resultado = counter +1;
    setCounter(resultado);

  }

  function onReduce(){
    let resultado = counter -1;
    setCounter(resultado);
  }

  function onName(){
  }
  

  return (
    <div className='page'>
    <div className="App">
     <h1 className='title'>PlayField</h1>
   
     <input onChange={(e)=>setNombre(e.target.value)}type='text' placeholder='Nombre' required=""></input>
     <input onChange={(e)=>setContraseña(e.target.value)}type='password' placeholder='Password' required=""></input>
     <button className="save"onClick={(popup)=>setCounter(counter+1)}>Login</button>
    
     <a href='#' src="#" className='button'>Forgot Password?</a> 
    
     <div className={popupStyle}>
      <h3>USUARIO NO VALIDO</h3>
      <p>Usuario o contraseña incorrecta</p>
     </div>
     </div>

    


    </div>

   
    
  );
}

export default App;

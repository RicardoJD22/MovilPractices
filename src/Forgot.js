import logo from './logo.svg';
import './App.css';
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
    <div className='forgi'>
    <div className='page'>
    <div className="App">
     <h1 className='title'>PlayField</h1>
   
     <input onChange={(e)=>setemail(e.target.value)}type='email' placeholder='Correo' required=""></input>

     <div className={popupStyle}>
      <h3>USUARIO NO VALIDO</h3>
      <p>Usuario o contraseña incorrecta</p>
     </div>
     </div>

    

     </div>
    </div>
    

   
    
  );
}

export default App;

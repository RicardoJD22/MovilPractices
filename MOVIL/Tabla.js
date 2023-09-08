function Tabla(){
    return(
        <>    
            <label for="nombre">Nombres</label>
            <input type="text" id="nombre" name="nombre" required="" />
            
            <label for="apellidoPaterno">Apellido Paterno:</label>
            <input type="text" id="apellidoPaterno" name="apellidoPaterno" required=""/> 

            <label for="apellidoMaterno">Apellido Materno:</label>        
            <input type="text" id="apellidoMaterno" name="apellidoMaterno" required=""/>

            <label for="telefono">Telefono:</label>
            <input type="number" id="telefono" name="telefono" required="" />

            <label for="sexo">Sexo: </label>
            <input type="radio" id="sexoM" name="sexoM" required="" />
            <label for="sexoM">M</label>

            <input type="radio" id="sexoF" name="sexoF" required="" />
            <label for="sexoF">F</label>

            <label for="direccion">Direccion:</label>
            <input type="text" id="direccion" name="direccion" required="" />
            
            <label for="codigo_postal">Codio Postal</label>
            <input type="text" id="codigo_postal" name="codigo_postal" required="" />

            <label for="edad">Edad</label>
            <input type="number" id="edad" name="edad" required="" />

            <label for="nacionalidad">Nacionalidad</label>
            <input type="text" id="nacionalidad" name="nacionalidad" required="" />            

            <input type="button" value="Enviar" onclick="agregarRegistro()"/>
            <input type="reset" value="cancelar" />
        
            
            <label for="correo">Correo:</label>
            <input type="email" id="correo" name="correo" required="" />

            
            <label for="contrseña">Contraseña</label>
            <input type="password" id="contrseña" name="contrseña" required="" />
        
        </>
    );
}

export default Tabla;
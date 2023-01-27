import React from "react";
import '../Componentes/Footer.css'
function Footer() {
    return(
        <div>
           
            <h1 className="info"> Te espero para disfrutar una noche maravillosa !!
            </h1>
            <h2 className="direccion"> En: Circulo San Costantino de Calabro, Colombia 3645 (San Justo)</h2>
            
            <button className="boton shake-horizontal" type="text" placeholder="confirmar asistencia">CONFIRMAR ASISTENCIA</button>
        </div>
    )
}

export default Footer;
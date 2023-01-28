import React from "react";
import '../Componentes/Body.css';


function Body() {
    return (
        <div className="body">

            <h1 className="titulo slide-fwd-center">Te invito a mi Fiesta!</h1>
            <div className="frase">
                <h4>Aprendi que estar con quienes quiero...</h4>
                <h5>es suficiente para ser Feliz, por eso quiero compartir con vos esta noche.</h5>
            </div>

            <div className="contenedor">
                <p className="nombre slide-bottom">Hada</p>
                < h1 className="horario"> 25/03/23 21:00 hs </h1>
            </div>

                <h3 className="h3 scale-up-center"># MIS XV</h3>
                 <h2 className="direccion"> Donde? En el Circulo San Costantino de Calabro, Colombia 3645 (San Justo)</h2>
            <div>
                 <h1 className="info"> Te espero para disfrutar una noche maravillosa !!</h1>
            </div>
                 <a className="boton heartbeat" href=" https://wa.me/1132722394?text=Confirmo%20Asistencia."> Enviar Confirmacion</a>

        </div>
    )
}

export default Body;
import React from "react";
import '../Componentes/Body.css';


function Body() {
    return (
        <div className="body">
        <div className="principal">
            <h1 className="titulo">Te invito a mi Fiesta!</h1>
           <div className="frase">
                <h4>Aprendi que estar con quienes quiero Es suficiente para ser Feliz, por eso quiero compartir con vos esta noche magica & unica para mi!.</h4>
           </div>
        </div>
        <div className="nombre_xv">
            <h1 className="nombre">Hada</h1>
            <h3 className="scaleUp"># MIS XV</h3>
        </div>
        <div className="fecha_hora">
            <h1>Sabado 21:00hs PM</h1>  
            <h1> 25 de Marzo</h1>
            <h1>Dos mil veintitrés</h1>
        </div>
        <div className="direccion">
              <h2> Te espero En el Circulo San Costantino de Calabro, Colombia 3645 (San Justo) para disfrutar una noche maravillosa!</h2>
        </div>
        <button className="boton" type="text" a href="https://wa.me/1132722394?text=Confirmo%20Asistencia.">Confirmar Asistencia.</button>
        
        <button className="boton" type="text">No Asistire.</button>           


    </div>
    )
}

export default Body;
import React from "react";
import '../Componentes/Body.css';


function Body() {
    return(
        <div className="body">
        
            <h1 className="titulo roll-in-left">Te invito a mi Fiesta!</h1>
            <div className="frase">
                 <h4>Aprendi que estar con quienes quiero</h4>
                 <h5>es suficiente para ser Feliz, por eso quiero compartir con vos esta noche.</h5>
            </div>
           
            <div className="contenedor">
               <p className="nombre">Hada</p>
               < h1 className="horario"> 25/03/23 21:00 hs </h1>
            </div>
           
            <h3 className="h3 text-focus-in"># MIS XV</h3>
            
        </div>
    )
}

export default Body;
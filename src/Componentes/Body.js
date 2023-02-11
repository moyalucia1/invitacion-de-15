import React from "react";
import '../Componentes/Body.css';


function Body() {
    return (
        <div>
            <div className="principal">
                <div>
                    <h1 className="titulo slide-fwd-center">Te invito a mi Fiesta!</h1>
                </div>
               <div className="frase">
                    <h4>Aprendi que estar con quienes quiero Es suficiente para ser Feliz, por eso quiero compartir con vos esta noche magica & unica para mi!.</h4>
               </div>
            </div>
                <div className="nombre_xv">
                    <div>
                       <h1 className="nombre">Hada</h1>
                    </div>
                   <div>
                     <h3 className="h3 scale-up-center"># MIS XV</h3>
                   </div>
                </div>
                <div className="fecha_hora">
                <div>
                    <h1>Sabado 21:00hs PM</h1>  
                </div>
                <div>
                    <h1> 25 de Marzo</h1>
                </div>
                <div>
                   <h1>Dos mil veintitrés</h1>
                </div>
            </div>
            <div className="direccion">
                  <h2> Te espero En el Circulo San Costantino de Calabro, Colombia 3645 (San Justo) para disfrutar una noche maravillosa!</h2>
            </div>
          <div>
                <button className="boton" type="text" a href="https://wa.me/1132722394?text=Confirmo%20Asistencia.">Confirmar Asistencia.</button>
                
            </div>
            
            <div>
                <button className="boton" type="text">No Asistire.</button>

            </div>
           


        </div>
    )
}

export default Body;
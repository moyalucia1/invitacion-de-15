import React from "react";
import '../Componentes/Footer.css'
function Footer() {
    return (
        <div>
            <div>
                <h1 className="Regalos">Listas de Regalos</h1>
            </div>

            <div>
                <label>
                    Ropa:
                    <input type="checkbox" name="name" />
                </label>
            </div>


            <button type="text">Confirmar Asistencian</button>
            <div>
                <h4>Vestir elegante Sport</h4>
            </div>


        </div>
    )
}

export default Footer;
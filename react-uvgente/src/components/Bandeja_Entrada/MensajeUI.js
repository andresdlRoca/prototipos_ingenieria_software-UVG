import './MensajeUI.css';

const MensajeUI = () => {

    return (
        <>
        <div className="message_container">
        </div>
       
        <div className="mainMessageUI">
            <button>Cerrar</button>
            <h1>Usuario</h1>
            <div className='internalMSG'>
                
                <div className='MSGBubble'>Mensaje prueba</div>
            </div>
            <input type="text" id="inputMSG"></input>
            
        </div>  
        </>

    );

}

export default MensajeUI;
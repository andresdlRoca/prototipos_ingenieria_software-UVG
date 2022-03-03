import profile_pic from '../media/cat_pp.jpg'
const Bandeja_Entrada = () => {
    return(
        <div id="inboxpage">
            <div id="pfp">
                <img src={profile_pic} alt="profilepicbandejaentrada" className='pfp_Bandeja_Entrada' />
            </div>
            <div id="profileinfo">
                <div id="Username">Luis Pedro Gonzalez Aldana</div>
                <div id="Tipouser">Estudiante UVG</div>
                <div id="Descripcion">
                    <p>Sobre mi:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mi a fringilla posuere. Aenean pulvinar, dui nec ultrices cursus, tellus lectus fermentum lacus, sed finibus enim mauris ut sapien. Phasellus vulputate nulla ac sollicitudin ultricies. Nam ultricies pellentesque elementum. Aliquam iaculis mauris diam, sed volutpat elit porta quis. Ut efficitur vulputate dictum. Morbi aliquam vehicula molestie. Fusce lacinia dapibus ante non luctus.</p>
                </div>
            </div>
            <div id="inbox">
                <div className="inboxMessages"></div>
            </div>
        </div>
    )
}

Bandeja_Entrada.defaultProps = {
   
}

export default Bandeja_Entrada
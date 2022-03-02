import profile_pic from '../media/cat_pp.jpg'
import five_stars_image from '../media/five_stars_rate.png'

const MiPerfil = () => {
  return (
    <div className='container_main_content' id='profile_page_main'>
        <div id='lateral_profile_page_main'>
            <img src={profile_pic} alt="profilepic" className='pp_into_side_bar_card_main_content' />
            <p>Valoracion</p>
            <img src={five_stars_image} alt="profilepic" className='five_start_into_main_content' />
            <div id='text_into_bar'>
                <p>
                            Contactos: <br /><br />
                            Correo electronico: <br />hern19856@uvg.edu.gt
                            <br />Telefono celular: <br />+502 6942 0502 
                            <br /><br />Enlaces Externos:<br /> 
                            <a href='https://www.linkedin.com/in/luis-pedro-gonzalez-aldana-3462311ab'>Linkedin</a> <br />
                            <a href='https://github.com/LPELCRACK896'>Github</a>
                </p>
            </div>
        </div>
        <div id='main_content_profile_page_main'>
            <h4>
            Geralt Hernandez <br />
            Estudiante UVG <br />
            Ingeniería en Ciencias de la Computacion y TI <br/>
            <br /> Sobre mi...
            <br />
            </h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet tellus eleifend, rutrum purus vel, faucibus tellus. Maecenas efficitur lacus a aliquet scelerisque. Aenean vitae tincidunt magna.
            </p>
            <div id='btn_div'>
                <button name="button" id='btn'></button>        
            </div>
        </div>
    </div>
  )
}

export default MiPerfil
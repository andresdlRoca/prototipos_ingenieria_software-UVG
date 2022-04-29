import { Link } from 'react-router-dom'
import profile_pic from '../media/cat_pp.jpg'
import five_stars_image from '../media/five_stars_rate.png'
const BarraLateral = () => {
  return (
    <div id="sidebar">
    <div class="toggle-btn">
{/*       <span>...</span>
 */}    </div>
    <ul>
      <li>
      <div className='card_into_side_bar'>
            <div className='flexbox_pp_name'>
                <img src={profile_pic} alt="profilepic" className='pp_into_side_bar_card' />
                <div>
                    <p>Luis Pedro Gonzalez Aldana</p>
                    <img src={five_stars_image} alt='rae'className='div_five_stars'/>
                </div>
            </div>
      </div>
      </li>
      <Link to="/profile">
      <li>Mi Perfil</li>
      </Link>
      <Link to="/bandeja-de-entrada">
      <li>Bandeja de entrada</li>
      </Link>
      <li>Mis compras y pedidos</li>
      <li>Artículos publicados</li>
      <li>Favoritos/Guardados</li>
      <Link to="/Ayuda">
        <li>Ajustes</li>
      </Link>
      

    </ul>
 
  </div>
  
  )
}
BarraLateral.defaultProps = {
   
}

export default BarraLateral
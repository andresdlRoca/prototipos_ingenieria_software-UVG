import logo from '../media/UVGente_Logo_white.png' 
import signo_mas_img from '../media/signo_mas_blanco.png' 
import NavigationElements from './NavigationElements'
import { Link } from 'react-router-dom'
const Header = (props) => {
  if(props.navSet=='ON'){
  return (
    <header className='header'>
        <Link to="/">
          <img src={logo} alt='Logo UVGente' id='logo_uvgente'/>
        </Link>
        <Link to="/signup">
          <NavigationElements title='Registrarse'/>
        </Link>  
        <Link to="/login">
          <NavigationElements title='Login'/>
        </Link>      
             
        <NavigationElements title='Vender'/>

        <NavigationElements title='Top Ventas'/>
        <NavigationElements title='Top Servicios'/>
        <NavigationElements title='Productos'/>
        <NavigationElements title='Servicios' last_element = "True"/><div></div>
    </header>
  )
  }
  else
  {
    return (
    <header className='header'>
      <img src={logo} alt='Logo UVGente' className='logo'/>
    </header>
    )
  }
}
Header.defaultProps = {
  navSet: "ON"
}
export default Header
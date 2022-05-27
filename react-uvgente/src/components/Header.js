import logo from '../media/RecaspitaLogo.jpeg' 
import signo_mas_img from '../media/signo_mas_blanco.png' 
import NavigationElements from './NavigationElements'
const Header = (props) => {
  console.log(props.navSet)
  if(props.navSet=='ON'){
  return (
    <header className='header'>
        <img src={logo} alt='Logo UVGente' className='logo'/>
        {/*Este componente es temporal, en lo que averiguo como pasar direccion de imagen como paramentro al cmpnente */}
        <div >
            <h3> General 
            <img src={signo_mas_img} alt='Mas' className='logo'></img>
            </h3>
        </div>       
        <NavigationElements title='Sala '/>
        <NavigationElements title='Comedor'/>
        <NavigationElements title='Cuarto 1'/>
        <NavigationElements title='Cuarto 2' last_element = "True"/><div></div>
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
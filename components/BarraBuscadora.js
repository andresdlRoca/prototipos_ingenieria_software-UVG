import lupa from "../media/lupa.png";
import puntos from '../media/puntos.png';

function BarraBuscadora() {
    return (
        <div className="buscador">
            <img src={lupa} alt="Ye" className="lupa" />
            <label htmlFor="buscador" className="box">Buscar</label>
            <input type="text" name="buscador" className="box buscadorinput"/>
            <img src={puntos} alt="Ye" className="puntosverticales" />
            <label htmlFor="buscador" className="box">Filtros</label>
        </div>
    )
}

BarraBuscadora.props = {

}

export default BarraBuscadora;
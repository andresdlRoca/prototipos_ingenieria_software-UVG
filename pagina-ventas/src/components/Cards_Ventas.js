import libro from '../media/tutorios.jpg'
import dots from '../media/dot.png'

const Cards_Ventas = () => {
    return(
        <div className="uvgente_right_section">

          <h1>Mis articulos en venta</h1>

          <div className="tab_links">

            <a href="#" className="active">Activos (2)</a>
            <a href="#">En pausa (1)</a>
            <a href="#">Completados (2)</a>

          </div>

          <div className="uvgente_box">
            <img src={libro} alt="tutorias" className="tutorios"/>
            <div className="text-center">
              <h2>Q. 40</h2>
              <p>Tutorias Pensamiento cuantitativo</p>
            </div>
            <img src={dots} alt="dots" className="dot"/>
          </div>

          <div className="uvgente_box">
            <img src={libro} alt="tutorias" className="tutorios"/>
            <div className="text-center">
              <h2>Q. 200</h2>
              <p>Libro: Calculo 1</p>
            </div>
            <img src={dots} alt="dots" className="dot"/>
          </div>

        </div>
    )
}

Cards_Ventas.defaultProps = {
   
}

export default Cards_Ventas

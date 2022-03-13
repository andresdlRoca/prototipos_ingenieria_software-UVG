import studentimg from "../media/cat_pp.jpg";
import starimg from "../media/Estrella_amarilla.png";
import book from "../media/bookimg.jpg"

const VentaInfo = () => {
    return (
        <div className="venta">
            <img src={starimg} alt="star" width="35" height="35" className="ventastar"/>
            <div className="imagenesarriba">
                <img src={studentimg} width="60" height="60"/>
                <h3>Juan Manuel</h3>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci,
                minus laboriosam ipsum officia doloremque.
            </p>
            <img src={book} width='250px' height='auto'/>
            <label>Precio: Q.100</label>
        </div>
    )
}

VentaInfo.defaultProps = {

}


export default VentaInfo;
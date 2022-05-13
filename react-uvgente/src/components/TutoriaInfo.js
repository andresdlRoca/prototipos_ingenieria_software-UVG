import starimg from '../media/Estrella_amarilla.png';
import studentimg from '../media/cat_pp.jpg';

const TutoriaInfo = () => {
    return (
        <div className="tutobg">
        <div>
            <img src={studentimg} alt="student image" width="160" height="200"/>
            <h3 >Mejores clases</h3>
            <div className="tutomaterias">
                <label for="">Pensa:</label>
                <progress max="5" value="4"></progress>
                <label for="">4/5</label>            
            </div>
            <div className="tutomaterias">
                <label for="">Progra:</label>
                <progress max="5" value="4"></progress>
                <label for="">4/5</label>
            </div>
        </div>
        <div className="tutoright">
            <img src={starimg} alt="student image" width="35" height="35"/>
            <h2>Pablo Hernandez</h2>
            <h3>Materias:</h3>
            <p>pensamiento cuantitativo, programacion basica.</p>
            <p>Puntuacion media: 4/5</p>
            <p>Cobra: Horas Beca</p>
            <p>Disponibilidad: Solo en linea</p>
        </div>
    </div>
    );
}

TutoriaInfo.defaultProps = {

}

export default TutoriaInfo
import BarraBuscadora from "./BarraBuscadora";
import TutoriaInfo from "./TutoriaInfo";
import VentaInfo from "./VentaInfo";

function BuscadorMain() {
    return (
        <div className='container4buscador'>
            <div className="maincontainer">
                <div className="two_columns_buscador">
                    <div className="mc_column">
                        <VentaInfo/>
                        <div className="space"></div>
                        <VentaInfo/>
                        <div className="space"></div>
                        <VentaInfo/>
                        <div className="space"></div>
                        <VentaInfo/>
                    </div>
                    <div className="mc_column">
                        <TutoriaInfo/>
                        <div className="space"></div>
                        <TutoriaInfo/>
                        <div className="space"></div>
                        <TutoriaInfo/>
                        <div className="space"></div>
                        <TutoriaInfo/>
                        <div className="space"></div>
                        <TutoriaInfo/>
                        <div className="space"></div>
                        <TutoriaInfo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuscadorMain;
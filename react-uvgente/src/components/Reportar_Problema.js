const Reportar_Problema = () => {
    return(
        <div id-="problem_container">
            <div id="titles">
                <div id="report_problem_text">Reportar un problema</div>
                <div id="question_text">¿En que podemos mejorar?</div>
                <div id="scroll_down">Elige un area
                    <div id="triangle"></div>
                </div>
                <div id="details_text">Detalles</div>
                <input type ="text" id="input_problem"></input>
                <button id="problem_btn">Reportar</button>
            </div>
        </div>
    )
}
Reportar_Problema.defaultProps = {
}
export default Reportar_Problema
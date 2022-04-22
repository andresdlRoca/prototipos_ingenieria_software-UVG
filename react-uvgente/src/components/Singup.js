import { Component } from "react";

class Singup extends Component {
  constructor() {
    super();
    this.state = {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
    };
    this.changeText1 = this.changeText1.bind(this);
    this.changeText2 = this.changeText2.bind(this);
    this.changeText3 = this.changeText3.bind(this);
    this.changeText4 = this.changeText4.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  componentDidMount() {
    fetch("/login").then(console.log(":)"));
  }

  changeText1($event) {
    const newValue = $event.target.value;
    this.setState({ text1: newValue });
    console.log(":)");
  }

  changeText2($event) {
    const newValue = $event.target.value;
    this.setState({ text2: newValue });
    console.log(":)");
  }

  changeText3($event) {
    const newValue = $event.target.value;
    this.setState({ text3: newValue });
    console.log(":)");
  }

  changeText4($event) {
    const newValue = $event.target.value;
    this.setState({ text4: newValue });
    console.log(":)");
  }

  enviar($event) {
    $event.preventDefault();

    if (
      this.state.text1 !== "" &&
      this.state.text2 !== "" &&
      this.state.text3 !== "" &&
      this.state.text4 !== ""
    ) {
      let message = JSON.stringify(this.state);
      console.log(message);
      fetch("http://localhost:8080/register", {
        method: "POST",
        mode: "cors",
        body: message,
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("ERROR:", error));
    } else {
      alert("Asegure que los inputs esten bien");
    }
  }

  render() {
    return (
      <div className="App">
        <div class="Logo">
          <div class="email">
            <h2 id="correo">Nombre</h2>
            <input
              id="email"
              type="text"
              value={this.state.text1}
              onChange={this.changeText1}
            ></input>
          </div>
          <div class="email">
            <h2 id="correo">Correo UVG</h2>
            <input
              id="email"
              type="text"
              value={this.state.text2}
              onChange={this.changeText2}
            ></input>
          </div>
          <div class="password">
            <h2 id="contrasena">Contraseña</h2>
            <input
              type="password"
              id="password"
              value={this.state.text3}
              onChange={this.changeText3}
            ></input>
          </div>
          <div class="password">
            <h2 id="contrasena">
              Confirmar <br></br>Contraseña
            </h2>
            <input
              type="password"
              id="password1"
              value={this.state.text4}
              onChange={this.changeText4}
            ></input>
          </div>
          <div class="Enter">
            <button id="Entrada" onClick={this.enviar}>
              Registrate
            </button>
          </div>
          <div class="Olvido">
            <p>¿Ya tienes cuenta?</p>
          </div>
        </div>
        <div class="input">
          <h1>UVGente</h1>
        </div>
        <div class="slogan">
          <h1>
            El lugar para encontrar todo lo que <br></br>necisitas para tu
            educación
          </h1>
        </div>
      </div>
    );
  }
}

export default Singup;

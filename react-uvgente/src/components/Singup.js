const Singup = () => {
    return (
      <div className="App">
        <div class="Logo">
        <div class="email">
            <h2 id="correo">Nombre</h2>
            <input id="email" type="text"></input>
          </div>
          <div class="email">
            <h2 id="correo">Correo UVG</h2>
            <input id="email" type="text"></input>
          </div>
          <div class="password">
            <h2 id="contrasena">Contraseña</h2>
            <input type="password" id="password"></input>
          </div>
          <div class="password">
            <h2 id="contrasena">Confirmar <br>
            </br>Contraseña</h2>
            <input type="password" id="password1"></input>
          </div>
          <div class="Enter">
            <button id="Entrada">Registrate</button>
          </div>
          <div class="Olvido">
            <p>¿Ya tienes cuenta?</p>
          </div>
        </div>
        <div class="input">
          <h1>UVGente</h1>
        </div>
        <div class="slogan">
          <h1>El lugar para encontrar todo lo que <br>
          </br>necisitas para tu educación</h1>
        </div>
      </div>
    );
  };
  
  export default Singup;
  
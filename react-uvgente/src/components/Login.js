const Login = () => {
  return (
    <div className="App">
      <div className="Logo">
        <div className="email">
          <h2 id="correo">Correo UVG</h2>
          <input id="email" type="text"></input>
        </div>
        <div className="password">
          <h2 id="contrasena">Contraseña</h2>
          <input type="password" id="password"></input>
        </div>
        <div className="Enter">
          <button id="Entrada">Iniciar Sesión </button>
        </div>
        <div className="Nuevo">
          <p>¿Aun no estas registrado?</p>
        </div>
        <div className="Olvido">
          <p>¿Olvidaste tu contraseña?</p>
        </div>
      </div>
      <div className="input">
        <h1>UVGente</h1>
      </div>
      <div className="slogan">
        <h1>El lugar para encontrar todo lo que <br>
        </br>necisitas para tu educación</h1>
      </div>
    </div>
  );
};

export default Login;

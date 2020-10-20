const html = (title, data) => {
  return Buffer.from(`
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<style>
  :root {
    --primario: rgb(223, 226, 255);
    --secundario: rgba(25, 128, 255, 0.299);
    --primarioOscuro: rgb(92, 108, 255);
    --fuentePrimaria: 'Arial', Helvetica, sans-serif;
    --fuenteSecundaria: 'Poppins', sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: var(--primario);
    font-family: var(--fuentePrimaria);
  }

  .contenedor {
    max-width: 1100px;
    margin: 0 auto;
  }

  .bg-amarillo {
    background-color: var(--secundario);
  }

  .bg-blanco {
    background-color: #ffffff;
  }

  .barra {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
  }

  /** Botones **/
  .btn {
    font-size: 2rem;
    text-decoration: none;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn-editar {
    color: var(--secundario);
  }

  .btn-borrar {
    color: var(--primario);
  }

  .volver {
    background-color: var(--secundario);
    border-radius: 5px;
    text-align: center;
    color: #000000;
    font-weight: 700;
    font-size: 1.2rem;
    padding: .5rem;
  }


  .sombra {
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .5);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .5);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .5);
    border-radius: 10px;
  }

  h1,
  h2 {
    font-family: var(--fuenteSecundaria);
    text-align: center;
    margin: 0;
  }

  h1 {
    padding: 20px;
    color: white;
  }

  h2 {
    font-size: 2rem;
    color: var(--primario);
  }

  .contenedor-barra {
    background-color: var(--primarioOscuro);
  }

  /** Formulario **/
  form {
    padding: 3rem;
    margin-top: 2rem;
  }

  form legend {
    font-family: var(--fuenteSecundaria);
    font-size: 2rem;
    text-align: center;
  }

  legend span {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    clear: both;
    display: block;
  }

  @media (min-width:768px) {
    .campos {
      display: flex;
      justify-content: space-between;
    }

    .campo {
      flex: 0 0 calc(33.3% - 1rem);
    }
  }

  .campo {
    padding: .5rem 0;
  }

  .campo label {
    font-size: 1.2rem;
  }

  .campo input[type="text"],
  .campo input[type="tel"] {
    width: 100%;
    border: none;
    padding: .5rem;
    height: 3rem;
    margin-top: .5rem;
    font-size: 1.2rem;
  }

  .enviar {
    display: flex;
    justify-content: flex-end;
  }

  .campo input[type="submit"] {
    background-color: #6162F2;
    border: none;
    color: white;
    padding: 1rem 4rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    transition: background-color .5s ease-in-out;
    flex: 1;
  }

  .campo input[type="submit"]:hover {
    cursor: pointer;
    background-color: var(--primarioOscuro);
  }

  @media (min-width:768px) {
    .campo input[type="submit"] {
      flex: 0 0 auto;
    }
  }

  /** Listado de Contactos **/
  .contactos {
    padding: 2rem;
    margin-top: 3rem;
  }

  .contenedor-contactos {
    max-width: 800px;
    margin: 4rem auto 0 auto;
  }

  .total-contactos {
    font-family: var(--fuenteSecundaria);
    margin: 2rem 0;
    text-align: center;
    color: var(--primario);
    font-size: 2rem;
  }

  .total-contactos span {
    font-size: 3rem;
    font-weight: 900;
  }

  .buscador {
    width: 100%;
    height: 4rem;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    margin: 2rem 0;
  }

  .contenedor-tabla {
    overflow: scroll;
  }

  .listado-contactos {
    width: 100%;
    margin-top: 1rem;
    border-collapse: collapse;
  }

  .listado-contactos thead {
    background-color: var(--primario);
    color: #ffffff;
    text-transform: uppercase;
  }

  .listado-contactos thead th {
    padding: 1rem 0;
  }

  .listado-contactos tbody td {
    padding: .5rem;
  }

  .listado-contactos tbody td:nth-child(4) {
    text-align: center;
  }

  .listado-contactos button {
    background-color: transparent !important;
    border: none;
  }

  /** Notificaciones **/
  .notificacion {
    position: fixed;
    top: 1rem;
    right: 1rem;
    padding: 1rem 3rem;
    opacity: 0;
    transition: opacity .5s ease;
  }

  .visible {
    opacity: 1;
  }

  /** Colores de la notificacion**/
  .correcto {
    background-color: rgb(179, 241, 117);
    color: green;
  }

  .error {
    background-color: rgb(238, 148, 166);
    color: rgb(163, 0, 33);
  }
</style>


<body>

  <div class="container-fluid sticky-top" style="background-color: #6162F2;">
    <nav class="navbar navbar-expand-md navbar-dark container" style="background-color: #6162F2;">
      <a class="navbar-brand" href="#">
        <img
          src="https://lh3.googleusercontent.com/proxy/h6TuZEXEXnZXrvP3V_kJHOMFp0aZlphctahPYpIkpQK0DhGlTRqMx6Zn2wiReEvvwz-WcgH5mn0ocqzi-AxyAu3loomGuIGVNw"
          width="100" height="60" class="d-inline-block align-top" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active pr-3">
            <a class="nav-link" href="#">Inicio</a>
          </li>
          <li class="nav-item active pr-3">
            <a class="nav-link" href="#">Nosotros</a>
          </li>
          <li class="nav-item active pr-3">
            <a class="nav-link" href="#">Nuestros Servicios</a>
          </li>
          <li class="nav-item active pr-3">
            <a class="nav-link" href="#">Catálogos de Clientes</a>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Contáctenos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Nuevo Contacto</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="contacts">Lista de Contactos</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
${data}
  <div class="bg-amarillo contenedor sombra">
    <form id="contacto" action="#">
      <legend>Contáctenos <span>Todos los campos son obligatorios</span> </legend>

      <div class="campos">
        <div class="campo">
          <label for="nombre">Nombre:</label>
          <input type="text" placeholder="Ingrese su Nombre" id="nombre">
        </div>
        <div class="campo">
          <label for="apellido">Apellido:</label>
          <input type="text" placeholder="Ingrese su Apellido" id="apellido">
        </div>
        <div class="campo">
          <label for="celular">Celular:</label>
          <input type="text" placeholder="Ingrese su Celular" id="celular">
        </div>

      </div>
      <div class="campos">
        <div class="campo">
          <label for="telefono">Telefono:</label>
          <input type="text" placeholder="Ingrese su Telefono" id="telefono">
        </div>
        <div class="campo">
          <label for="email">Email:</label>
          <input type="text" placeholder="Ingrese su Email" id="email">
        </div>
        <div class="campo">
          <label for="dni">DNI:</label>
          <input type="text" placeholder="Ingrese su DNI" id="dni">
        </div>

      </div>

      <div class="campo enviar">
        <input type="submit" value="Enviar">
      </div>

    </form>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>

</body>

</html>
`);
};

module.exports = html;

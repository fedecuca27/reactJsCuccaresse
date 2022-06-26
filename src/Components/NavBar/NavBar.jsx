import CarWidget from "./CarWidget"
import LogoWidget from "./LogoWidget"
const NavBar = () => {
  return (
    <div className="row">
    <div className="col-md-6">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <LogoWidget/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="linkDos nav-item">
                            <a className="letraHeader nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="linkDos nav-item">
                            <a className="letraHeader nav-link active" aria-current="page" href="html/2servicios.html">Servicios</a>
                        </li>
                        <li className="linkDos nav-item">
                            <a className="letraHeader nav-link active" aria-current="page" href="html/3nosotros.html">Nosotros</a>
                        </li>
                        <li className="linkDos nav-item">
                            <a className="letraHeader nav-link active" aria-current="page" href="html/4galeria.html">Galeria</a>
                        </li>
                        <li className="linkDos nav-item">
                            <a className="letraHeader nav-link active" aria-current="page" href="html/5contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div className="col-md-6 d-flex align-items-center justify-content-end">
        <a href="html/carrito.html" id="botonCarrito"  title="Ir al carrito">
        <button type="button" className="btn btn-danger"> 
        <CarWidget/>
        </button>
        </a>
        <a href="#" id="vaciarCarrito" title="Vaciar carrito">
            <button type="button" className="btn btn-danger">Vaciar Carrito</button>
        </a>
    </div>
  </div>

  )
}

export default NavBar
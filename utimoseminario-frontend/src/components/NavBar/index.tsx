import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <header className="site-header sticky-top py-1">
  <nav className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#" aria-label="produtos">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
    </a>
    <Link to="/">
    <a className="py-2 d-none d-md-inline-block" href="#">Home</a>
    </Link>
    <Link to="/cliente">
    <a className="py-2 d-none d-md-inline-block" href="#">Cliente</a>
    </Link>
    <Link to="/carro">
    <a className="py-2 d-none d-md-inline-block" href="#">Carro</a>
    </Link>
    <a className="py-2 d-none d-md-inline-block" href="#">Sobre</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Ajudar</a>

  </nav>
    </header>
        </div>

    );
}

export default NavBar;
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';




function Navbar() {
  return (
    <Navcontainer className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h2>
          <Link to="/catalogo">Tienda de Auriculares</Link>
        </h2>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/category/Inalambricos">
              Inalámbricos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/category/Gamers">
              Gamers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/category/Runners">
              Runners
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/cart">
              <CartWidget itemCount={0} />
            </NavLink>
          </li>
        </ul>
      </div>
    </Navcontainer>
  );
}





const Navcontainer = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-weight: bold;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 3rem;
    transition: color 0.3s ease;

    &:hover {
      color: grey;
    }
  }

  .navbar-nav .nav-item .nav-link.active {
    color: grey; /* Estilo para el enlace activo */
  }
`;



export default Navbar;


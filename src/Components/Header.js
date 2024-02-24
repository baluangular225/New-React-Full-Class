import { NavLink, Link } from 'react-router-dom';
import "../Components/Header.css";
import logo from '../images/logo.png'

const Header = () =>{

    const NavLinkCSS = ({isActive}) =>{
        return{
          fontWeight: isActive ? 'bold' : 'normal',
          fontSize: isActive ? '16px' : '16px',
          color: isActive ? '#0070ad' : '#33333',
          borderRadius: isActive ? '15px' : '0px'
        }
     }

    return(
               <div>
                  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow p-3">
                        <div class="container">
                            <Link className="navbar-brand" to="/"><img className='logo_cg' src={logo} alt={"logo"}/> </Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                                        <li className="nav-item active">
                                                            <NavLink style={NavLinkCSS} className="nav-link active" to="/">Home</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink style={NavLinkCSS} className="nav-link" to="/about">About</NavLink></li>
                                                            <li className="nav-item">
                                                            <NavLink style={NavLinkCSS} className="nav-link" to="/contact">Contact</NavLink></li>
                                                            <li className="nav-item">
                                                            <NavLink style={NavLinkCSS} className="nav-link" to="/services">Services</NavLink></li>
                                                            <li className="nav-item">
                                                            <NavLink style={NavLinkCSS} className="nav-link" to="/Users">Users</NavLink></li>
                                                            <li className="nav-item">
                                                            <NavLink style={NavLinkCSS} className="nav-link" to="/Users1">Users1</NavLink></li>
                                                        </ul>
                            </div>
                        </div>
                        </nav>
               </div>
    )
}

export default Header;
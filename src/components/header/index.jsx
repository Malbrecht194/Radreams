import { Link } from "react-router-dom"
import "./header.scss"

import headerLogo from "../../assets/logo/headerRadreams.png"

export default function Header() {
    return (
        <div className='header'>
           <div className='header__logo'>
             <img src={headerLogo} alt="Logo RAdreams"/>
             <p className="header__logo__text">Parce que tout commence par un rêve</p>
           </div>
            <div className="structure">
                <div className="header__phone">
                        <p>06 34 10 83 49 - 06 72 89 61 65</p>
                    </div>          
                <nav className='header__nav'>
                    <Link className="header__nav__link" to= '/'>Accueil</Link>
                    <Link className="header__nav__link" to= '/portrait'>Portrait</Link>
                    <Link className="header__nav__link" to='/applications-et-outils'>Applications et Outils</Link>
                    <Link className="header__nav__link" to='/contact'>Contact</Link>
                </nav>
            </div>
        </div>
    )
}
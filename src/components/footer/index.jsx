import { Link } from "react-router-dom"
import "./footer.scss"


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__consultations">
                <h3 className="Gras">Horaires d’ouverture : Consultations sur rendez-vous uniquement</h3>
                <h4>Consultations possibles via WhatsApp, Skype…</h4>
            </div>
            <div className="footer__contact">
                <h2 className="Gras">✉ contact@radreams.com</h2>
                <h4>06 34 10 83 49 / 06 72 89 61 65</h4>
                <h2 className="Gras">16410 Torsac</h2>
            </div>
            <div className="footer__infos">
                <p>RA DREAMS | <Link to="" className="footer__infos__links">Sophrologie</Link> | <Link to="" className="footer__infos__links">Coaching</Link> | <Link to="" className="footer__infos__links">Hypnose</Link> | <Link to="" className="footer__infos__links">Politique de Confidentialité</Link> | <Link to="" className="footer__infos__links">Mentions légales</Link> | Un site réalisé par PEC | ©2022</p>
            </div>
        </footer>
    )
}
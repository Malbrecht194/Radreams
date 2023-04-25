import Form from "../../components/form/index"
import "./contact.scss"

export default function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Charente || Angoulême || Torsac</h1>
                <p className="gras">✉ <span>contact@radreams.com</span><br/>Consultations sur rdv uniquement<br/>06 34 10 83 49 || 06 72 89 61 65</p>
            </div>
            <Form></Form>
        </>
    )
}

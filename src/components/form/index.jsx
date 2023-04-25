import "./form.scss"

export default function Form() {
    return(
        <div className="form">
            <form action="contact@radreams.com" method="get" className="form__container">
                <div className="form__champ">
                    <label for="first-name">Nom : </label>
                    <input className="box" type="text" name="first-name" id="first-name" required></input>
                </div>
                <div className="form__champ">
                    <label for="name">Prénom : </label>
                    <input className="box" type="text" name="name" id="name" required></input>
                </div>
                <div className="form__champ">
                    <label for="adresse e-mail">Adresse e-mail : </label>
                    <input className="box" type="text" name="e-mail" id="e-mail" required></input>
                </div>
                <div className="form__champ">
                    <label for="phone">Téléphone : </label>
                    <input className="box" type="text" name="phone" id="phone" required></input>
                </div>
                <div className="form__champ">
                    <label for="name">Message : </label>
                    <input className="box" type="textarea" name="message" id="message" required></input>
                </div>
                <div className="form__check">
                    <input type="checkbox" id="conditions" name="conditions" required></input>
                    <label for="conditions">J’ai pris connaissance et accepte la présente politique de confidentialité. L’envoi du présent formulaire vaut acceptation.</label>
                </div>
                <div className="form__submit">
                    <input className="form__submit__button" type="submit" value="envoi"></input>
                </div>
            </form>
        </div>
    )
}
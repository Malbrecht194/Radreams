import { useLoaderData } from "react-router-dom"
import Button from "../../components/Button/main"
import "./accueil.scss"

export default function Accueil() {
    const tools = useLoaderData() // loader pour charger les textes des outils de l'acccueil
    return (
        <>
            <Button buttonTitle="Prendre RDV" buttonLink='/contact'/>
        </>
    )
}

export async function loader() {
    return (await import("../../data/accueilOutils.json")).default // chargement au moment ou on l'appel
}
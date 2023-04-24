import { useLoaderData } from "react-router-dom"
import Button from "../../components/Button/main"
import "./accueil.scss"
import Tools from "../../components/tools"

export default function Accueil() {
    const tools = useLoaderData() // loader pour charger les textes des outils de l'acccueil
    return (
        <>
            <section className="toolCards">

                {tools.map((tool, index) => (
                    <Tools key={index} tool={tool} />
                ))}


            </section>
            <Button buttonTitle="Prendre RDV" buttonLink='/contact' />
        </>
    )
}

export async function loader() {
    return (await import("../../data/accueilOutils.json")).default // chargement au moment ou on l'appel
}
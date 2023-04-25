import { useLoaderData } from "react-router-dom"
import Button from "../../components/Button"
import "./accueil.scss"
import Tools from "../../components/tools"
import Banner from "../../components/banner"

export default function Accueil() {
    const tools = useLoaderData() // loader pour charger les textes des outils de l'acccueil
    return (
        <>
            
            <section className="toolCards">
                <Banner bannerTitle="NOS PRINCIPAUX OUTILS" />
                <div className="toolCards__container">
                    {tools.map((tool, index) => (
                        <Tools key={index} tool={tool} />
                    ))}
                </div>
                <Button className='toolsCards__button' buttonTitle="Prendre RDV" buttonLink='/contact' />
            </section>

        </>
    )
}

export async function loader() {
    return (await import("../../data/accueilOutils.json")).default // chargement au moment ou on l'appel
}
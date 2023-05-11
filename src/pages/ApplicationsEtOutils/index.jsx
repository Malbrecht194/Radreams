import { useLoaderData } from "react-router-dom"
import "./applicationsEtOutils.scss"
import Slider from "../../components/slider"
import Questions from "../../components/questions"
import BannerPicture from "../../components/bannerPicture"
import bannerImg from "../../assets/images/transitionImagePotterie.jpeg"

export default function ApplicationsEtOutils() {
    const slideData = useLoaderData()
    const questionaryData = useLoaderData()
    return (
        <>
            <Slider data={slideData} />
            <section className="application">
                <p className="application__text">Domaines d’application des thérapies brèves, hypnose, coaching, sophrologie, pour votre développement et épanouissement personnel et/ou professionnel, améliorer votre quotidien<br></br><br></br>
                    <h3 className="gras aref">Performance</h3>
                    <ul>
                    <li>Développer son potentiel, Mémorisation, Booster ses capacités, Concentration, Préparation mentale…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Peurs et Phobies</h3>
                    <ul>    
                    <li>Dentiste, Aiguilles, Soin,</li>
                    <li>Phobie Sociale, Scolaire,</li>
                    <li>Animaux, Avion, Eau…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Préparer un évènement</h3>
                    <ul>
                    <li>Entretien professionnel, Examen, Concours, Expatriation, Reconversion professionnelle, Compétitions sportives, Accouchement…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Traumatismes</h3>
                    <ul>
                    <li>Détresse, Réaction physique / psychologique, Abandon, Séparation, Deuil, Chocs,</li>
                    <li>Souvenirs répétitifs…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Sommeil</h3>
                    <ul>
                    <li>Qualité du sommeil, Endormissement, Terreurs nocturnes, Cauchemars,</li>
                    <li>Insomnies, Réveils nocturnes</li>
                    <li>Gestion du stress</li>
                    <li>Anxiété, Crise d’angoisse, de panique, Nervosité, Mal-être, Déprime,</li>
                    <li>Burn-out, Bore-out…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Addictions – Sevrage</h3>
                    <ul>
                    <li>Tabac, Alcool, Argent, Jeux,</li>
                    <li>Ecrans, Troubles Sexuels,</li>
                    <li>Dépendance Affective…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Bien-Être et Émotions</h3>
                    <ul>
                    <li>Lâcher-Prise, Confiance en soi,</li>
                    <li>Gestion des émotions,</li>
                    <li>Estime de soi…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Douleurs</h3>
                    <ul>
                    <li>Musculaires, Traumatiques, Sciatique, Chroniques, Aiguës, Inflammatoires,</li>
                    <li>Soins douloureux, Arthrose…</li>
                    </ul>
                </p>
            </section>
            <section className="toolsSection">
                <BannerPicture bannerPicture={bannerImg} bannerPictureTitle='NOS OUTILS'/>
            </section>
            <section className="questionarySection">
                {questionaryData.map((data, index3) => (
                    <section key={index3}>
                        <Questions data={data} />
                    </section>
                ))}
            </section>

        </>
    )
}
export async function loader() {
    return (await import("../../data/slide.json"), await import("../../data/questionary.json")).default // chargement au moment ou on l'appel
}

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

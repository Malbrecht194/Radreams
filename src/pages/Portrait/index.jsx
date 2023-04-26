import BigBanner from "../../components/bigBanner"
import "./portrait.scss"
import portraitImg from "../../assets/images/Bandeau notre histoire.jpg";
import BannerRotated from "../../components/bannerRotated";
import { useLoaderData } from "react-router-dom";
import WorkCard from "../../components/workCard";
import WorkCardReversed from "../../components/workCardReversed";

export default function Portrait() {
    const workData = useLoaderData()
    return (
        <>  
        <BigBanner bigBannerImg={portraitImg} bigBannerAlt='Stylo plume posé sur une lettre écrite à la main'/>
            <section className="presentation">
                <BannerRotated bannerRotatedTitle="VOS PRATICIENS"/>
                <div className="presentation__praticiens">
                    <WorkCard data = { workData[0] }/>
                    <WorkCardReversed data = { workData[1]}/>

                </div>
            </section>
        </>
    )
}

export async function loader() {
    return (await import("../../data/descriptionPortrait.json")).default // chargement au moment ou on l'appel
}

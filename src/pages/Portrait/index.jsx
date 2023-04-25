import BigBanner from "../../components/bigBanner"
import "./portrait.scss"
import portraitImg from "../../assets/images/Bandeau notre histoire.jpg";
import BannerRotated from "../../components/bannerRotated";

export default function Portrait() {
    return (
        <>  
        <BigBanner bigBannerImg={portraitImg} bigBannerAlt='Stylo plume posé sur une lettre écrite à la main'/>
            <section className="presentation">
                <BannerRotated bannerRotatedTitle="VOS PRATICIENS"/>
            </section>
        </>
    )
}

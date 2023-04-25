import "./bannerRotated.scss"


export default function BannerRotated(props) {
    return (
        <div className="banner">
            <div className="banner__container">
                <h2 className="banner__container__title prestage">{props.bannerRotatedTitle}</h2>
            </div>
        </div>
    )
}
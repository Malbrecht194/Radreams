import "./workCard.scss"


export default function WorkCard({ data }) {
    return (
        <>
            <article className="workCard">
                <div className="workCard__pictures">
                    <img className="workCard__pictures__selfie" src={data.selfie} alt={data.alt} />
                    <img className="workCard__pictures__logo" src={data.logo} alt={data.altLogo} />
                    <img className="workCard__pictures__linkedin" src={data.linkedin} alt={data.altLogo2} />
                </div>
                <div className="workCard__description">
                    <h3 className="workCard__description__title gras">{data.id} </h3>
                    <h4 className="gras">{data.title}</h4>
                    <p>{data.content}</p>
                    <p><span className="gras">Domaines d'expertises :</span> {data.domains}</p>
                </div>
            </article>

        </>
    )
}
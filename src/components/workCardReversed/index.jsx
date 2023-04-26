import "./workCardReversed.scss"


export default function WorkCardReversed({ data }) {
    return (
        <>
            <article className="workCardReversed">
                <div className="workCardReversed__pictures">
                    <img className="workCardReversed__pictures__selfie" src={data.selfie} alt={data.alt} />
                    <div className="workCardReversed__pictures__container">
                        <img className="workCardReversed__pictures__container__logo" src={data.logo} alt={data.altLogo} />
                        <img className="workCardReversed__pictures__container__linkedin" src={data.linkedin} alt={data.altLogo2} />
                    </div>
                </div>
                <div className="workCardReversed__description">
                    <div className="workCardReversed__description__title">
                        <h3 className=" gras aref">{data.id} </h3>
                        <h4 className="gras aref">{data.title}</h4>
                    </div>
                    <p className="aref">{data.content}</p>
                    <p className="aref"><span className="gras aref">Domaines d'expertises :</span> {data.domains}</p>
                </div>
            </article>

        </>
    )
}
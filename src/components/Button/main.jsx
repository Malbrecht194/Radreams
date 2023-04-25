import { Link } from "react-router-dom"
import "./button.scss"


export default function Button(props) {
    return (
        <Link className='container' to={props.buttonLink}>
        <button type="button" className="button">
            <p className="button__text prestage">{props.buttonTitle}</p>
        </button>
        </Link>
    )
}
import { Link } from "react-router-dom"
import "./tools.scss"
import Button from "../Button/main"


export default function Tools({tools}) {
    return (
        <article className="toolCard">
            <img src="" alt="" />
            <h3>{tools.title}</h3>
            <p>{tools.content}</p>
            <Button buttonTitle='En savoir plus' buttonLink='/'/>

        </article>
    )
}
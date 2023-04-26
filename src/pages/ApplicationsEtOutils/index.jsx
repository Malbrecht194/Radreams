import "./applicationsEtOutils.scss"
import { useLoaderData } from "react-router-dom"
import Slider from "../../components/slider"

export default function ApplicationsEtOutils() {
    const slideData = useLoaderData()
    return (
        <>
        <Slider data = {slideData}/>  
        </>
    )
}
export async function loader() {
    return (await import("../../data/slide.json")).default // chargement au moment ou on l'appel
}

import { useLoaderData } from "react-router-dom"
import "./applicationsEtOutils.scss"
import { useLoaderData } from "react-router-dom"
import Slider from "../../components/slider"
import Questions from "../../components/questions"

export default function ApplicationsEtOutils() {
    const slideData = useLoaderData()
    const questionaryData = useLoaderData()
    return (
        <>
            <Slider data={slideData} />
            {questionaryData.map((data, index3) => (
                <section key={index3}>
                    <Questions data={data} />
                </section>
            ))}
        </>
    )
}
export async function loader() {
    return (await import("../../data/slide.json")).default // chargement au moment ou on l'appel
}

export async function loader1() {
    return (await import("../../data/questionary.json")).default // chargement au moment ou on l'appel
}

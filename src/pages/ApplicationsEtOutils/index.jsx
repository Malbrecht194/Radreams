import { useLoaderData } from "react-router-dom"
import "./applicationsEtOutils.scss"
import Questions from "../../components/questions"

export default function ApplicationsEtOutils() {
    const questionaryData = useLoaderData()
    return (
        <>
            {questionaryData.map((data, index3) => (
                <section key={index3}>
                    <Questions data={data} />
                </section>
            ))}
        </>
    )
}
export async function loader1() {
    return (await import("../../data/questionary.json")).default // chargement au moment ou on l'appel
}

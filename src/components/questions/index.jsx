import "./questions.scss";

export default function Questions({ data }) {
    return (
        <article>
            <h2 className="questionary__title">{data.id}</h2>
            {data.questions.map((question, index0 )=> (
                <div className="questionary__question" key={index0}>
                    <h3 className="questionary__question__title" >{question.title}</h3>
                    <p>{question.content[0]}<br/><br/>{question.content[1]}</p>
                </div>
            ))}
        </article>
    );
}

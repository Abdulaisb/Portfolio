import Debutant from "./Debutant"
import Insight from "./Insight"
import Parser from "./Parser"
import Tracer from "./Tracer"
import Revs from "./Revs"

function Projects() {
    return (
        <div className="flex flex-col items-center pt-10 pb-24">
            <div className="text-5xl h-32 "> Project Showcase</div>
                <Debutant/>
                <Tracer/>
                <Insight/>
                <Parser/>
                <Revs/>
            </div>
    )
} 

export default Projects
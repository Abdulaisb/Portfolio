import Teaching from './Teaching'
import Turtle from './Turtle'
import Teamup from './Teamup'
import Exveritas from './Exveritas'
function Experience() {

    return (
        <div className="flex flex-col items-center pt-10 pb-24">
            <div className="text-5xl h-32 ">Experience</div>
            <Teaching/>
            <Turtle/>
            <Teamup/>
            <Exveritas/>
        </div>
    )
}

export default Experience
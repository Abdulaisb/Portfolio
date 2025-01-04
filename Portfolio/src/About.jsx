import me from "./assets/1.jpg"


function About() {
    return (
        <div className="w-full flex flex-col items-center pb-20">
            <div className="h-pb min-w-[50rem] max-w-[80rem] flex py-10">
                <div className="basis-1/2 flex flex-col p-8">
                    <div className="text-5xl mb-6">About Me</div>
                    <div>
                        I'm a Senior at Texas A&M pursuing a Bachelor's in Computer Engineering with a minor in Mathematics.
                        My passion lies in developing software that will leave a positive mark on the world.
                        Towards that end, I'm always looking to learn something new and improve my skillset.
                    </div>
                    <div className="text-3xl mt-4 mb-2">Interests</div>
                    <ul className="list-disc pl-6">
                        <li><strong>Full Stack Development:</strong> Creating products that satisfy all of a user's needs 
                            from data and functionality to visual appeal and ease-of-use </li>
                        <li><strong>Robotics:</strong> Bridging software and hardware in order to actuate algorithms on the real world </li>
                        <li><strong>Computer Graphics and Animation:</strong> Understanding and Implementing the mechanisms
                            behind our favorite games and movies </li>
                    </ul>
                </div>
                <div className="basis-1/2 flex justify-center items-center">
                        <img src = {me} className="h-[30rem] rounded"/>
                </div>
            </div>
        </div>
    )
}

export default About


function Turtle() {
    
    return (
        <div className="hover:bg-zinc-700 flex flex-col min-w-[50rem] max-w-[80rem] w-3/4 border-2 border-white px-4 rounded-xl bg-zinc-800 mb-10">
            <div className="w-full border-b-2 border-white flex mb-2 py-4">
                <div className="basis-3/4 text-3xl font-semibold ">Texas A&M Turtle Robotics Club</div>
                <div className="basis-1/4 text-lg flex items-center justify-end">January 2023 - Present</div>
            </div>
            <div className="text-2xl font-semibold">Developer</div>
            <ul className="list-disc px-4 my-4">
                <li>Implemented circuitry and developed a software interface in order to control relays, lights, motors, and sensors of an autonomous system</li>
                <li>Developed a React application and web server to allow remote interfacing with Raspberry Pi enabling long-distance interaction and status updates for clients</li>
                <li>Published a mobile-compatible website to display current projects and entice new members</li>
                <li>Wrote a C++ program to interface with dual motors given remote instructions in order to facilitate smooth, responsive control</li>
                <li>Designed and tested various potential magnet configurations with the intention of inciting the controlled movement of a magnetic object</li>
            </ul>

        </div>
    )
}

export default Turtle
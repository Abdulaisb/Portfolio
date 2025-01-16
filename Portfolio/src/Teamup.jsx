

function Teamup() {
    return (
        <div className="hover:bg-zinc-700 flex flex-col min-w-[50rem] max-w-[80rem] w-3/4 border-2 border-white px-4 rounded-xl bg-zinc-800 mb-10">
            <div className="w-full border-b-2 border-white flex mb-2 py-4">
                <div className="basis-3/4 text-3xl font-semibold ">Team Up</div>
                <div className="basis-1/4 text-lg flex items-center justify-end">June 2023 - August 2023</div>
            </div>
            <div className="text-2xl font-semibold">Web Developer</div>
            <ul className="list-disc px-4 my-4">
                <li>Contributed to a Ruby on Rails application that allows for peer-to-peer student clothing donations</li>
                <li>Designed and implemented front-end components with MVC architecture to interact with database</li>
                <li>Collaborated with team to deal with merge conflicts while ensuring performance</li>
            </ul>

        </div>
    )
}

export default Teamup
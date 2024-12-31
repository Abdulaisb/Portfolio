import github from './assets/github.svg'
import parser_img from './assets/parser.png'
import python from './assets/python.svg'
import ardupilot from './assets/ardupilot.svg'
import mp from './assets/mp.ico'

function Parser() {
        const icon_style = {width: '2.5rem', height: '2.5rem'};
        const ap_style = {width: '10rem', height: '2.5rem'};
        const img_style = {width: '30rem'}
            
        return (
            <div className="mb-10 h-pb border-2 border-white w-3/4 flex flex-row px-24 py-6 bg-zinc-800 rounded-xl">
                <div className="flex flex-col w-1/2">
                    <div className="font-bold text-4xl">Drone Command Parser</div>
                    <div className= ' mt-4 h-12 flex flex-row items-center '>
                        <div className='text-xl'>Made with: </div>
                        <div className='ml-4'><img src = {python} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {ardupilot} style = {ap_style}/></div>
                        <div className='ml-4'><img src = {mp} style = {icon_style}/></div>
                        </div>
                    <div className='ml-6 my-6'>
                        <ul className='list-disc '>
                            <li>Developed modular scripting solutions to automate drone mission design, replacing manual GUI processes with precision and efficiency</li>
                            <li>Engineered waypoint-based drone missions by analyzing and implementing the ArduPilot mission file format, including takeoff, waypoint navigation, and landing commands</li>
                            <li>Authored custom latitude-longitude generation algorithms to dynamically compute drone navigation paths using geographic coordinate transformations</li>
                        </ul>
                    </div>
                    <a target = '_blank' href = 'https://github.com/Abdulaisb/Drone' className="w-32 border-2 border-white bg-zinc-700 rounded-3xl p-2 flex flex-row items-center hover:bg-zinc-500 cursor-pointer">
                        <div className='mx-2 font-bold'>GitHub</div>
                        <div><img src = {github} style={icon_style}/></div>
                    </a>
                </div>
                <div className="w-1/2 flex items-center">
                    <img className = "ml-10 border-2 border-white rounded-xl" src = {parser_img} style = {img_style}/>
                </div>
            </div>
        );
}

export default Parser
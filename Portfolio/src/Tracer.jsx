import github from './assets/github.svg'
import tracer_img from './assets/night_sky.jpg'

import cpp from './assets/c++.svg'
import c from './assets/c.svg'
import vs from './assets/vs.svg'
import cmake from './assets/cmake.svg'


function Tracer() {
        const icon_style = {'width': '2.5rem', height: '2.5rem', minWidth: '2.5rem'};
        const img_style = {width: '30rem'}
            
        return (
            <div className="overflow-auto mb-10 h-pb border-2 min-w-[50rem] max-w-[80rem] border-white w-3/4 flex flex-row px-24 py-6 bg-zinc-800 rounded-xl">
                <div className="flex flex-col w-1/2">
                    <div className="font-bold text-4xl">Ray Tracer</div>
                    <div className= ' mt-4 h-12 flex flex-row items-center '>
                        <div className='text-xl'>Made with: </div>
                        <div className='ml-4'><img src = {cpp} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {c} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {cmake} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {vs} style = {icon_style}/></div>
                    </div>
                    <div className='ml-6 my-6'>
                        <ul className='list-disc '>
                            <li>Developed a fully functional ray tracer with recursive reflections, shadow detection, and an object-oriented architecture</li>
                            <li>Engineered collision detection algorithms to render scenes with thousands of individual components</li>
                            <li>Implemented mesh file parsing to integrate complex 3D objects into scenes seamlessly</li>
                            <li>Currently working to implement Multithreading and Anti Aliasing</li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 flex items-center">
                    <img className = "ml-10 border-2 border-white rounded-xl" src = {tracer_img} style = {img_style}/>
                </div>
            </div>
        );
}

export default Tracer
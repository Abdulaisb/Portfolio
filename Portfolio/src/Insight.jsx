import reactLogo from './assets/react.svg'
import google_cloud from './assets/google_cloud.svg'
import tailwind from './assets/tailwind.svg'
import github from './assets/github.svg'
import insight_img from './assets/insight.png'
import gpt from './assets/gpt.svg'
import psql from './assets/psql.svg'


function Insight() {
        const icon_style = {'width': '2.5rem', height: '2.5rem', minWidth: '2.5rem'};
        const img_style = {width: '30rem'}
            
        return (
            <div className=" overflow-auto mb-10 h-pb min-w-[50rem] max-w-[80rem] border-2 border-white w-3/4 flex flex-row px-24 py-6 bg-zinc-800 rounded-xl">
                <div className="flex flex-col w-1/2">
                    <div className="font-bold text-4xl">Material Insight</div>
                    <div className= ' mt-4 h-12 flex flex-row items-center '>
                        <div className='text-xl'>Made with: </div>
                        <div className='ml-4'><img src = {reactLogo} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {tailwind} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {gpt} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {psql} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {google_cloud} style = {icon_style}/></div>
                    </div>
                    <div className='ml-6 my-6'>
                        <ul className='list-disc '>
                            <li>Created and deployed a full stack application on a Google Cloud VM complete with a PSQL database, an Express API, and Frontend React Application</li>
                            <li>Utilized OpenAI GPT-4 API to dynamically fetch, process, and validate alloy property information and stress-strain data, developing knowledge base</li>
                            <li>Efficiently processed information by implementing a query tracking system and predicting request plausibility by leveraging AI</li>
                        </ul>
                    </div>
                    <a target = '_blank' href = 'https://github.com/Abdulaisb/Metal_Aalloy' className="w-32 border-2 border-white bg-zinc-700 rounded-3xl p-2 flex flex-row items-center hover:bg-zinc-500 cursor-pointer">
                        <div className='mx-2 font-bold'>GitHub</div>
                        <div><img src = {github} style={icon_style}/></div>
                    </a>
                </div>
                <div className="w-1/2 flex items-center">
                    <img className = "ml-10 border-2 border-white rounded-xl" src = {insight_img} style = {img_style}/>
                </div>
            </div>
        );
}

export default Insight
import reactLogo from './assets/react.svg'
import python from './assets/python.svg'
import mongo from './assets/mongo.svg'
import mongoose from './assets/mongoose.svg'
import google_cloud from './assets/google_cloud.svg'
import tailwind from './assets/tailwind.svg'
import github from './assets/github.svg'
import debutant_img from './assets/debutant.png'


function Debutant() {

    const icon_style = {'width': '2.5rem', height: '2.5rem', minWidth: '2.5rem'};
    const img_style = {width: '30rem'}
    
    return (
        <div className="mb-10 h-pb min-w-[50rem] max-w-[80rem] border-2 border-white w-3/4 flex flex-row px-24 py-6 bg-zinc-800 rounded-xl overflow-auto">
            <div className="flex flex-col w-1/2">
                <div className="font-bold text-4xl">Debutant</div>
                <div className= ' mt-4 h-12 flex flex-row items-center '>
                    <div className='text-xl min-w-g'>Made with: </div>
                    <div className='ml-4 min-w-12'><img src = {reactLogo} style = {icon_style}/></div>
                    <div className='ml-4'><img src = {tailwind} style = {icon_style}/></div>
                    <div className='ml-4'><img src = {python} style = {icon_style}/></div>
                    <div className='ml-4'><img src = {mongo} style = {icon_style}/></div>
                    <div className='ml-4'><img src = {mongoose} style = {icon_style}/></div>
                    <div className='ml-4'><img src = {google_cloud} style = {icon_style}/></div>
                </div>
                <div className='ml-6 my-6'>
                    <ul className='list-disc'>
                        <li>Deployed a publicly hosted full-stack language-learning platform with 30+ users</li>
                        <li>Built a web-scraper to populate MongoDB database with hundreds of international entries</li>
                        <li>Leveraged Google Cloud Platform to translate thousands of sentences to populate a library of content</li>
                        <li>Established a Rest API with Express JS to authenticate users, store user data, and serve content</li>
                        <li>Employed Tailwind CSS and ReactJS to produce an animated, interactive interface</li>
                    </ul>
                </div>
                <a target = '_blank' href = 'https://github.com/Abdulaisb/LangueFacile' className="w-32 border-2 border-white bg-zinc-700 rounded-3xl p-2 flex flex-row items-center hover:bg-zinc-500 cursor-pointer">
                    <div className='mx-2 font-bold'>GitHub</div>
                    <div><img src = {github} style={icon_style}/></div>
                </a>
            </div>
            <div className="w-1/2 flex items-center">
                <img className = "ml-10 border-2 border-white rounded-xl" src = {debutant_img} style = {img_style}/>
            </div>
        </div>
    );
}

export default Debutant
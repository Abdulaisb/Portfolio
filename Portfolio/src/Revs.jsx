import reactLogo from './assets/react.svg'
import github from './assets/github.svg'
import insight_img from './assets/revs.png'
import gpt from './assets/gpt.svg'
import psql from './assets/psql.svg'
import java from './assets/java.svg'
import bootstrap from './assets/bootstrap.svg'


function Revs() {
        const icon_style = {'width': '2.5rem', height: '2.5rem', minWidth: '2.5rem'};
        const img_style = {width: '30rem'}
            
        return (
            <div className="overflow-auto mb-10 h-pb border-2 min-w-[50rem] max-w-[80rem] border-white w-3/4 flex flex-row px-24 py-6 bg-zinc-800 rounded-xl">
                <div className="flex flex-col w-1/2">
                    <div className="font-bold text-4xl">Rev's Point of Sale</div>
                    <div className= ' mt-4 h-12 flex flex-row items-center '>
                        <div className='text-xl'>Made with: </div>
                        <div className='ml-4'><img src = {java} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {reactLogo} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {bootstrap} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {psql} style = {icon_style}/></div>
                        <div className='ml-4'><img src = {github} style = {icon_style}/></div>
                    </div>
                    <div className='ml-6 my-6'>
                        <ul className='list-disc '>
                            <li>Worked with Python to migrate $100,000 worth of sales data from csv to a Postgres relational database</li>
                            <li>Implemented a full stack Java application to allow cashiers to take orders and give managers the ability to perform administrative task</li>
                            <li>Designed a Rest API using Express JS to serve PostgreSQL database data to a customer-facing React Applications</li>
                            <li>Collaborated with team members to resolve merge conflicts, ensuring timely deployment and performance</li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 flex items-center">
                    <img className = "ml-10 border-2 border-white rounded-xl" src = {insight_img} style = {img_style}/>
                </div>
            </div>
        );
}

export default Revs
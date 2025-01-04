import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

function Navbar() {
    const icon_style = {width: '2.5rem', height: '2.5rem'};
    const btnStyle = 'rounded-2xl flex justify-center w-1/4 h-full items-center font-bold hover:bg-zinc-600 cursor-pointer';
    return (
        <div className='r-b-lg opacity-70 sticky top-0 h-16 w-full flex flex-row items-center bg-zinc-800'>
            <div className='w-1/5 flex justify-center text-2xl font-bold'>Abdulai Bah</div>
            <div className='w-3/5 flex flex-row justify-between px-48 h-full min-w-40'>
                <div className = {btnStyle}>Home</div>
                <div className = {btnStyle}>About Me</div>
                <div className = {btnStyle}>Projects</div>
                <div className = {btnStyle}>Experience</div>
            </div>
            <div className='w-1/5 flex flex-row justify-center'>
                <a className = "bg-zinc-500 rounded" href = "https://github.com/Abdulaisb" target='_blank'>
                    <img src = {github} style={icon_style}/> 
                </a>
                <a className='ml-4' href = "https://www.linkedin.com/in/abdulaisbah/" target='_blank'>
                    <img src = {linkedin} style={icon_style} />
                </a>
            </div>
        </div>
    )

}

export default Navbar
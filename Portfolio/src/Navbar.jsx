import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Navbar() {
    const btnStyle = 'rounded-2xl flex justify-center w-1/4 h-full items-center font-bold hover:bg-zinc-600 cursor-pointer';
    return (
        <div className='r-b-lg opacity-70 sticky top-0 h-16 w-full flex flex-row items-center border-white border-b-0 bg-zinc-800'>
            <div className='w-1/5 flex justify-center text-2xl font-bold'>Abdulai Bah</div>
            <div className='w-3/5 flex flex-row justify-between px-48 h-full'>
                <div className = {btnStyle}>Home</div>
                <div className = {btnStyle}>Projects</div>
                <div className = {btnStyle}>Experience</div>
                <div className = {btnStyle}>End</div>
            </div>
            <div className='w-1/5 flex flex-row justify-center'>
                <div><img src = {viteLogo}/></div>
                <div><img src = {reactLogo}/></div>
            </div>
        </div>
    )

}

export default Navbar
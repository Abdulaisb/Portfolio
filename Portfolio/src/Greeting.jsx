import reactLogo from './assets/react.svg'


function Greeting() {
    return (
        <div className="h-screen">
            <div className="h-screen bg-[url('./assets/Night_Sky.webp')] pt-32 flex flex-col items-center">
                <div>
                    <div className='font-semibold text-5xl'>Hello, I'm Abdulai</div>
                    <div className='h-32 w-1/2 text-xl mt-6'>
                        I'm a Computer Engineer interested in Full Stack Development and Systems of Electronics.
                        In my freetime I enjoy working out and trying my hand at foreign languages.
                    </div>
                </div>
                <div className='border-white border-2 rounded-full p-6 mt-10'>
                    <img src = {reactLogo} className='h-32'/>
                </div>
            </div>
        </div>
    )
}

export default Greeting
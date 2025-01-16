import moon from './assets/moon3.svg';
import pic from './assets/night_sky.jpg';
import Stars from './Stars';

const img = false;
function Greeting() {
    return (
        <div className="h-screen relative" id="home">
            {/* Background Image */}
            {img ? 
            <img src={pic} className="absolute inset-0 w-full h-full object-cover z-0" alt="Background" />
            :
            <Stars/>
            }
            {/* Content */}
            <div className="relative h-full w-full flex flex-col items-center justify-center text-center z-10">
                <div className='w-full flex flex-col items-center'>
                    <div className="font-semibold text-5xl">Hi, I'm Abdulai</div>
                    <div className="h-32 w-1/2 text-3xl mt-6">
                        Welcome to my Portfolio
                    </div>
                </div>

                {!img && 
                    <div className=" rounded-full p-10 bg-radial-light">
                        <img src={moon} className=""
                            style = {{width: '200px'}}
                        />
                    </div>
                }
                
            </div>
        </div>
    );
}

export default Greeting;

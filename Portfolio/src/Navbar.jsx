import { Link } from 'react-scroll'; // Correct import
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';

function Navbar() {
    const iconStyle = { width: '2.5rem', height: '2.5rem' };
    const btnStyle = 'rounded-lg min-w-32 flex justify-center w-1/4 h-full items-center font-bold hover:bg-zinc-600 cursor-pointer';

    return (
        <div className="r-b-lg opacity-70 sticky top-0 h-16 w-full flex flex-row items-center bg-zinc-800">
            <div className="w-1/5 flex justify-center text-2xl font-bold">Abdulai Bah</div>
            <div className="w-3/5 flex flex-row justify-between px-48 h-full min-w-40">
                <Link to="home" spy={true} smooth={true} offset={-50} duration={750} className={btnStyle}>
                    Home
                </Link>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={750} className={btnStyle}>
                    About Me
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={750} className={btnStyle}>
                    Projects
                </Link>
                <Link to="experience" spy={true} smooth={true} offset={-50} duration={750} className={btnStyle}>
                    Experience
                </Link>
            </div>
            <div className="w-1/5 min-w-32 flex flex-row justify-center">
                <a className="bg-zinc-500 rounded" href="https://github.com/Abdulaisb" target="_blank" rel="noopener noreferrer">
                    <img src={github} style={iconStyle} alt="GitHub" />
                </a>
                <a className="ml-4" href="https://www.linkedin.com/in/abdulaisbah/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} style={iconStyle} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;

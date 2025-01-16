import { useState, useEffect } from "react";
import star_pic from './assets/star.svg';


export default function Star({xPos = -100, yPos = -100}) {
    const [props,setProps] = useState({});

    const gen_props = () => {
        let x = xPos
        let y = yPos
        if (xPos < 0) {
            x = Math.random()*80 + 10;
            while (x < 60 && x > 40) {
                x = Math.random()*80 + 10;
            }
        } 
        if (yPos < 0) {
            y = Math.random()*40;
        }
        let d = Math.random()*5 + 0.25;
        let w = Math.random()*40 + 70;
        const new_s = {
            x : x, y : y, d : d, w : w
        };
        setProps(new_s)
    }
    useEffect(() => {
            gen_props();
        },[]);
        
    return (
        <div className='rounded-full bg-radial-dark p-6 animate-star-twinkle opacity-0' style = {{
            left: `${props.x}%`,
            top: `${props.y}%`,
            position: 'absolute',
            animationDelay: `${props.d}s`
        }}>
        <img src = {star_pic}
            style = {{
                width: '80px',
            }}
        /> 
        </div>
    )

}
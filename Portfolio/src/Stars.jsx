import { useState, useEffect } from 'react';
import Star from './Star';

export default function Stars() {
    
    return (
        <div>
            <Star xPos = {10} yPos = {10}/>
            <Star xPos = {20} yPos = {20}/>
            <Star xPos = {15} yPos = {58}/>
            <Star xPos = {83} yPos = {24}/>
            <Star xPos = {30} yPos = {60}/>
            <Star xPos = {72} yPos = {50}/>
            <Star xPos = {66} yPos = {10}/>
            <Star xPos = {60} yPos = {30}/>
        </div>
    )
}

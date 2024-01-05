"use client"

import React from 'react'
import Particles from 'react-tsparticles';
import { loadSnowPreset } from 'tsparticles-preset-snow';
import { snowFallSmall, snowFall, pattern1, pattern2 } from './patterns';
import './particles.css'

function ParticlesComponent({ text }) {
    const options = [pattern1, snowFallSmall, pattern1, snowFall]

    const init = (main) => {
        loadSnowPreset(main);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <Particles options={options} init={init} className='-z-1' />
            <h1 className=' text-white md:text-6xl text-3xl font-bold'>{text}</h1>
        </div>
    )
}

export default ParticlesComponent
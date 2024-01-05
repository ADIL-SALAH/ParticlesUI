"use client"

import ParticlesComponent from './components/Particles'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <ParticlesComponent text={'HELLO WORLD'} />
      <div className='h-screen flex justify-center items-center bg-black rounded-t-full rounded-b-full'>
        <h1 className=' text-center text-white font-bold md:text-6xl text-3xl '>ITS BLACK</h1>
      </div>
      <div className='h-screen flex justify-center items-center   '>
        <h1 className=' text-center text-white font-bold md:text-6xl text-3xl '>ITS PARTICLES</h1>
      </div>
      <div className='h-screen flex justify-center items-center bg-white rounded-t-full rounded-b-3xl'>
        <h1 className=' text-center text-black font-bold md:text-6xl text-3xl '>ITS WHITE</h1>
      </div>
      <div className='h-screen flex justify-center items-center rounded-t-[5%]'>
        <h1 className=' text-center text-white font-bold md:text-6xl text-3xl '>AGAIN PARTICLES</h1>
      </div>
      <div className='h-screen flex justify-center items-center bg-gray-600  rounded-b-full '>
        <h1 className=' text-center text-white font-bold md:text-6xl text-3xl '>ITS GRAY</h1>
      </div>
      <div className='h-screen flex justify-center items-center rounded-t-[5%] '>
        <h1 className=' text-center text-white font-bold md:text-6xl text-3xl '>THE END</h1>
      </div>

    </div>
  )
}

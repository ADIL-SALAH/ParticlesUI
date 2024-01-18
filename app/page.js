"use client"

import ParticlesComponent from './components/Particles'
import { motion } from 'framer-motion'
import { scaleViewAnimation, slideFromLeft, slideFromRight, zoomOutAnimation } from './components/animations'


export default function Home() {
  return (
    <div className='overflow-hidden'>
      <ParticlesComponent text={'HELLO WORLD'} />
      <motion.div className='h-screen flex justify-center items-center bg-black rounded-b-full mt-5'
        variants={scaleViewAnimation}
        initial="hide"
        whileInView={"show"}
        exit={"hide"}
      >
        <h1 className=' text-center text-white font-bold md:text-6xl text-3xl '>ITS BLACK</h1>
      </motion.div>
      <motion.div className='h-screen flex justify-center items-center'

      >
        <motion.h1 className=' text-center text-white font-bold md:text-6xl text-3xl '
          variants={zoomOutAnimation}
          initial="hide"
          whileInView={"show"}
          exit={"hide"}
        >ITS PARTICLES</motion.h1>
      </motion.div>
      <motion.div className='h-screen flex justify-center items-center bg-white rounded-t-full rounded-b-3xl'
        variants={scaleViewAnimation}
        initial="hide"
        whileInView={"show"}
        exit={"hide"}
      >
        <h1 className=' text-center text-black font-bold md:text-6xl text-3xl '>ITS WHITE</h1>
      </motion.div>
      <motion.div className='h-screen flex justify-center items-center rounded-t-[5%]'

      >
        <motion.h1 className=' text-center text-white font-bold md:text-6xl text-3xl '
          variants={slideFromRight}
          initial="hide"
          whileInView={"show"}
          exit={"hide"}
        >AGAIN PARTICLES</motion.h1>
      </motion.div>
      <motion.div className='h-screen flex justify-center items-center bg-gray-600  rounded-b-full '
        variants={scaleViewAnimation}
        initial="hide"
        whileInView={"show"}
        exit={"hide"}
      >
        <h1 className=' text-center text-white font-bold md:text-6xl text-3xl '>ITS GRAY</h1>
      </motion.div>
      <motion.div className='h-screen flex justify-center items-center rounded-t-[5%] '

      >
        <motion.h1 className=' text-center text-white font-bold md:text-6xl text-3xl '
          variants={slideFromRight}
          initial="hide"
          whileInView={"show"}
          exit={"hide"}
        >THE END</motion.h1>
      </motion.div>

    </div>
  )
}

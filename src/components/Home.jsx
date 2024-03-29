import React from 'react'
import { Link } from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#08192f] w-full h-screen'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 pt-16 flex flex-col justify-center h-full'>
            <p className='text-yellow-500'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Donald Jeoffrey</h1>
            <h2 className='text-4xl sm:text7xl font-bold text-[#8892b0]'>Frontend Developer | UI/UX Designer | Marketing Strategist</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Frontend developer by day, UI/UX designer by night, and marketing strategist in my dreams (or nightmares, depending on the day). I'm like a mad scientist, but for websites. I mix code, design, and strategy to create digital potions that turn visitors into loyal customers. When I'm not experimenting with pixels or optimizing conversion rates, you can find me binge-watching Netflix and pretending it's market research.
            </p>
        <div>
            <Link to="work" smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500'>
                  View Projects 
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                  </span>
              </button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Home
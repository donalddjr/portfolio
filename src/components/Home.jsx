import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#08192f] w-full h-screen'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-yellow-500'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Donald Jeoffrey</h1>
            <h2 className='text-4xl sm:text7xl font-bold text-[#8892b0]'>I'm a frontend Developer, UI/UX Designer, Marketing Strategist</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>As a frontend developer, UI-UX designer, and marketing strategist, I possess a unique blend of technical, creative, and analytical skills. I am proficient in programming languages such as HTML, CSS, and JavaScript, which allows me to create visually appealing and interactive user interfaces that enhance the overall user experience. My deep understanding of user behavior and the psychology behind it enables me to design interfaces that are intuitive, easy to navigate, and visually stunning. In addition, my knowledge of various marketing techniques and platforms helps me create marketing campaigns that effectively target and engage specific audiences, ultimately driving revenue for my clients.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r from-orange-600 via-yellow-500 to-yellow-300 hover:border-white'>
                View Projects 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>About</p>
                </div>
                <div></div>
            </div>

                <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            What I Like to do.
                        </p>
                    </div>
                    <div>
                        <p>
                        As a frontend developer, UI-UX designer, and marketing strategist, I possess a unique blend of technical, creative, and analytical skills.I am proficient in programming languages such as HTML, CSS, and JavaScript, which allows me to create visually appealing and interactive user interfaces that enhance the overall user experience. My deep understanding of user behavior and the psychology behind it enables me to design interfaces that are intuitive, easy to navigate, and visually stunning. In addition, my knowledge of various marketing techniques and platforms helps me create marketing campaigns that effectively target and engage specific audiences, ultimately driving revenue for my clients.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
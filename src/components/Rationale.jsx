import React from 'react'
import { Link } from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'




const Rationale = (props) => {
  return (
    <div name='rationale' className='bg-[#08192f] w-full h-screen'>

    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>THIS IS THE RATIONALE</h1>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        {props.decription}
        </p>
        <p>
            This is my paragraph
        </p>
    </div>
</div>
  )
}

export default Rationale
import React from 'react'
import Navbar from './Navbar'

import dashboard from '../assets/projects/dashboard.jpeg'
import communityGalleryImg from '../assets/projects/communityGalleryImg.jpeg'
import cssGridFLexbox from '../assets/projects/css-grid-flexbox.jpeg'
import exploreElkPoint from '../assets/projects/exploreElkPoint.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import cssMobileSmall from '../assets/projects/cssLayout/cSSmobileSmall.png'
import cssMobileMedium from '../assets/projects/cssLayout/cSSmobileMedium.png'
import cssMobileLarge from '../assets/projects/cssLayout/cSSmobileLarge.png'




const RationaleGridLayout = () => {
  
  return (
    <div name='rationaleGridLayout' className='rationaleGridLayout w-full md:h-screen bg-[#08192f] text-gray-300'>
    <Navbar />
    <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline  text-gray-300'>Dimensional Layout Design</p>
            <p className='py-6'></p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-4'>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Role</h2>
            <p className='m-4'> As a web designer, my role was to design and layout the content of a webpage based on a wireframe and screenshots. Through this project, I learned how to use different layout modes and techniques to create a visually appealing and responsive design.</p>
            <div className='max-w-[150px] flex justify-between'>
              <img className='m-auto p-2' src={cssMobileSmall} alt="" />
              <img className='m-auto p-2' src={cssMobileMedium} alt="" />
              <img className='m-auto p-2' src={cssMobileLarge} alt="" />

            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Description</h2>
            <p className='m-4'>The goal of this project was to create a dimensional layout for a webpage using CSS Grid, Flexbox, Multi-columns, and Writing Mode. The webpage layout needed to match the provided wireframe and screenshots. I started by setting up the grid container to take up the full height of the browser, which allowed for a responsive design. I used explicit columns and rows to set up the overall layout of the page. Then, I used Flexbox to align the content inside the grid container, Multi-columns to split the text into multiple columns, and Writing Mode to create vertical text. I also optimized the images to fit the layout and used appropriate line-heights to create spacing for the text.</p>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Tools</h2>
            <p className='m-4'>I used HTML and CSS to create the dimensional layout design. CSS Grid, Flexbox, Multi-columns, and Writing Mode were the main layout modes and techniques used to create the design.</p>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Accomplishments</h2>
            <p className='m-4'>Through this project, I was able to develop my skills in using different layout modes and techniques to create visually appealing and responsive designs. I also learned how to optimize images for web use and create appropriate line-heights for text. The end result was a dimensional layout design that closely matched the provided wireframe and screenshots.</p>
          </div>

        </div>

    </div>
</div>
  )
}

export default RationaleGridLayout
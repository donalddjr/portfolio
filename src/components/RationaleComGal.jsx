import React from 'react'
import Navbar from './Navbar'

import dashboard from '../assets/projects/dashboard.jpeg'
import communityGalleryImg from '../assets/projects/communityGalleryImg.jpeg'
import cssGridFLexbox from '../assets/projects/css-grid-flexbox.jpeg'
import exploreElkPoint from '../assets/projects/exploreElkPoint.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import commGallery1 from '../assets/projects/communityGallery/communityGallery1.png'
import commGallery2 from '../assets/projects/communityGallery/communityGallery2.png'
import commGallery3 from '../assets/projects/communityGallery/communityGallery3.png'



const RationaleComGal = () => {
  
  return (
    <div name='rationaleComGal' className='rationaleComGal w-full md:h-screen bg-[#08192f] text-gray-300'>
    <Navbar />
    <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline  text-gray-300'>Image Gallery with Rating System</p>
            <p className='py-6'></p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-4'>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Role</h2>
            <p className='m-4'> My role, as a front-end developer, in the project was to create a multi-user gallery with login functionality, image upload, and rating system. This project allowed me to improve my skills in PHP, MySQL, and web development.</p>
            <div className='max-w-[150px] flex justify-between'>
              <img className='m-auto p-' src={commGallery1} alt="" />
              <img className='m-auto p-2' src={commGallery2} alt="" />
              <img className='m-auto p-2' src={commGallery3} alt="" />

            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Description</h2>
            <p className='m-4'>To begin, I used the login script from the Multi-User Blog lesson to implement user registration and login functionality. Then, I created a basic image upload form with validation and thumbnail generation. Next, I used nested queries in MySQL to output thumbnails according to different author galleries.</p>
            <p className='m-4'>After completing the basic functionality, I added a rating system that allowed registered users to rate images from 1 to 5. Users could also create an account, rate an image, and view their own rating history.</p>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Tools</h2>
            <p className='m-4'>For this project, I used PHP, MySQL, HTML, CSS, and JavaScript. I also utilized Bootstrap for the frontend design and validation, and the Imagine library for thumbnail generation.</p>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Accomplishments</h2>
            <p className='m-4'>My accomplishments in this project include successfully implementing a multi-user gallery with login functionality, image upload, rating system, and thumbnail generation using nested queries in MySQL. This project helped me improve my skills in web development, particularly in PHP and MySQL.</p>
          </div>

        </div>

    </div>
</div>
  )
}

export default RationaleComGal
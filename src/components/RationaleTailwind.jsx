import React from 'react'
import Navbar from './Navbar'

import dashboard from '../assets/projects/dashboard.jpeg'
import communityGalleryImg from '../assets/projects/communityGalleryImg.jpeg'
import cssGridFLexbox from '../assets/projects/css-grid-flexbox.jpeg'
import exploreElkPoint from '../assets/projects/exploreElkPoint.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import desktopImg from '../assets/projects/tailwind/dashboard-desktop.png'
import mobileImg from '../assets/projects/tailwind/dashboard-mobile.png'
import { Link } from 'react-router-dom';



const RationaleTailwind = () => {
  
  return (
    <div name='RationaleTailwind' className='w-full md:min-h-screen bg-[#08192f] text-gray-300'>
    <Navbar />
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline  text-gray-300'>Prototype of a Mobile-Responsive Web Application for Team-Based Project Management and Communication</p>
            <p className='py-6'></p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Role</h2>
            <p className='m-4'> As the UI designer, my role was to create a high-fidelity prototype of the dashboard page for a mobile-responsive web application focused on team-based project management and communication. I gained valuable experience in designing user interfaces for similar applications.</p>
            <div className='max-w-[220px] flex justify-between'>
              <img className='m-auto p-' src={desktopImg} alt="" />
              <img className='m-auto p-2' src={mobileImg} alt="" />
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Description</h2>
            <p className='m-4'>The web application I prototyped allowed users to create, manage, and communicate about team-based projects. The prototype focused on creating a dashboard page that provided an overview of the team's projects and messages. Users could create new projects, send/receive messages, edit their user info, adjust their account and notification settings, and sign out. The prototype was built using HTML, CSS, and Tailwind CSS to build the entire one-page dashboard, ensuring that the interface was mobile-responsive as well. Users can move the screen to see how the interface adjusts and adapts to different screen sizes and orientations.</p>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Tools</h2>
            <p className='m-4'>To create the prototype, I used HTML to structure the content of the page, CSS to style the interface, and Tailwind CSS to ensure consistency across different screen sizes and make it mobile-responsive.</p>
          </div>

          <div>
            <h2 className='text-2xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Accomplishments</h2>
            <p className='m-4'>The prototype demonstrated my ability to design effective user interfaces for web applications focused on team-based project management and communication, as well as my knowledge and experience with Tailwind CSS and mobile-responsive design. It allowed me to work closely with the development team to ensure that the final product met the design requirements and user needs.</p>
          </div>

        </div>

    </div>
</div>
  )
}

export default RationaleTailwind
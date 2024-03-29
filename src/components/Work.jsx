import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import dashboard from '../assets/projects/dashboard.jpeg'
import wordpressEcommerceImg from '../assets/projects/wordpress-ecommerce_img.png'
import communityGalleryImg from '../assets/projects/communityGalleryImg.jpeg'
import cssGridFLexbox from '../assets/projects/css-grid-flexbox.jpeg'
import exploreElkPoint from '../assets/projects/exploreElkPoint.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import RationaleTailwind from './RationaleTailwind'
import { useNavigate } from "react-router-dom";






const Work = () => {

  return (
    <div name='work' className='w-full md:h-screen bg-[#08192f] text-gray-300'>
        <Navbar />
        <div className='max-w-[1000px] mx-auto p-4 pt-32 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item - JalFam-9on9 Wordpress E-Commerce*/}
                <div style={{backgroundImage: `url(${wordpressEcommerceImg})`}}  
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider p-2'>
                            Wordpress E-Commerce
                        </span>
                        <div>
                            <Link to="/rationaleTailwind">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Rationale</button>
                            </Link>
                        
                            <a href="https://donaldjeoffrey.com/dmit/jalfama/" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/donalddjr/nine_on_nine.git" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item - Tailwind Application*/}
                <div style={{backgroundImage: `url(${dashboard})`}}  
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider p-2'>
                            Tailwind Application 
                        </span>
                        <div>
                            <Link to="/rationaleTailwind">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Rationale</button>
                            </Link>
                        
                            <a href="https://donaldjeoffrey.com/dmit/2033/web-application-dashboard/" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/donalddjr/web-application-dashboard.git" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${communityGalleryImg})`}}  
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            PHP Community Gallery
                        </span>
                        <div>
                            <Link to="/RationaleComGal">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Rationale</button>
                            </Link>
                            <a href="https://donaldjeoffrey.com/dmit/2503/multiuser-gallery/index.php" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/donalddjr/multiuser-gallery.git" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${cssGridFLexbox})`}}  
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider'>
                            CSS Grid & Flexbox
                        </span>
                        <div>
                            <Link to="/rationaleGridLayout">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Rationale</button>
                            </Link>
                            <a href="https://donaldjeoffrey.com/dmit/css-grid-lab/" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/donalddjr/css-grid-lab.git" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${exploreElkPoint})`}}  
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Explore Elk Point
                        </span>
                        <div>
                            <Link to="/">
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Rationale</button>
                            </Link>
                            <a href="https://donaldjeoffrey.com/dmit/1528/exploreelkpoint/" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/donalddjr/exploreelkpoint.git" target={'_blank'}>
                                <button className='text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    </div>
  )
}

export default Work
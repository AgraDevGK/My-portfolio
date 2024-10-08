import React from 'react'
import heroImage from "../assets/heroImage.jpg"
import { FaRightLong } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row'>
                <div className='flex  flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 mx-w-md'>
                        From front-end to back-end, I build it all.
                        I thrive on the challenge of tackling every aspect of the development process.

                    </p>
                    <div className='flex flex-row'>
                        <Link to="portfolio"
                        smooth
                        duration={500} className='group text-white gap-2 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio 
                            <span className='group-hover:rotate-90 duration-300'>
                            <FaRightLong />
                            </span>
                        </Link >
                    </div>
                </div>

                <div>
                    <img src={heroImage} alt='Profile' className='rounded-2xl mx-auto w-1/2 md:w-1/2'  />
                </div>
            </div>
        </div>
    )
}

export default Home

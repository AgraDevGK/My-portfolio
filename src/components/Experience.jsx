import React from 'react'
import HTML5 from '../assets/HTML5.png'
import CSS from '../assets/CSS.png'
import JAVAScript from '../assets/JAVAScript.png'
import Nextjs from '../assets/Nextjs.png'
import nodebb from '../assets/nodebb.jpeg'
import Boot from '../assets/Boot.jpeg'
import Tailwind from '../assets/Tailwind.jpeg'
import React1 from '../assets/React1.png'
import Figma from '../assets/figma.png'

export const Experience = () => {
const techs =[
    {
        id:1,
        src:HTML5,
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:CSS,
        title:'CSS',
        style:'shadow-blue-500'
    },
    {
        id:3,
        src:JAVAScript,
        title:'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:React1,
        title:'React',
        style:'shadow-blue-500'
    },
    {
        id:5,
        src:Nextjs,
        title:'NextJs',
        style:'shadow-gray-500'
    },
    {
        id:6,
        src:nodebb,
        title:'NodeBB',
        style:'shadow-blue-500'
    },
    {
        id:7,
        src:Tailwind,
        title:'Tailwind',
        style:'shadow-blue-500'
    },
    {
        id:8,
        src:Boot,
        title:'Bootstrap',
        style:'shadow-purple-500'
    },
    {
        id:9,
        src:Figma,
        title:'Figma',
        style:'shadow-purple-500'
    },
]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline' > Experience</p>
                    <p className='py-6'>There are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

{
    techs.map(({id,src,title,style})=>(

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='Img' className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
    ))
}

                </div>
            </div>
        </div>
     )
}

import React from 'react'
import ReactModal from 'react-modal'
import Headshot from '../images/headshot.JPG'

ReactModal.setAppElement('#root');

const About = () => {
    return (
        <>
            <main className="min-h-screen p-8 bg-gradient-to-b from-sky-300 via-emerald-700 to-trueGray-600 grid sm:grid-cols-2 justify-center items-center">
                
                <div className="lg:gap-24 gap-12 grid justify-center mt-14">
                    <h1 className="justify-center flex text-5xl md:text-7xl uppercase font-black">About Me
                    </h1>
                        <div className="grid">
                            <p className="font-quicksand text-black text-center text-sm font-bold
                                flex-col leading-loose
                                sm:text-lg  
                                md:text-xl sm:pr-6
                                lg:text-2xl lg:leading-8
                                xl:leading-10">
                            Hey there, my name is Will Struder. I am a recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, specializing in Front End design and site architecture using Tailwind CSS and React. When I'm not building projects and finding new challenges in tech, I shoot videos for local businesses to increase brand awareness. My personal hobbies include playing music, cooking, and hanging out with my dog.
                            </p>
                        </div>     
                </div>
                <div className="lg:p-16 lg:mb-0 mb-14 p-12">
                    <div className="flex flex-col justify-center"> 
                        <img className="rounded-xl shadow-3xl" src={Headshot} alt="headshot" />
                    </div> 
                </div>     

            </main>
        </>
    )
}

export default About;

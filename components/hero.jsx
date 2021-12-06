/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Hero = () => {
    return ( 
        <main className="bg-app-100 pb-4 md:pb-0 h-[72vh] md:h-[68vh] pt-10">
            
            <div className="h-full flex flex-col-reverse md:flex-row items-center px-5
             lg:w-[80vw] m-auto rounded-3xl z-10 ">
                <div className="md:flex-1 flex-initial flex flex-col lg:block">
                    <h1 className=" text-center md:text-left text-3xl lg:text-5xl leading-[40px] lg:leading-[60px] mt-3 font-sans font-bold text-gray-600">
                        An initiative to receive <br/><span className="text-app-500">Heavens Manna </span><br/>early in the morning 
                    </h1>
                    <a href="#groups">

                    <button  className= " bg-app-500 px-8 py-3 mt-10 text-lg rounded-lg shadow hover:shadow-lg hover:bg-app-600 text-white font-normal">Join us</button>
                    </a>
                </div>
                <div className="h-full flex-1 flex justify-center items-end">
                    <img src="assets/girl2.png" className="md:h-full h-auto" alt="" />
                </div>
            </div>


        </main> 
    );
}
 
export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/portrait.png'
const Banner = () => {
    return (
        <div className="hero bg-white">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse pb-0">
          <div className="md:w-1/2 w-full">
            <img src={img} className="w-full"/>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-5xl font-bold md:mt-32 mt-24">
              Your biggest refund possible, <br></br>guaranteed.
            </h1>
            <p className="pt-8 md:pb-20 pb-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur maiores eius porro debitis ratione ducimus perspiciatis
              accusantium dolore iusto amet repellendus, aspernatur quia adipisci
              corporis. Alias dolor magnam deleniti tempore!
            </p>
            <div className="">
            <Link to="/signup" className="flex items-center justify-center gap-x-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 md:inline-flex">
                Signup
            </Link>
            <Link to="/login"className="flex items-center justify-center gap-x-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 md:inline-flex">
            
             Login
           
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
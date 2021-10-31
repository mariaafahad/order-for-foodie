import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <section className="w-full h-3/4 background bg-no-repeat	bg-cover bg-fixed">
                <div className="container w-full h-screen p-8 sm:px-0  flex flex-col justify-center text-left">
                    <h1 className="text-6xl text-white font-bold animate-pulse">Order Your FOOD</h1>
                    <h1 className="text-yellow-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta, molestias rem neque dolores ullam ex iusto nisi at dolore</h1>
                </div>
            </section>
        </div>

    );
};

export default Banner;
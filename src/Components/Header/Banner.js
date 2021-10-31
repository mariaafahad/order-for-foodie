import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <section className="w-full h-3/4 background bg-no-repeat	bg-cover bg-fixed">
                <div className=" w-full h-screen  flex flex-col justify-center text-left pl-10">
                    <h1 className="md:text-8xl text-red-500 font-bold animate-pulse ">Order Your FOOD</h1>
                    <h1 className="text-green-400 mt-4 md:text-2xl">Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then Order For FOODIE is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier.</h1>
                </div>
            </section>
        </div>

    );
};

export default Banner;
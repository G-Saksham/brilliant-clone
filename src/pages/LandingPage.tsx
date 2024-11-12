import LandingNavbar from "../components/nav/LandingNavbar";
import Buttons from "../components/common/Buttons";
import { useNavigate } from "react-router-dom";
import YellowStarsSvg from '../assets/svgs/yellowStars.svg?react'
import TrustpilotSvg from '../assets/svgs/trustpilot.svg?react'
import RatingSvg from '../assets/svgs/rating.svg?react'
import BestappSvg from '../assets/svgs/bestapp.svg?react'

export default function LandingPage () {
    const navigate = useNavigate();

    return (
        // parent
        <div className="w-full overflow-x-hidden">
            <LandingNavbar/>

            {/* get started section */}
            <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-36 my-4 md:my-16 w-full gap-8 md:gap-12 lg:gap-20">

                {/* Learn by doing section */}
                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 py-10 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-medium">
                        Learn by
                        <span className="text-blue-600"> doing</span>
                    </div>
                    <div className="text-lg md:text-xl font-normal">
                        <span>Guided interactive problem solving that's effective</span>
                        <span> and fun. Master concepts in 15 minutes a day. </span>
                    </div>
                    <div className="w-full md:w-2/3">
                        <Buttons btnType="type2" color='green' onClick={() => navigate('/signup')} className="w-1/2">Get Started</Buttons>
                    </div>
                </div>

                {/* updated image setion */}
                <div className="hidden lg:block w-full lg:w-1/2 border-2 border-b-8 border-r-8 rounded-2xl border-black">
                    <div className="border-b-2 h-14 flex justify-around gap-10 px-20">
                        <div className="flex h-2 rounded-full bg-gray-200 w-2/3 self-center">
                            <div className="bg-teal-500 rounded-full w-3/4"></div>
                        </div>
                        <div className="text-teal-500 text-xs font-bold self-center ">
                            75
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src="/src/assets/images/foundational-math.png" alt="quadratic equation" className="rounded-2xl w-96 self-center" />
                    </div>
                    <div className="flex justify-center pb-4">
                        <div className="flex justify-center gap-2 p-2 w-1/3 bg-gray-100 rounded-full">
                            <div className="self-center">
                                <img src="/src/assets/svgs/math.svg" alt="math" className="w-4 self-center"/>
                            </div>
                            <div className="text-xs self-center font-medium">
                                Quadratic Equation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* updated classification section */}
            <div className="grid justify-between grid-cols-4 lg:grid-cols-5 border-t-2 border-gray-100 py-2">
                {/* Math */}
                <div className="flex items-center gap-4 justify-center py-4">
                    <span className="self-center">
                        <img src="/src/assets/svgs/math.svg" alt="math" className="size-6" />
                    </span>
                    <span className="flex self-center font-light">Math</span>
                </div>

                {/* Data Analysis */}
                <div className="flex items-center gap-4 justify-center">
                    <span className="self-center">
                        <img src="/src/assets/svgs/dataAnalytics.svg" alt="dataAnalytics" className="size-6" />
                    </span>
                    <span className="flex self-center font-light">
                        <span className="hidden lg:inline">Data Analysis</span>
                        <span className="lg:hidden">Data</span>
                    </span>
                </div>

                {/* Computer Science */}
                <div className="flex items-center gap-4 justify-center">
                    <span className="self-center">
                        <img src="/src/assets/svgs/computer.svg" alt="CS" className="size-6" />
                    </span>
                    <span className="flex self-center font-light">
                        <span className="hidden lg:inline">Computer Science</span>
                        <span className="lg:hidden">CS</span>
                    </span>
                </div>

                {/* Programming & AI - Hidden on medium and smaller screens */}
                <div className="hidden lg:flex items-center gap-4 justify-center">
                    <span className="self-center">
                        <img src="/src/assets/svgs/programming.svg" alt="programming" className="size-6" />
                    </span>
                    <span className="flex self-center font-light">Programming & AI</span>
                </div>

                {/* Science & Engineering */}
                <div className="flex items-center gap-4 justify-center">
                    <span className="flex self-center">
                        <img src="/src/assets/svgs/science.svg" alt="science" className="size-6" />
                    </span>
                    <span className="flex self-center font-light">
                        <span className="hidden lg:inline">Science & Engineering</span>
                        <span className="lg:hidden">Science</span>
                    </span>
                </div>
            </div>

            {/* Marketing section */}
            <div className="bg-gray-100 py-16">
                <div className="flex justify-center font-bold text-xl mb-10">
                    Join over 10 million people learning on Brilliant
                </div>

                {/* Icon section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-16 lg:px-24">
                    {/* First section - News logos */}
                    <div className="flex flex-col items-center justify-center space-y-2 relative">
                        <div className="flex space-x-4 ">
                            <img 
                                src="/src/assets/images/new-york-times.png" 
                                alt="new-york" 
                                className="w-36 object-contain opacity-30 self-center" 
                            />
                        </div>
                        <div className="flex space-x-4 ">
                            <img 
                                src="/src/assets/images/the-atlantic-long.png" 
                                alt="atlantic" 
                                className="w-24 object-contain opacity-40 self-center" 
                            />
                        </div>
                        {/* Vertical divider for desktop */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block h-12 w-px bg-gray-300"></div>
                    </div>

                    {/* Second section - Star reviews */}
                    <div className="flex flex-col items-center justify-center space-y-2 relative">
                        <YellowStarsSvg className="h-6" />
                        <p className="text-sm">
                            Over 50,000 5-star reviews on
                        </p>
                        {/* Vertical divider for desktop */}
                        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block h-12 w-px bg-gray-300"></div> */}
                    </div>

                    {/* Third section - Trustpilot */}
                    <div className="flex flex-col items-center justify-center space-y-2 relative">
                        <div className="absolute left-0 -bottom-6 -translate-y-1/2 hidden lg:block h-12 w-px bg-gray-300"></div>
                        <TrustpilotSvg className="h-6 self-center" />
                        <RatingSvg className="h-6 self-center" />
                        {/* Vertical divider for desktop */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block h-12 w-px bg-gray-300"></div>
                    </div>

                    {/* Fourth section - App badges */}
                    <div className="grid grid-rows-2 items-center justify-center">
                        <div className="row-span-1"></div>
                        <div className="flex flex-col-2 justify-center row-span-1 gap-8">
                            <img 
                                src="/src/assets/images/app-of-the-day.png" 
                                alt="editor's choice" 
                                className="h-8 object-contain brightness-0 opacity-50 self-center" 
                            />
                            <BestappSvg className="h-8 self-center" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Text section */}
            <div className="grid justify-center grid-rows-3 py-8 md:py-12 lg:py-16 px-4 sm:px-8">
                <div className="flex justify-center row-span-1 text-center font-bold text-2xl md:text-3xl py-2">
                    Master concepts in 15 minutes a day
                </div>
                <div className="row-span-2 text-center text-md text-gray-600 font-light py-2">
                    <p className="md:block hidden">
                    Whether you're a complete beginner or ready to dive into machine learning and beyond,
                    </p>
                    <p className="md:block hidden">
                    Brilliant makes it easy to level up fast with fun, bite-sized lessons.
                    </p>
                    <p className="block md:hidden">
                    Whether you're a complete beginner or ready to dive into machine learning and beyond, Brilliant makes it easy to level up fast with fun, bite-sized lessons.
                    </p>
                </div>
            </div>
        </div>
    )
}
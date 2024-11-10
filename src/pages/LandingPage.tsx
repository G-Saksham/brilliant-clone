import LandingNavbar from "../components/nav/LandingNavbar";
import Buttons from "../components/common/Buttons";
import { useNavigate } from "react-router-dom";
import YellowStarsSvg from '../assets/svgs/yellowStars.svg?react'
import TrustpilotSvg from '../assets/svgs/trustpilot.svg?react'
import RatingSvg from '../assets/svgs/rating.svg?react'
import BestappSvg from '../assets/svgs/bestapp.svg?react'
import NewyorkSvg from '../assets/images/new-york-times.png?react'
export default function LandingPage () {
    const navigate = useNavigate();

    return (
        <div className="">
            <LandingNavbar/>

            {/* get started section */}
            <div className="flex grid-cols-2 px-36 my-10 w-screen gap-20 justify-between">
                <div className="col-span-1 grid w-full">
                    <div></div>
                    <div></div>
                    <div className="text-6xl font-medium">
                        Learn by
                        <span className="text-blue-600"> doing</span>
                    </div>
                    <div className="text-xl font-normal">
                        <div>
                            Guided interactive problem solving that's effective
                        </div>
                        <div>
                            and fun. Master concepts in 15 minutes a day. 
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Buttons btnType="type2" color='green' onClick={() => {
                            navigate('/signup')
                        }} >Get Started</Buttons>
                    </div>
                    <div></div>
                </div>

                {/* image section */}
                <div className="col-span-1 w-full grid gap-0 border-2 border-b-8 border-r-8 rounded-2xl border-black">
                    <div className="border-b-2 h-14 flex justify-around gap-10 px-20">
                        <div className="flex h-2 rounded-full bg-gray-200 w-2/3 self-center">
                            <div className="bg-teal-500 rounded-full w-3/4"></div>
                        </div>
                        <div className="text-teal-500 text-xs font-bold self-center ">
                            75%
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

            {/* classification section */}
            <div className="flex justify-between gap-12 px-40 my-10">
                <div className="flex self-center justify-between gap-2">
                    <span className="self-center">
                        <img src="/src/assets/svgs/math.svg" alt="math" className="w-6"/>
                    </span>
                    <span className="self-center">Math</span>
                </div>
                <div className="flex justify-between gap-2 ">
                    <span className="self-center">
                        <img src="/src/assets/svgs/dataAnalytics.svg" alt="dataAnalytics" className="w-6" />
                    </span>
                    <span className="self-center">Data Analysis</span> 
                </div>
                <div className="flex justify-between gap-2 ">
                    <span className="self-center">
                        <img src="/src/assets/svgs/computer.svg" alt="CS" className="w-7" />
                    </span>
                    <span className="self-center">Computer Science</span>
                </div>
                <div className="flex justify-between gap-2 ">
                    <span className="self-center">
                        <img src="/src/assets/svgs/programming.svg" alt="programming" className="w-5"/>
                    </span>
                    <span className="self-center">Programming & AI</span>
                </div>
                <div className="flex justify-between gap-2 ">
                    <span className="self-center">
                        <img src="/src/assets/svgs/science.svg" alt="science" className="w-7"/>
                    </span>
                    <span className="self-center">Science & Engineering</span> 
                </div>
            </div>

            <div className="bg-gray-100 py-20">
                <div className="flex justify-center font-semibold text-xl mb-10">
                    Join over 10 million people learning on Brilliant
                </div>
                <div className="flex justify-evenly mt-10">
                    <div className="flex gap-4">
                        <span className="self-center">
                            <img src="/src/assets/images/new-york-times.png" alt="new-york" className="w-36 opacity-50" />
                            {/* <NewyorkSvg /> */}
                        </span>
                        <span className="self-center">
                            <img src="/src/assets/images/the-atlantic-long.png" alt="atlantic" className="w-36 opacity-50" />
                        </span>
                    </div>
                    
                    <div className="self-center">
                        <div className="w-20">
                            <YellowStarsSvg className='size-full'/>
                        </div>
                        <div>
                            Over 50,000 5-star reviews on
                        </div>
                    </div>
                    
                    <div className="w-24 self-center">
                        <div className="w-full">
                            <TrustpilotSvg />
                        </div>
                        <div className="">
                            <RatingSvg />
                        </div>
                    </div>

                    <div className="flex justify-between self-center">
                        <span className="self-center">
                            <img src="/src/assets/images/app-of-the-day.png" alt="editor's choice" className="w-24 brightness-0 opacity-50 " />
                        </span>
                        <span className="w-20 self-center">
                            <BestappSvg />
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid justify-center grid-rows-3 py-16">
                <div className="flex justify-center row-span-1 text-center font-bold text-3xl py-2">
                    Master concepts in 15 minutes a day
                </div>
                <div className="row-span-2 text-center text-md text-gray-600 font-light py-2">
                    <div>
                        Whether you're a complete beginner or ready to dive into machine learning and     
                    </div> 
                    <div>
                        beyond, Brilliant makes it easy to level up fast with fun, bite-sized lessons.    
                    </div>   
                    
                </div>
            </div>
        </div>
    )
}
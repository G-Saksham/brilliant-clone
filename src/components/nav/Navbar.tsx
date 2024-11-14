import { Link, useNavigate } from "react-router-dom";
import BrilliantlogoSvg from '../../assets/svgs/logo.svg?react'
import HomeIconSvg from '../../assets/svgs/homeIcon.svg?react'
import CourseIconSvg from '../../assets/svgs/courseIcon.svg?react'
import SidebarIconSvg from '../../assets/svgs/sidebarIcon.svg?react'
import ProgressIconSvg from "../../assets/svgs/progressIcon.svg?react"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-4 lg:grid-cols-9 gap-4 border shadow-sm shadow-gray-100 bg-white w-full px-12 md:px-20 lg:px-28 py-6 md:py-4"> 
            
            {/* left section */}
            <div className="flex col-span-3 justify-start gap-6 lg:gap-10 self-center">
                {/* Brilliant logo */}
                <button className="w-24 flex-shrink-0"
                    onClick={() => {
                        navigate('/home')
                    }}
                >
                    <BrilliantlogoSvg/>
                </button>

                {/* home button */}
                <div className="flex justify-center gap-2 ">
                    <button 
                        className="flex justify-center gap-2 text-gray-500 hover:border-b hover:border-gray-700 focus:text-black focus:font-semibold focus:border-b-2 focus:border-black hover:text-gray-700"
                        onClick={() => {
                            navigate('/home')
                        }}
                    >
                        <div className="w-4 h-4 py-1 flex-shrink-0">
                            <HomeIconSvg/>
                        </div>
                        <div>
                            Home
                        </div>
                    </button>
                </div>

                {/* courses */}
                <div className="flex justify-center gap-2">
                    <button 
                        className="flex justify-center gap-2 text-gray-500 hover:border-b hover:border-gray-700 focus:text-black focus:font-semibold focus:border-b-2 focus:border-black hover:text-gray-700"
                        onClick={() => {
                            navigate('/courses')
                        }}
                    >
                        <div className="w-4 h-4 py-1 flex-shrink-0">
                            <CourseIconSvg/>
                        </div>
                        <div>
                            Courses
                        </div>
                    </button>
                </div>
            </div>

            {/* right section */}
            <div className="flex col-span-1 lg:col-span-6 gap-6 justify-end items-center">
                
                {/* search bar - hidden on small, visible on md and up */}
                <div className="hidden md:block w-full lg:w-2/5">
                    <form className="max-w-md mx-auto">   
                        <label className="mb-2 text-sm font-medium text-black sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-800 font-semibold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-[200%] md:w-full p-2 ps-10 text-sm text-black rounded-md bg-gray-100 focus:ring-1 focus:ring-black" required />
                        </div>
                    </form>
                </div>

                {/* start trial - hidden on sm and md, visible on lg */}
                <div className="hidden lg:block">
                    <button className="w-28 border-2 px-4 p-1 border-green-600 text-green-600 rounded-full text-md font-medium">
                        Start trial
                    </button>
                </div>

                {/* progress count - hidden on sm and md, visible on lg */}
                <div className="hidden xl:flex items-center">
                    <button className="w-20 flex justify-between text-justify border-2 rounded-full p-1 px-5">
                        <div className="flex justify-center text-md font-extrabold items-center py-1">
                            1
                        </div>
                        <div className="w-8 h-8 flex-shrink-0">
                            <ProgressIconSvg/>
                        </div>
                    </button>
                </div>

                {/* sidebar icon */}
                <div className="w-4 flex-shrink-0">
                    <SidebarIconSvg/>
                </div>    
            </div>          
        </div>
    )
}

export default Navbar;
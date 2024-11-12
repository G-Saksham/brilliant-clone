import { Link } from "react-router-dom";
import BrilliantlogoSvg from '../../assets/svgs/logo.svg?react'
import HomeIconSvg from '../../assets/svgs/homeIcon.svg?react'
import CourseIconSvg from '../../assets/svgs/courseIcon.svg?react'
import SidebarIconSvg from '../../assets/svgs/sidebarIcon.svg?react'
import ProgressIconSvg from "../../assets/svgs/progressIcon.svg?react"


const Navbar = () => {
    return (
        <div className=" grid grid-cols-9 gap-4 border shadow-md shadow-gray-100 bg-white w-screen px-28 py-2"> 
            
            {/* left section */}
            <div className="flex col-span-3 grid-cols-3 justify-start gap-10 self-center">

                {/* Brilliant logo */}
                <div className="col-span-1 w-24">
                    <Link to='/home'>
                        <BrilliantlogoSvg/>
                    </Link>
                </div>

                {/* home button */}
                <div className="col-span-1 flex justify-center gap-2 hover:underline hover:underline-offset-4 ">
                    <Link to="/home" className="flex justify-center gap-2 text-gray-500 focus:text-black focus:font-semibold hover:text-gray-700">
                        <div className="size-4 py-1">
                            <HomeIconSvg/>
                        </div>
                        <div>
                            Home
                        </div>
                    </Link>
                </div>

                {/* courses */}
                <div className="flex justify-center gap-2 hover:underline hover:underline-offset-4 focus:text-black focus:font-semibold">
                    <Link to="/courses" className="flex justify-center gap-2 text-gray-500 focus:text-black focus:font-semibold hover:text-black hover:underline-gray-200 hover:underline-offset-4">
                        <div className="size-4 py-1 ">
                            <CourseIconSvg/>
                        </div>
                        <div>
                            Courses
                        </div>
                    </Link>
                </div>
            </div>

            {/* right section */}
            <div className="flex col-span-6 grid-cols-6 gap-6 justify-end">
                
                <div className="col-span-2"></div>

                {/* search bar */}
                <div className=" self-center col-span-1 w-2/5">
                    <form className="max-w-md mx-auto">   
                        <label className="mb-2 text-sm font-medium text-black sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-800 font-semibold " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="self-center block w-full p-2 ps-10 text-sm text-black rounded-md bg-gray-100 focus:ring-1 focus:ring-black" required />
                        </div>
                    </form>
                </div>

                {/* start trial */}
                <div className="col-span-1 self-center">
                    <button className="w-28 self-center border-2 px-4 p-1 border-green-600 text-green-600 rounded-full text-md items-center font-medium">
                        Start trial
                    </button>
                </div>

                {/* progress count */}
                <div className="col-span-1 flex justify-between items-center">
                    <button className="w-20 flex justify-between text-justify border-2 rounded-full p-1 px-5">
                        <div className="flex justify-center text-md font-extrabold items-center py-1">
                            1
                        </div>
                        <div className="size-8">
                            <ProgressIconSvg/>
                        </div>
                    </button>
                </div>

                {/* sidebar icon */}
                <div className="w-4 self-center col-span-1">
                    <SidebarIconSvg/>
                </div>    
            </div>          
        </div>
    )
}

export default Navbar;
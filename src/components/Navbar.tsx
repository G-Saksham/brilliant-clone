import { Link } from "react-router-dom";
// import Buttons from "./Buttons";

const Navbar = () => {
    return (
        <div className=" grid grid-cols-9 gap-4 border shadow-md shadow-gray-100 bg-white w-screen px-28 py-2"> 
            
            {/* left section */}
            <div className="flex col-span-3 grid-cols-3 justify-start gap-10 self-center">

                {/* Brilliant logo */}
                <div className="col-span-1 w-24">
                    <Link to='/home'>
                        <svg viewBox="0 0 114 27" focusable="false" role="img">
                            <path d="M39.6614 0H35.8083V3.84981H39.6614V0Z" fill="#000"></path>
                            <path d="M26.2288 9.53622H25.84V7.52301H21.9869V26.4895H25.84V16.2822C25.84 12.9622 27.8548 10.843 31.0009 10.843H33.546V7.52301H30.8948C28.9153 7.52301 27.36 8.19408 26.2288 9.53622Z" fill="#000"></path>
                            <path d="M39.6614 7.52301H35.8083V26.4895H39.6614V7.52301Z" fill="#000"></path>
                            <path d="M16.6493 11.9168C18.018 10.7533 18.8056 8.9962 18.8056 6.99324C18.8056 3.03747 15.7302 0 11.9833 0H0V26.4895H15.7302L19.0177 23.2402V14.5516L16.6493 12.2873V11.9171V11.9168ZM3.85302 3.35534H11.347C13.4679 3.35534 15.1293 4.98003 15.1293 7.06388C15.1293 9.14772 13.4679 10.8077 11.347 10.8077H3.85302V3.35534ZM15.0233 23.1342H3.85302V14.1984H15.0233V23.1342Z" fill="#000"></path>
                            <path d="M78.4744 9.39498H78.0856C76.2828 7.98221 74.3032 7.27582 72.1116 7.27582C66.5618 7.27582 62.1786 11.5495 62.1786 17.1299C62.1786 22.7104 66.3144 26.7368 71.9702 26.7368C74.3739 26.7368 76.3888 25.9951 78.0856 24.6176H78.4744V26.4896H82.3274V7.52305H78.4744V9.39498ZM72.1823 23.4168C68.6121 23.4168 65.7488 20.5912 65.7488 16.9887C65.7488 13.3861 68.6121 10.5958 72.1823 10.5958C75.7525 10.5958 78.5805 13.4214 78.5805 16.9887C78.5805 20.5559 75.7525 23.4168 72.1823 23.4168Z" fill="#000"></path>
                            <path d="M85.1199 7.52301V26.4895H88.9729V10.8784H97.3152V26.4895H101.168V10.7018L97.9868 7.52301H85.1199Z" fill="#000"></path>
                            <path d="M60.0576 0H56.2046V3.84981H60.0576V0Z" fill="#000"></path>
                            <path d="M46.4838 0H42.5601V26.4895H46.4838V0Z" fill="#000"></path>
                            <path d="M114 10.8431V7.52305H107.779V2.08386H103.926V22.4985C103.926 24.7589 105.622 26.4896 107.885 26.4896H114V23.1342H107.779V10.8431H114Z" fill="#000"></path>
                            <path d="M60.0576 7.52301H56.2046V26.4895H60.0576V7.52301Z" fill="#000"></path>
                            <path d="M53.306 0H49.3823V26.4895H53.306V0Z" fill="#000"></path>
                        </svg>
                    </Link>
                </div>

                {/* home button */}
                <div className="col-span-1 flex justify-center gap-2 hover:underline hover:underline-offset-4 ">
                    <Link to="/home" className="flex justify-center gap-2 text-gray-500 focus:text-black focus:font-semibold hover:text-gray-700">
                        <div className="size-4 py-1">
                            <svg viewBox="0 0 16 16" focusable="false">
                                <path d="M15.4987 7.49869L8.00004 0L0.501266 7.49869L1.4474 8.44483L8.00004 1.89227L14.5526 8.44483L15.4987 7.49869Z" fill="currentcolor"></path>
                                <path d="M2.63088 9.30399L7.99982 3.95182L13.3688 9.30399V16H10.0068L10.0068 10.6478L5.99265 10.6478L5.99265 16H2.63088V9.30399Z" fill="currentcolor"></path>
                            </svg>
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
                            <svg viewBox="0 0 16 16" focusable="false">
                                <path d="M3.51992 1.28H13.7599V12.8H15.0399V0H3.51992V1.28Z" fill="currentcolor"></path>
                                <path d="M3.51992 12.16H7.99992V10.88H3.51992V12.16Z" fill="currentcolor"></path>
                                <path d="M3.51992 5.12H9.91992V8.96H3.51992V5.12Z" fill="currentcolor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.960079 16V2.56H12.4801V16H0.960079ZM2.24008 3.84H11.2001V14.72H2.24008V3.84Z" fill="currentcolor"></path>
                            </svg>
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
                            <svg viewBox="0 0 32 32" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                <path fill='white' d="M22.676 11.3021H16.9944L19.1005 4.98646C19.2964 4.20312 18.7087 3.46875 17.974 3.46875H10.9209C10.3331 3.46875 9.79435 3.90937 9.74537 4.49687L8.17802 16.2469C8.08006 16.9812 8.61883 17.5687 9.35353 17.5687H15.1331L12.8801 27.1156C12.7331 27.85 13.2719 28.5354 14.0066 28.5354C14.4474 28.5354 14.8393 28.3396 15.0352 27.9479L23.6556 13.0646C24.1454 12.3302 23.5577 11.3021 22.676 11.3021Z" stroke="black" stroke-opacity="0.1" stroke-width="2"></path>
                            </svg>
                        </div>
                    </button>
                </div>

                {/* sidebar icon */}
                <div className="w-4 self-center col-span-1">
                    <svg viewBox="0 0 16 16" focusable="false">
                        <path d="M16 4H0V2H16V4Z" fill="currentColor"></path>
                        <path d="M16 9H0V7H16V9Z" fill="currentColor"></path>
                        <path d="M0 14H16V12H0V14Z" fill="currentColor"></path>
                    </svg>
                </div>    
            </div>          
        </div>
    )
}

export default Navbar;
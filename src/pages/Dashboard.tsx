import Navbar from "../components/nav/Navbar"
import Cards from "../components/course/Cards"
import ContinueCard from "../components/course/ContinueCard"
import ProgressCard from "../components/course/ProgressCard"
import GoalCard from "../components/course/GoalCard"

export default function Dashboard() {
  return (
    <div className="">
        <div className="fixed left-0 top-0 right-0 z-10">
            <Navbar />
        </div>

        <div className="hidden lg:grid justify-center flex-grow grid-cols-5 gap-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 w-screen h-screen my-28 overflow-y-hidden">
            {/* the welcome section */}
            <div className="grid h-3/5 col-span-2 overflow-y-hidden justify-end">
                <div className="text-start font-bold text-xl">
                    Welcome, Alex
                </div>
                <div className="grid grid-rows-2 gap-4 py-4">
                    <div className="row-span-1">
                        <ProgressCard />
                    </div>
                    <div className="row-span-1">
                        <GoalCard />
                    </div>
                </div>
            </div>

            {/* Jump back in section */}
            <div className="grid col-span-3 overflow-y-auto h-screen text-start w-full lg:w-[85%] xl:w-[80%] pr-2">
                <div className="flex font-bold text-xl">
                    Jump back in
                </div>
                <div className="grid gap-2 xl:gap-4 py-4 ">
                    {/* continue card section */}
                    <div>
                        <ContinueCard />
                    </div>
                    {/* continue learning section */}
                    <div>
                        <div className="flex text-xl font-bold pb-2 pt-8">
                            Continue learning
                        </div>
                        <div className="grid grid-cols-3 justify-between my-4 gap-6">
                            <Cards
                            logo="src/assets/images/logic-deduction-M7p41u.png"
                            label1="LOGIC . LEVEL 1"
                            label2="Logic"
                            className="text-xs text-blue-600"
                            />
                            <Cards
                            logo="src/assets/images/computer-science-9mKBqy.png"
                            label1="CS . LEVEL 1"
                            label2="Thinking in Code"
                            className="text-xs text-[#7139cc]"
                            />
                        </div>
                    </div>
                    {/* recommended for you */}
                    <div>
                        <div className="flex text-xl font-bold pb-2 pt-8">
                            Recommended for you
                        </div>
                        <div className="grid grid-cols-3 justify-between my-4 gap-6">
                            <Cards
                            logo="src/assets/images/logic-deduction-M7p41u.png"
                            label1="LOGIC . LEVEL 1"
                            label2="Logic"
                            className="text-xs text-blue-600"
                            />
                            <Cards
                            logo="src/assets/images/computer-science-9mKBqy.png"
                            label1="CS . LEVEL 3"
                            label2="Computer Science Fundamentals"
                            className="text-xs text-[#7139cc]"
                            />
                            <Cards
                            logo="src/assets/images/foundational-math-lI90N2.png"
                            label1="MATH . LEVEL 1"
                            label2="Solving Equations"
                            className="text-xs text-blue-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Responsive layout for smaller screens -- do not change anything */}
        <div className="w-screen/2 flex justify-center">
            <div className=" h-screen my-24 lg:hidden flex justify-center">
                <div className="flex justify-center">
                    <div className="grid justify-center row-auto w-[75%] xs:w-[70%] sm:w-[65%] md:w-[60%]">

                        {/* */}
                        <div className="grid gap-4 my-4">
                            <div className="text-start font-bold text-md">
                                Welcome, Alex
                            </div>
                            <div className="w-full">
                                <ProgressCard/>
                            </div>                  
                        </div>
                        <div className="grid gap-4 my-4">
                            <div className="flex font-bold">
                                Jump back in
                            </div>
                            <ContinueCard />
                        </div>

                        {/* */}
                        <div className="grid gap-4 mb-4">
                            <div className="flex text-left font-bold pb-2 pt-8">
                                Continue learning
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 justify-between my-4 gap-6">
                                <Cards
                                logo="src/assets/images/logic-deduction-M7p41u.png"
                                label1="LOGIC . LEVEL 1"
                                label2="Logic"
                                className="text-xs text-blue-600"
                                />
                                <Cards
                                logo="src/assets/images/computer-science-9mKBqy.png"
                                label1="CS . LEVEL 1"
                                label2="Thinking in Code"
                                className="text-xs text-[#7139cc]"
                                />
                            </div>
                        </div>

                        <GoalCard/>


                        {/* */}
                        <div className="grid gap-4 my-4">
                            <div className="flex text-left font-bold pb-2 pt-8">
                                Recommended for you
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 justify-between my-4 gap-6">
                                <Cards
                                logo="src/assets/images/logic-deduction-M7p41u.png"
                                label1="LOGIC . LEVEL 1"
                                label2="Logic"
                                className="text-xs text-blue-600"
                                />
                                <Cards
                                logo="src/assets/images/computer-science-9mKBqy.png"
                                label1="CS . LEVEL 3"
                                label2="Computer Science Fundamentals"
                                className="text-xs text-[#7139cc]"
                                />
                                <Cards
                                logo="src/assets/images/foundational-math-lI90N2.png"
                                label1="MATH . LEVEL 1"
                                label2="Solving Equations"
                                className="text-xs text-blue-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
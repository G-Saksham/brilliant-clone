import Navbar from "../components/nav/Navbar"
import Cards from "../components/course/Cards"
import ContinueCard from "../components/course/ContinueCard"
import ProgressCard from "../components/course/ProgressCard"
import GoalCard from "../components/course/GoalCard"

export default function Dashboard () {
    return (
        <div className=" overflow-y-hidden">
            <div className="fixed left-0 top-0 right-0 z-10">
                <Navbar /> 
            </div>
        
            <div className="grid flex-grow grid-cols-5 w-screen h-screen my-24 overflow-y-hidden px-40">

                {/* the welcome section */}
                <div className="grid h-3/5 col-span-2 overflow-y-hidden justify-end">
                    <div className="text-start font-bold text-md">
                        Welcome, Alex
                    </div>
                    <div className="grid grid-rows-2 gap-4 py-8">
                        <div className="row-span-1">
                            <ProgressCard/>
                        </div>
                        <div className="row-span-1">
                            <GoalCard/>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>

                {/* Jump back in section */}
                <div className="grid col-span-3 overflow-y-auto h-screen text-start px-8">
                    <div className="flex font-bold">
                        Jump back in    
                    </div>
                    <div className="grid gap-4 py-8 ">
                        <div>
                            <ContinueCard/>
                        </div>
                        <div>
                            <div className="flex text-left font-bold pb-2 pt-8">
                                Continue learning
                            </div>
                            <div className="grid grid-cols-3 justify-between my-4 gap-6">
                                <Cards logo='/assets/images/logic-deduction-M7p41u.png' label1='LOGIC . LEVEL 1' label2='Logic' className="text-xs text-blue-600"/>
                                <Cards logo='/assets/images/computer-science-9mKBqy.png' label1='CS . LEVEL 1' label2='Thinking in Code' className="text-xs text-[#7139cc] "/>
                            </div>
                        </div>
                        <div>
                            <div className="flex text-left font-bold pb-2 pt-8">
                                Recommended by you
                            </div>
                        <div className="grid grid-cols-3 justify-between my-4 gap-6">
                            <Cards logo='/assets/images/logic-deduction-M7p41u.png' label1='LOGIC . LEVEL 1' label2='Logic' className="text-xs text-blue-600"/>
                            <Cards logo='/assets/images/computer-science-9mKBqy.png' label1='CS . LEVEL 3' label2='Computer Science Fundamentals' className="text-xs text-[#7139cc] "/>
                            <Cards logo='/assets/images/foundational-math-lI90N2.png' label1='MATH . LEVEL 1' label2='Solving Equations' className="text-xs text-blue-700"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
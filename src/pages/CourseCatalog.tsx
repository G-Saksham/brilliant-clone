import Navbar from "../components/nav/Navbar"
import Buttons from "../components/common/Buttons"
import Cards from "../components/course/Cards"
import SearchBar from "../components/common/SearchBar"

export default function CourseCatalog () {
    return (
        <div>
            <Navbar/>
            <div className="grid px-28 my-4 gap-4">
                <div className="text-2xl font-bold mt-12 mb-4">
                    Browse all 60+ courses
                </div>
                <div>
                    <SearchBar/>
                </div>
                <div className="grid gap-4 grid-cols-5 w-4/5 py-4">
                    <Buttons btnType='type1' color='white'>New courses</Buttons>
                    <Buttons btnType='type1' color='white'>Math</Buttons>
                    <Buttons btnType='type1' color='white'>Data</Buttons>
                    <Buttons btnType='type1' color='white'>Computer Science</Buttons>
                    <Buttons btnType='type1' color='white'>Science</Buttons>
                </div>
                <div className="text-2xl font-bold my-8">
                    New courses
                </div>
                <div className="grid grid-cols-6 gap-8 ">
                    <div className="grid justify-center gap-4 ">
                        <Cards type='NEW' logo='/assets/images/VariablesCourseCard_960x960-75LzA9.png' className=""></Cards>
                        <div className="text-center ">Real-World Algebra</div>
                    </div>
                    <div className="grid justify-center gap-4">
                        <Cards type='NEW' logo='/assets/images/how-llms-work-z7ovbF.png' className=""></Cards>
                        <div className="text-center">How LLMs Work</div>
                    </div>
                    <div className="grid justify-center gap-4">
                        <Cards type='NEW' logo='/assets/images/clusteringCourseCard_960x960-MMVpvJ.png' className=""></Cards>
                        <div className="text-center"> Clustering </div>
                    </div>
                    <div className="grid justify-center gap-4">
                        <Cards type='NEW' logo='/assets/images/vectors-Grpuo7.png' className=""></Cards>
                        <div className="text-center">Vectors</div>
                    </div>
                    <div className="grid justify-center gap-4">
                        <Cards type='NEW' logo='/assets/images/capstone-making-money-witih-airbnb-NDlGk9.png' className=""></Cards>
                        <div className="text-center">Case Study: Unlocking Rental Value on Airbnb</div>
                    </div>
                    <div className="grid justify-center gap-4">
                    <Cards type='NEW' logo='/assets/images/capstone-twitterx-viral-tracking-rt01GG.png' className=""></Cards>
                        <div className="text-center">Case Study: Going Viral on X</div>
                    </div>
                    <div className="grid justify-center gap-4">
                      <Cards type='NEW' logo='/assets/images/capstone-spotify-L7f7vf.png' className=""></Cards>
                        <div className="text-center">Case Study: Topping the Charts on Spotify</div>
                    </div>
                    <div className="grid justify-center gap-4">
                        <Cards type='NEW' logo='/assets/images/capstone-pricing-electric-vehicles-5KzO8N.png' className=""></Cards>
                        <div className="text-center">Case Study: Maximizing Electric Car Value</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
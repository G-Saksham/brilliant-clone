import Buttons from "../common/Buttons"
import YellowBackgroundSvg from '../../assets/svgs/yellowBackground.svg?react'


export default function ContinueCard () {
    return (
        <div className="border-2 rounded-3xl border-b-4 border-gray-200">
            <div className="items-stretch">
                <div className="flex relative">
                    <YellowBackgroundSvg/>
                    <div className="flex justify-center absolute items-center bottom-0 left-52">
                        <img width="123" height="137" alt="" src="https://ds055uzetaobb.cloudfront.net/category-images/science-WrzOSf.png"/>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="border-2 rounded-sm border-green-400 w-12"></div>
            </div>

            <div className="grid gap-4 py-6">
                <div className="grid justify-center font-semibold ">
                    <div className="text-xs flex justify-center text-yellow-600">
                        SCIENCE . LEVEL 1
                    </div>
                    <div className="text-lg">
                        Scientific Thinking
                    </div>
                </div>
                <div className="items-center px-6">
                    <Buttons color='allBlack' btnType="type2" className="w-full">Continue path</Buttons>
                </div>
            </div>
        </div>
    )
}
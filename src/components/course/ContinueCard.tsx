import Buttons from "../common/Buttons"

export default function ContinueCard () {
    return (
        <div className="border-2 rounded-3xl border-b-4 border-gray-200">
            <div className="items-stretch">
                <div className="flex relative">
                    <svg viewBox="0 0 593 209" focusable="false" preserveAspectRatio="none">
                        <g clip-path="url(#:rv:)">
                            <path d="M-105.109 79H0.810913L144.988 146.5H699.028V209H-105.109V79Z" fill="#FEF9E9"></path>
                            <path d="M699.047 89H593.239L449.216 160.566L-106.045 160.566V209L699.047 209V89Z" fill="#FDF3D3"></path>
                        </g>
                        <defs><clipPath id=":rv:"><rect width="593" height="209" fill="white"></rect></clipPath></defs>
                    </svg>
                    <div className="flex justify-center absolute items-center bottom-0 left-52">
                    <img width="123" height="137" alt="" src="https://ds055uzetaobb.cloudfront.net/category-images/science-WrzOSf.png">
                    </img>
                </div>
                </div>
                
            </div>
            <div className="bg-gray-100">
                <div className="border-2 rounded-sm border-green-400 w-12">
                    
                </div>
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
                    <Buttons color='allBlack' btnType="type2">Continue path</Buttons>
                </div>
            </div>
        </div>
    )
}
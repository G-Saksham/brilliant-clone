import ProgressIconSvg from '../../assets/svgs/progressIcon.svg?react'
import BatteryIconSvg from '../../assets/svgs/batteryIcon.svg?react'
import CurrentBoldProgressIconSvg from '../../assets/svgs/currentBoldProgressIcon.svg?react'
import CurrentProgressIconSvg from '../../assets/svgs/currentProgressIcon.svg?react'

export default function ProgressCard () {
    return (
        <div className="border-2 rounded-3xl border-gray-200 p-4 sm:p-6 md:p-8">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold">1</div>
                        <div className="w-6 sm:w-8 pt-1">
                            <ProgressIconSvg/>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <BatteryIconSvg className="w-4"/>
                        <BatteryIconSvg className="w-4"/>
                    </div>
                </div>
                
                {/* Text section - remains inline */}
                <div className="flex flex-wrap items-center justify-start text-xs sm:text-sm space-x-1">
                    <p>Space</p>
                    <p className="font-semibold">3 problems</p>
                    <p>to continue your streak</p>
                </div>
                
                {/* Days section */}
                <div>
                    <div className="flex justify-between space-x-2">
                        {[
                            { icon: CurrentBoldProgressIconSvg, day: 'Th', active: true },
                            { icon: CurrentProgressIconSvg, day: 'F', active: false },
                            { icon: CurrentProgressIconSvg, day: 'S', active: false },
                            { icon: CurrentProgressIconSvg, day: 'Su', active: false },
                            { icon: CurrentProgressIconSvg, day: 'M', active: false }
                        ].map(({ icon: Icon, day, active }) => (
                            <div key={day} className="flex flex-col items-center space-y-2">
                                <div className="flex justify-center w-8 sm:w-12">
                                    <Icon />
                                </div>
                                <div className={`text-sm sm:text-lg ${active ? 'font-semibold' : 'font-normal text-gray-500'}`}>
                                    {day}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
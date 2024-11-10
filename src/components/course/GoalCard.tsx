export default function GoalCard () {
    return (
        <div className="border-2 border-gray-200 flex justify-start gap-4 p-4 rounded-3xl">
            <div>
                <img className="h-auto max-w-lg rounded-lg" src="/assets/images/leagues-locked.svg" alt="image description"/>
            </div>
            <div className="text-start py-2">
                <div className="text-sm text-black font-bold">
                    UNLOCK LEAGUES
                </div>
                <div className="text-md text-gray-400 font-light">
                    70 of 175 XP
                </div>
            </div>
        </div>
    )
}
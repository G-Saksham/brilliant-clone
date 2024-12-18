type cardProps = {
    type?: string,
    label1?: string,
    label2?: string,
    logo?: string,
    className?: string
    classNameImg? : string
}

export default function Cards ({type, label1, label2, logo, className, classNameImg}: cardProps) {
    return (
        <div className="border-2 rounded-3xl border-b-4 border-gray-200 relative hover:border-gray-400">
            <div className="flex justify-end p-2 text-right absolute right-0 top-0 ">
                {(type === 'NEW') ? <div className="flex justify-end text-end px-2 rounded-md bg-green-600 text-xs font-semibold text-white">NEW</div> : null}
            </div>
            <div className="grid justify-center self-center p-10 pb-4 text-md">
                <div className="flex justify-center size-24">
                    <img className={`object-contain ${classNameImg}`} src={logo} alt={logo}/>
                </div>
                <div className="grid justify-center text-center font-bold pt-4">
                    <div className={className}>
                        {label1}
                    </div>
                    <div className="text-sm">
                        {label2}
                    </div>
                </div>
            </div>
        </div>
    )
}
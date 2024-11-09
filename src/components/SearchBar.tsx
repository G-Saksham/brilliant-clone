export default function SearchBar () {
    return (        
        <form className="w-full">   
            <label className="mb-2 text-sm font-medium text-black sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center text-black ps-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full px-6 py-3 ps-12 font-light text-md text-black border border-gray-300 rounded-full placeholder-gray-400 bg-white focus:border-black" placeholder="Search" required />
            </div>
        </form>
    )
}
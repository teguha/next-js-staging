"use client"

export default function ActivityNotAvailable(){
    return (
        <div className="flex flex-col items-center justify-center py-16 mt-10 ">
            <div className="relative">
                {/* SVG Icon - Modern Compass */}
                <svg 
                className="w-24 h-24 text-gray-300/40" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle 
                    cx="12" 
                    cy="12" 
                    r="9" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                />
                <path 
                    d="M14.5 9.5L9.5 14.5M14.5 9.5L9.5 9.5L9.5 14.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <circle 
                    cx="12" 
                    cy="12" 
                    r="1.5" 
                    fill="currentColor"
                />
                </svg>
                
                {/* Decorative gradient blur */}
                <div className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full scale-75" />
            </div>
            
            <div className="mt-6 text-center space-y-1">
                <p className="text-base font-medium text-gray-400">No Activity Yet</p>
                <p className="text-sm text-gray-500">No activities available at the moment.</p>
            </div>
        </div>
    )
}
import { Asterisk, LogOut, User as UserIcon } from 'lucide-react'

const Navbar = () => {
    // Mock user data for now
    const user = {
        name: "John Doe"
    }

    return (
        <nav className="w-full h-24 bg-white/80 backdrop-blur-md border-b border-neutral-100 flex items-center justify-between px-6 md:px-12 sticky top-0 z-50 font-[panchang,sans-serif]">
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <Asterisk className="text-primary w-6 h-6" />
                </div>
                <span className="font-bold text-xl tracking-tight hidden md:block">VOTE.</span>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200">
                        <UserIcon className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold leading-none">{user.name}</span>
                        <span className="text-xs text-neutral-500 font-medium mt-1">Voter ID: #8839</span>
                    </div>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-all text-xs font-bold text-neutral-600 hover:text-red-600 group">
                    <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                    <span>LOGOUT</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar

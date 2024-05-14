const Navbar = () => {
    return (
        <div>
            <div className="mb-60">
                <div className="navbar md:px-5 lg:px-10 bg-slate-50">
                    <div className="md:navbar-start">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold uppercase">TaskPlus</h2>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-grow justify-end">
                        <div className="dropdown navLink">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content right-3 z-[1] p-1 shadow bg-base-100 rounded-box w-28">
                                <li>Home</li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end hidden md:flex">
                        <div className="flex-none navLink">
                            <ul className="menu menu-horizontal px-1 lg:text-lg font-medium space-x-7 items-center">
                                <li>Home</li>
                                <li>Login</li>
                                <button className="bg-purple-700 text-slate-200 py-2 px-5 rounded-3xl">Join</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
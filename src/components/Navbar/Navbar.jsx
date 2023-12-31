
const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Menu</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="cursor-pointer normal-case text-3xl md:text-2xl sm:text:xl font-bold md:font-semibold sm:font-normal">Tea Tales</a>
            </div>
            <div className="navbar-end gap-1">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button style={{
                    borderRadius: '10px',
                    background: 'var(--linear, linear-gradient(270deg, #F00 0%, #FF8938 100%))'
                }} className="btn bg-blue-200 hover:bg-blue-800 text-white normal-case font-bold">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
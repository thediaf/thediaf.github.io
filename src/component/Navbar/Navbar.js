import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'
import NavLink from './NavLink';

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <nav className="bg-white shadow-auto flex dark:bg-gray-800">
            <div className="container px-6 mx-auto md:flex md:justify-between md:items-center
                            "
            >
                <div className="flex md:justify-between md:items-center h-24">
                    <div className="w-screen md:w-auto flex items-center justify-between">
                        <div>
                            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 
                                                md:text-2xl dark:hover:text-gray-300"
                            >
                                Thediaf
                            </a>
                        </div>
                        <div className="flex md:hidden">
                            <button type="button" 
                                className="text-gray-500 dark:text-gray-200 transition delay-150 duration-500 transform scale-110" 
                                aria-label="toggle menu" onClick={handleClick}
                            >
                            {click ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className={click ? 'items-center md:flex transform transition ease-linear duration-1000 scale-110 delay-1000 block' : 'items-center flex-none md:flex hidden'}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <NavLink link="/" title="home" closeMobileMenu={closeMobileMenu} />
                        <NavLink link="about" title="about" closeMobileMenu={closeMobileMenu} />
                        <NavLink link="skills" title="skills" closeMobileMenu={closeMobileMenu} />
                        <NavLink link="works" title="works" closeMobileMenu={closeMobileMenu} />
                        <NavLink link="contact" title="contact" closeMobileMenu={closeMobileMenu} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
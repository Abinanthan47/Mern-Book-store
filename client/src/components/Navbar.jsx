import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'About', path: '/about' },
        { link: 'Shop', path: '/shop' },
        { link: 'Sell Your book', path: '/admin/dashboard' },
        { link: 'Blog', path: '/blog' },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-2 lg:px-24 px-4  ${isSticky ? 'sticky top-0 left-0 right-0 ' : ''}`}>
                <div className="container mx-auto flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className='text-3xl font-semibold  font-kanit   text-[#007D2C] flex items-center gap-2'>
                        Booksy
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-12 font-kanit">
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className="text-base text-black uppercase cursor-pointer hover:text-[#007D2C]">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
                        {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden space-y-4 px-4 mt-12 py-7 bg-[#007D2C] text-white ${isMenuOpen ? 'block ' : 'hidden'}`}>
                    <div className="container mx-auto py-4">
                        {navItems.map(({ link, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className="block text-base uppercase cursor-pointer hover:text-[#07F17D] py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

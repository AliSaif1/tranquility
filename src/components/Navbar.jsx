import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { path: "/", name: "Home" },
        { path: "/services", name: "Services" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" }
    ];

    return (
        <header className={`
            fixed top-0 left-0 w-full
            bg-primary-600 text-white shadow-md
            transition-all duration-300 ease-in-out
            ${isScrolled ? 'shadow-lg' : ''}
            md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-2rem)] md:max-w-7xl md:rounded-full
            z-50
        `}>
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center" aria-label="Home">
                        <img
                            src="/logo.png"
                            alt="Tranquility Logo"
                            className="h-[50px] w-[275px]"
                            width={275}
                            height={50}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="hover:text-accent-200 transition-colors py-2 px-1"
                                    aria-label={link.name}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-accent-200 rounded p-1"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                        }`}
                >
                    <ul className="pb-2">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="block py-3 px-4 hover:bg-primary-dark transition-colors"
                                    onClick={closeMobileMenu}
                                    aria-label={link.name}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
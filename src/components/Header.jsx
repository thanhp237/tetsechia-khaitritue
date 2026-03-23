import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Trang chủ', href: '#home' },
        { name: 'Về dự án', href: '#about' },
        { name: 'Lịch trình', href: '#timeline' },
        { name: 'Thư viện', href: '#gallery' },
        { name: 'Tài chính', href: '#finances' },
        { name: 'Tài nguyên', href: '#resources' },
        { name: 'Liên hệ', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 group">
                    <img src="/images/logo.jpg" alt="Tết Sẻ Chia" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full shadow-sm group-hover:scale-110 transition-transform" />
                    <span className="font-display font-bold text-xl md:text-2xl text-brand-dark hidden sm:block">Khai Trí Tuệ</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-orange font-medium transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary py-2 px-5 text-sm">Đồng hành ngay</a>
                </nav>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 font-medium w-full text-center py-2 hover:bg-brand-light"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

export default Header;

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: '/', label: '서비스 소개' },
        { href: '/portfolio', label: '포트폴리오' },
        { href: '/pricing', label: '가격 안내' },
        { href: '/faq', label: 'FAQ' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Web<span>Flosy</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.links}>
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className={styles.link}>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
                    문의하기
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileLinks}>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.mobileLink}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={`btn btn-primary ${styles.mobileCta}`}
                            onClick={closeMenu}
                        >
                            문의하기
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

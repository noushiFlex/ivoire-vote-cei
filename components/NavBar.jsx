"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { 
      name: 'Élections', 
      href: '#',
      submenu: [
        { name: 'Présidentielle', href: '/elections/presidentielle' },
        { name: 'Législatives', href: '/elections/legislatives' },
        { name: 'Municipales', href: '/elections/municipales' },
      ]
    },
    { name: 'Inscription', href: '/inscription' },
    { name: 'Résultats', href: '/resultats' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-12 w-auto relative mr-3">
              <Image 
                src="/images/Logo-CEI.png" 
                alt="Logo Commission Électorale Indépendante" 
                width={80} 
                height={48} 
                priority
              />
            </div>
            <div>
              <div className={`font-bold text-lg ${isScrolled ? 'text-blue-800' : 'text-white'}`}>Commission Électorale</div>
              <div className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>République de Côte d'Ivoire</div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link 
                  href={link.href} 
                  className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-orange-300'} transition-colors`}
                >
                  {link.name}
                  {link.submenu && (
                    <span className="ml-1">▼</span>
                  )}
                </Link>
                
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top-left">
                    <div className="py-2">
                      {link.submenu.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Connexion button */}
          <div className="hidden lg:block">
            <Link 
              href="/connexion" 
              className={`${
                isScrolled 
                  ? 'bg-blue-800 hover:bg-blue-900 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              } px-5 py-2 rounded-md font-medium transition-colors`}
            >
              Espace Électeur
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <div key={index}>
                <Link 
                  href={link.href} 
                  className="font-medium text-gray-700 hover:text-blue-800 block py-2"
                  onClick={() => !link.submenu && setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                
                {link.submenu && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200 space-y-2">
                    {link.submenu.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex}
                        href={subItem.href}
                        className="block py-1 text-gray-600 hover:text-blue-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link 
                href="/connexion" 
                className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-md font-medium inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Espace Électeur
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-cyan-glow mr-2" />
            <span className="font-orbitron text-xl font-bold text-white">
              <span className="text-cyan-glow">$</span>CIGAR
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Mission', 'Story', 'Technology', 'Community', 'Join'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-exo text-gray-300 hover:text-cyan-glow transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-glow group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Connect Wallet Button */}
          <button className="hidden md:block button-primary">
            Connect Wallet
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-cyan-glow" />
            ) : (
              <Menu className="h-6 w-6 text-cyan-glow" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {['Mission', 'Story', 'Technology', 'Community', 'Join'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="font-exo text-xl text-gray-300 hover:text-cyan-glow transition-colors"
              onClick={toggleMobileMenu}
            >
              {item}
            </a>
          ))}
          <button className="button-primary mt-6">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
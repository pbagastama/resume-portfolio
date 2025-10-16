import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}>
      <div className='container px-4'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#');
            }}
            className='text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity'>
            BP
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className='text-muted-foreground hover:text-primary transition-colors font-medium relative group'>
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300' />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle menu'>
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-background/95 backdrop-blur-lg border-b border-border'>
          <div className='container px-4 py-6 space-y-4'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className='block text-muted-foreground hover:text-primary transition-colors font-medium py-2'>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Training Programs', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed inset-x-0 top-0 z-[9999]',
        scrolled
          ? 'bg-[#FFF2CF]/90 backdrop-blur-xl border-b border-orange-200 shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF5B32] to-[#FF7A45] shadow-lg">
            <Cpu className="h-5 w-5 text-white" />
          </div>

          <span className="font-display text-lg font-bold text-gray-900">
            ROBOTECH{' '}
            <span className="bg-gradient-to-r from-[#FF5B32] to-[#FF7A45] bg-clip-text text-transparent">
              EDUCATION
            </span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-orange-100 hover:text-[#FF5B32]"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <Button
            onClick={() => handleNavClick('#book')}
            className="hidden sm:flex bg-gradient-to-r from-[#FF5B32] to-[#FF7A45] text-white hover:opacity-90"
          >
            Book Workshop
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-orange-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-[#FF5B32]" />
            ) : (
              <Menu className="h-6 w-6 text-[#FF5B32]" />
            )}
          </Button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full w-full border-t border-orange-200 bg-[#FFF2CF] shadow-2xl lg:hidden"
          >
            <div className="space-y-2 p-5">

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full rounded-lg px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-orange-100 hover:text-[#FF5B32]"
                >
                  {link.label}
                </button>
              ))}

              <Button
                onClick={() => handleNavClick('#book')}
                className="mt-4 w-full bg-gradient-to-r from-[#FF5B32] to-[#FF7A45] text-white hover:opacity-90"
              >
                Book Workshop
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

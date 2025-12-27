import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Tagline */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="bg-cyan-500 text-white p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.2 18.2A9 9 0 0 1 2 12c0-8 10-10 10-10s10 2 10 10a9 9 0 0 1-2.2 6.2c-.6.7-1.2 1.2-1.9 1.5l-3.1 1.6a2 2 0 0 1-2.7-.9l-1.1-2.2a1 1 0 0 0-1.8 0l-1.1 2.2a2 2 0 0 1-2.7.9L5.9 19.6a5 5 0 0 1-1.7-1.4Z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Mantist
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Providing world-class dental care with a focus on comfort, technology, and long-term oral health for the whole family.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} /> Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} /> Our Services
                </a>
              </li>
              <li>
                <a href="/#technology" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} /> Technology
                </a>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} /> Smile Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} /> Dental Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-cyan-500 shrink-0" />
                <span>
                  Tilak Nagar, Indore-452018,<br />
                  Madhya Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-cyan-500 shrink-0" />
                <span>07942691095</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-500 shrink-0" />
                <span>care@mantist.com</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">09:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">09:00 AM - 06:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-rose-400 font-medium">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Mantist Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
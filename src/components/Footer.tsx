import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-xl font-bold">USAMEC</span>
            </div>
            <p className="text-gray-300 mb-4">
              Udupi Shree Adamaru Matha Education Council - Committed to excellence in education since our inception.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-300 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-300 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-300 hover:text-orange-500 cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-gray-300 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="/institutions" className="text-gray-300 hover:text-orange-500 transition-colors">Institutions</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Academic</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Faculty</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={16} className="text-orange-500 mt-1 mr-2" />
                <span className="text-gray-300 text-sm">Adamaru, Udupi District, Karnataka 576101</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-orange-500 mr-2" />
                <span className="text-gray-300 text-sm">+91 820 2570000</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-orange-500 mr-2" />
                <span className="text-gray-300 text-sm">info@usamec.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Udupi Shree Adamaru Matha Education Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
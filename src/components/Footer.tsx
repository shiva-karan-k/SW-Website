import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src="/IMG-20250714-WA0000.jpg"
              alt="Techstars Startup Weekend Visakhapatnam"
              className="h-16 w-auto mb-6 filter brightness-0 invert object-cover"
              style={{ objectPosition: 'center', clipPath: 'inset(15% 0 15% 0)' }}
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Techstars Startup Weekend Visakhapatnam brings together entrepreneurs, 
              developers, and designers for 54 hours of intense collaboration and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#schedule" className="text-gray-300 hover:text-green-400 transition-colors">Schedule</a></li>
              <li><a href="#sponsors" className="text-gray-300 hover:text-green-400 transition-colors">Sponsors</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">GITAM University</p>
                  <p className="text-gray-300">Visakhapatnam, AP</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:hello@swvizag.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  hello@swvizag.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-green-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Startup Weekend Visakhapatnam. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
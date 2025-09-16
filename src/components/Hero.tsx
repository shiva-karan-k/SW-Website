import React from 'react';
import { Calendar, MapPin, Users, Zap } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const Hero = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img
                src="/Logo.jpg"
                alt="Techstars Startup Weekend Visakhapatnam"
                className="h-40 w-auto mx-auto lg:mx-0 mb-6 object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build. Launch. 
              <span className="text-green-600 block">Learn.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Join entrepreneurs, designers, and developers for 54 hours of intense collaboration. 
              Turn your idea into a real startup with mentorship from industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register Now - ₹1,500
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-600 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
            
            {/* Event Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Mentors</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">Vizag</div>
                <div className="text-sm text-gray-600">Location</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Date & Time</h4>
                    <p className="text-gray-600">October 31 - November 2, 2025</p>
                    <p className="text-gray-600">Friday 10:00 AM - Sunday 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Venue</h4>
                    <p className="text-gray-600">GITAM University</p>
                    <p className="text-gray-600">Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Who Can Join</h4>
                    <p className="text-gray-600">Entrepreneurs, Developers, Designers</p>
                    <p className="text-gray-600">Students & Professionals Welcome</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-full shadow-lg animate-pulse">
              <Zap className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-900 text-white p-4 rounded-full shadow-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </>
  );
};

export default Hero;
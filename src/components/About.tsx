import React from 'react';
import { Lightbulb, Code, Presentation, Trophy } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const About = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  const steps = [
    {
      icon: Lightbulb,
      title: "Pitch Your Idea",
      description: "Present your startup idea to the crowd and recruit team members with complementary skills.",
      time: "Friday Evening"
    },
    {
      icon: Code,
      title: "Build Your MVP",
      description: "Work with your team to develop a minimum viable product over the weekend.",
      time: "Saturday"
    },
    {
      icon: Presentation,
      title: "Present & Demo",
      description: "Pitch your startup to judges and showcase what you've built in 54 hours.",
      time: "Sunday"
    },
    {
      icon: Trophy,
      title: "Win & Network",
      description: "Compete for prizes and connect with mentors, investors, and like-minded entrepreneurs.",
      time: "Sunday Evening"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What is Startup Weekend?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Startup Weekend is a global grassroots movement of active and empowered entrepreneurs 
            who are learning the basics of founding startups and launching successful ventures.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-200 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-sm font-medium text-green-600 mb-2">{step.time}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* Why Participate */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Participate?</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Learn lean startup methodology from industry experts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Network with entrepreneurs, developers, and designers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Get feedback from experienced mentors and judges</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Win prizes and gain exposure for your startup idea</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Join a global community of startup enthusiasts</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-green-400 mb-2">54</div>
                <div className="text-xl mb-4">Hours to Build</div>
                <div className="text-4xl font-bold text-white mb-2">₹50,000</div>
                <div className="text-lg text-gray-300 mb-6">Total Prize Money</div>
                <button 
                  onClick={() => setIsRegistrationOpen(true)}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Register Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </section>
  );
};

export default About;
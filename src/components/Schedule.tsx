import React from 'react';
import { Clock, Coffee, Mic, Code2, Presentation } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const Schedule = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  const schedule = [
    {
      day: "Friday, October 31, 2025",
      color: "bg-blue-500",
      events: [
        {
          time: "10:00 AM",
          title: "Registration & Networking",
          description: "Check-in, meet fellow participants, and networking",
          icon: Coffee
        },
        {
          time: "7:30 PM",
          title: "Opening Ceremony",
          description: "Welcome, introductions, and event overview",
          icon: Mic
        },
        {
          time: "8:00 PM",
          title: "60-Second Pitches",
          description: "Pitch your idea and form teams",
          icon: Presentation
        },
        {
          time: "10:00 PM",
          title: "Team Formation",
          description: "Finalize teams and start planning",
          icon: Coffee
        }
      ]
    },
    {
      day: "Saturday, November 1, 2025",
      color: "bg-green-500",
      events: [
        {
          time: "9:00 AM",
          title: "Breakfast & Team Check-in",
          description: "Fuel up and sync with your team",
          icon: Coffee
        },
        {
          time: "10:00 AM",
          title: "Mentor Speed Dating",
          description: "Get advice from industry experts",
          icon: Mic
        },
        {
          time: "12:00 PM",
          title: "Lunch Break",
          description: "Network and recharge",
          icon: Coffee
        },
        {
          time: "1:00 PM - 9:00 PM",
          title: "Build Time",
          description: "Develop your MVP with mentor support",
          icon: Code2
        }
      ]
    },
    {
      day: "Sunday, November 2, 2025",
      color: "bg-purple-500",
      events: [
        {
          time: "9:00 AM",
          title: "Breakfast & Final Sprint",
          description: "Last push to complete your MVP",
          icon: Coffee
        },
        {
          time: "2:00 PM",
          title: "Pitch Preparation",
          description: "Finalize presentations with mentor feedback",
          icon: Presentation
        },
        {
          time: "4:00 PM",
          title: "Final Pitches",
          description: "Present to judges and audience",
          icon: Mic
        },
        {
          time: "6:00 PM",
          title: "Awards & Closing",
          description: "Winner announcements and celebration",
          icon: Coffee
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three intensive days of learning, building, and networking with fellow entrepreneurs
          </p>
        </div>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              <div className="flex items-center mb-8">
                <div className={`${day.color} w-4 h-4 rounded-full mr-4`}></div>
                <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <event.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-500">{event.time}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Join the Action?
            </h3>
            <p className="text-gray-600 mb-6">
              Register now to secure your spot at Startup Weekend Visakhapatnam
            </p>
            <button 
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold transform hover:scale-105"
            >
              Register Now - ₹1,500
            </button>
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

export default Schedule;
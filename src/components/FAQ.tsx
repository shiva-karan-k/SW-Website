import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const faqs = [
    {
      question: "What is the registration fee?",
      answer: "The registration fee is ₹1,500 which includes meals, snacks, swag, and access to all event activities including mentorship sessions."
    },
    {
      question: "Do I need to have a team to participate?",
      answer: "No! You can come solo and form a team during the event. We have a team formation session on Friday evening where you can pitch your ideas and recruit team members."
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, charger, and any other development tools you prefer. We'll provide WiFi, workspace, meals, and plenty of coffee!"
    },
    {
      question: "Who can participate?",
      answer: "Anyone 18+ can participate! We welcome entrepreneurs, developers, designers, business professionals, and students. No prior startup experience required."
    },
    {
      question: "What are the prizes?",
      answer: "We have ₹50,000 in total prizes including cash awards, incubation opportunities, and mentorship packages for the top teams."
    },
    {
      question: "Will there be mentorship available?",
      answer: "Yes! We have 15+ experienced mentors from various industries who will be available throughout the weekend to provide guidance and feedback."
    },
    {
      question: "Can I work on an existing project?",
      answer: "No, all projects must start from scratch during the event. However, you can come with an idea and start building it from Friday evening."
    },
    {
      question: "Is accommodation provided?",
      answer: "Accommodation is not provided, but we can help connect you with local participants for shared accommodations. The venue will be open 24/7 during the event."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Startup Weekend Visakhapatnam
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to us and we'll be happy to help
            </p>
            <button 
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contact Us
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

export default FAQ;
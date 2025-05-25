'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMembers = [
  {
    name: 'Supriya Pandey',
    role: 'Founder & CEO',
    expertise: 'Maternal Health Technology & IoT Innovation',
    background: 'Pioneering wireless monitoring solutions for expectant mothers with expertise in scalable architecture and IoT systems. Architected and developed the entire EcoBump platform including ESP32 integration, Bluetooth connectivity, real-time heart monitoring algorithms, and the complete web application.',
    image: '/gautam.jpg', // Replace with actual image
    focus: 'Product Vision & Strategy'
  },
  {
  name: 'Sandeep Dwivedi',
  role: 'Chief Technology Officer & Lead Developer',
  expertise: 'IoT Architecture, Real-time Systems & Healthcare Technology',
  background: ' Leading all technical development at EcoBump, from device connectivity and real-time data processing to user interface design. Built the complete wireless monitoring ecosystem from ground up.',
  image: '/sandeep.jpg', // Replace with actual image
  focus: 'End-to-End Technical Leadership'
},
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-md">E</div>
            <span className="ml-3 text-xl font-bold text-gray-900">EcoBump</span>
          </Link>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about EcoBump? Need support with your device? Our dedicated team is here to help you on your pregnancy monitoring journey.
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-pink-600 to-rose-600 p-10 text-white">
                <h2 className="text-3xl font-bold mb-6">Contact EcoBump</h2>
                <p className="text-pink-100 mb-8">
                  We're committed to supporting you throughout your pregnancy journey. Reach out for device support, medical questions, or general inquiries.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-pink-100">Email Support</p>
                      <p className="font-medium">support@ecobump.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-pink-100">24/7 Support Hotline</p>
                      <p className="font-medium">+1-800-ECOBUMP</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-pink-100">Response Time</p>
                      <p className="font-medium">Within 2 hours</p>
                    </div>
                  </div>
                </div>

                {/* Support Features */}
                <div className="mt-8 p-4 bg-pink-500/30 rounded-lg">
                  <h4 className="font-semibold mb-2">What we can help with:</h4>
                  <ul className="text-sm text-pink-100 space-y-1">
                    <li>• Device setup and connectivity</li>
                    <li>• Heart rate monitoring questions</li>
                    <li>• Data interpretation guidance</li>
                    <li>• Technical troubleshooting</li>
                    <li>• Pregnancy health insights</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="Sarah Johnson"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="sarah@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="medical">Medical Questions</option>
                        <option value="billing">Billing & Orders</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none"
                      placeholder="Please describe your question or concern in detail..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 px-6 rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Dedicated Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Passionate professionals committed to revolutionizing maternal and fetal health monitoring
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {TeamMembers.map((member) => (
                <div 
                  key={member.name} 
                  className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-4 border-pink-100">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          width={80} 
                          height={80} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-pink-600 font-medium">{member.role}</p>
                        <p className="text-sm text-gray-500 mt-1">{member.focus}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Expertise:</h4>
                        <p className="text-gray-600 text-sm">{member.expertise}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Background:</h4>
                        <p className="text-gray-600 text-sm">{member.background}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Support Section */}
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              For urgent medical concerns or device malfunctions during pregnancy monitoring, don't hesitate to reach out immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-800-ECOBUMP" 
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors"
              >
                Call Support Now
              </a>
              <a 
                href="mailto:urgent@ecobump.com" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-pink-600 transition-colors"
              >
                Emergency Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
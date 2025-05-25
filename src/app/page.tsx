"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      {/* Sticky Navbar - Enhanced Professional Design with Better Contrast */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
          : "py-4 bg-[#0F172A]/80 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative pt-4 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between" aria-label="Global">
              {/* Logo Section with Animation */}
              <div className="flex items-center flex-grow-0">
                <Link href="/" className="group flex items-center">
                  <span className="sr-only">EchoBump</span>
                  <div className="mr-2 h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg transform transition duration-300 group-hover:scale-110 shadow-md">E</div>
                  <span className={`text-xl font-bold ${scrolled ? 'text-[#1E3A8A]' : 'text-white'} transition-colors duration-300`}>EchoBump</span>
                </Link>
              </div>
              
              {/* Center Navigation Links with Improved Visibility */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-8">
                  <Link href="/Monitor" className={`font-medium ${scrolled ? 'text-gray-600 hover:text-[#1E3A8A]' : 'text-white hover:text-pink-300'} transition-colors duration-300 relative group`}>
                   Heart Monitor
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-[#1E3A8A]' : 'bg-pink-300'} transition-all duration-300 group-hover:w-full`}></span>
                  </Link>
                  <Link href="/women" className={`font-medium ${scrolled ? 'text-gray-600 hover:text-[#1E3A8A]' : 'text-white hover:text-pink-300'} transition-colors duration-300 relative group`}>
                    Pregnancy Care
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-[#1E3A8A]' : 'bg-pink-300'} transition-all duration-300 group-hover:w-full`}></span>
                  </Link>
                </div>
              </div>
              
              {/* Right Side - Login/Signup with Improved Visibility */}
              <div className="flex items-center space-x-5">
                <Link href="/login" className={`hidden md:block font-medium ${scrolled ? 'text-gray-600 hover:text-[#1E3A8A]' : 'text-white hover:text-pink-300'} transition-colors duration-300`}>
                  Login
                </Link>
                <Link href="/register" className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#1E3A8A] hover:bg-[#152a65] transition-colors duration-300 shadow-sm hover:shadow-md">
                  Sign up
                </Link>
                
                {/* Mobile Menu Button - Only visible on small screens */}
                <button type="button" className={`md:hidden inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-100' : 'text-white hover:text-pink-300 hover:bg-[#172B4D]'} focus:outline-none transition duration-150 ease-in-out`} aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section with Advanced Design */}
      <div className="relative min-h-screen overflow-hidden flex items-center text-white"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 to-[#172B4D]/77"></div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute animate-pulse bg-pink-400/10 rounded-full -top-20 -left-20 w-96 h-96 blur-3xl"></div>
          <div className="absolute animate-pulse bg-pink-400/10 rounded-full -bottom-20 -right-20 w-96 h-96 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Title with Staggered Animation */}
            <h1 className="text-5xl font-bold mb-6 relative">
              <span className="block text-white">Advanced</span>
              <span className="block text-[#FF6B9D] transform transition-all duration-300 hover:scale-105 hover:translate-x-2">
                Maternal & Fetal Monitoring
              </span>
            </h1>

            {/* Description with Hover Effect */}
            <p className="text-gray-300 text-lg mb-10 relative group">
              <span className="relative">
                Continuous real-time monitoring of maternal and fetal heart rates with our wireless EchoBump device.
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B9D] transition-all duration-300 group-hover:w-full"></span>
              </span>
              {' '}
              <span className="relative">
                Get instant alerts, track patterns, and ensure the health of both mother and baby throughout pregnancy.
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B9D] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </p>

            {/* Action Buttons with Advanced Hover */}
            <div className="flex justify-center space-x-6 mb-10">
              <Link 
                href="/Monitor/" 
                className="px-12 py-4 text-lg bg-[#FF6B9D] text-white rounded-xl 
                transform transition-all duration-300 ease-in-out
                hover:bg-[#FF5A8C] hover:shadow-2xl hover:scale-105
                flex items-center space-x-3 group
                relative overflow-hidden
                shadow-md shadow-[#FF6B9D]/50"
              >
                {/* Gradient Overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D]/20 to-[#FF6B9D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                <span className="relative z-10">Start Monitoring</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>

              <Link 
                href="/register" 
                className="px-12 py-4 text-lg border-2 border-[#FF6B9D] text-[#FF6B9D] rounded-xl
                transform transition-all duration-300 ease-in-out
                hover:bg-[#FF6B9D] hover:text-white hover:shadow-2xl hover:scale-105
                relative overflow-hidden
                shadow-md shadow-[#FF6B9D]/30"
              >
                {/* Subtle Gradient Overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D]/10 to-[#FF6B9D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>

            {/* Medical Grade Badge */}
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <div className="w-6 h-6 bg-[#FF6B9D]/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF6B9D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">Medical Grade Monitoring Technology</span>
            </div>
          </div>
        </div>

        {/* Subtle Disclaimer */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-gray-500 text-xs px-4">
          * EchoBump provides continuous monitoring support. Always consult your healthcare provider for medical decisions.
        </div>

        {/* Optional: Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundSize: '50px 50px',
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)'
          }}></div>
        </div>
      </div>

      {/* How It Works Section - Enhanced with Light Background */}
      <div className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title with Animation */}
          <div className="text-center relative">
            <div className="inline-block">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-50 rounded-full animate-pulse"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] relative">How EchoBump Works</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto mt-4"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined wireless monitoring system for continuous maternal and fetal heart rate tracking
            </p>
          </div>

          {/* Cards Grid with Animation */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Card 1: Connect Device - Enhanced */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Connect EchoBump device wirelessly"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] mb-6 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect Device</h3>
                <p className="text-gray-600 text-lg">
                  Wirelessly connect your EchoBump device via Bluetooth and ESP32. The comfortable wearable sensor automatically pairs with your smartphone.
                </p>
                <div className="mt-6 bg-pink-50 rounded-lg p-3">
                  <p className="text-sm text-pink-700"><strong>Easy Setup:</strong> One-time pairing with automatic reconnection for seamless monitoring.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Real-time Monitoring - Enhanced */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Real-time heart rate monitoring"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] mb-6 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-time Monitoring</h3>
                <p className="text-gray-600 text-lg">
                  Continuous tracking of both maternal and fetal heart rates with instant data transmission via ESP32 and live visualization on your mobile app.
                </p>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Monitoring Accuracy</span>
                    <span className="text-sm font-medium text-pink-700">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Smart Alerts & Reports - Enhanced */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Smart alerts and health reports"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] mb-6 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Alerts & Reports</h3>
                <p className="text-gray-600 text-lg">
                  Receive instant notifications for irregular patterns, generate comprehensive health reports, and share data with your healthcare provider.
                </p>
                <div className="mt-6 flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Instant Alerts</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trend Analysis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Healthcare Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call-to-action button with monitor link */}
          <div className="mt-16 text-center">
            <a 
              href="/Monitor/" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Monitoring Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose EchoBump - Enhanced Professional Section */}
      <div className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Enhanced Typography */}
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4 relative">
                Why Choose EchoBump
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto"></div>
            </div>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              Our advanced wireless technology makes maternal and fetal monitoring accessible, accurate, and continuous
            </p>
          </div>
          
          {/* Features Cards with Animation and Enhanced Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Wireless - Enhanced */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative group">
              <div className="absolute -top-10 inset-x-0 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B9D] to-[#FF5A8C] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Wireless Freedom</h3>
                <p className="text-gray-600">
                  Complete wireless monitoring via Bluetooth and ESP32 connectivity. Move freely while maintaining continuous tracking of both heart rates.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-500">Connection Reliability</span>
                    <span className="text-sm font-bold text-[#FF6B9D]">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-[#FF6B9D] h-1.5 rounded-full" style={{width: '99%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time - Enhanced */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative group">
              <div className="absolute -top-10 inset-x-0 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B9D] to-[#FF5A8C] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-12 text-center">
               <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Data</h3>
               <p className="text-gray-600">
                 Instant data transmission and live monitoring with ESP32 technology. Get immediate updates on maternal and fetal heart rates every second.
               </p>
               <div className="mt-6 pt-6 border-t border-gray-100">
                 <div className="flex items-center justify-center">
                   <div className="flex items-center space-x-1 text-[#FF6B9D]">
                     <span className="block w-2 h-2 rounded-full bg-[#FF6B9D] animate-pulse"></span>
                     <span className="block w-2 h-2 rounded-full bg-[#FF6B9D] animate-pulse"></span>
                     <span className="block w-2 h-2 rounded-full bg-[#FF6B9D] animate-pulse"></span>
                   </div>
                   <span className="ml-2 text-sm font-medium text-gray-500">Live streaming</span>
                 </div>
               </div>
             </div>
           </div>

           {/* Comfortable - Enhanced */}
           <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative group">
             <div className="absolute -top-10 inset-x-0 flex justify-center">
               <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B9D] to-[#FF5A8C] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                 </svg>
               </div>
             </div>
             <div className="mt-12 text-center">
               <h3 className="text-xl font-bold text-gray-900 mb-4">Comfortable Design</h3>
               <p className="text-gray-600">
                 Soft, skin-friendly materials designed for extended wear throughout pregnancy. Lightweight and ergonomic for maximum comfort during daily activities.
               </p>
               <div className="mt-6 pt-6 border-t border-gray-100">
                 <div className="flex justify-center space-x-4">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF6B9D" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                   </svg>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF6B9D" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                   </svg>
                 </div>
               </div>
             </div>
           </div>

           {/* Comprehensive - Enhanced */}
           <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative group">
             <div className="absolute -top-10 inset-x-0 flex justify-center">
               <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B9D] to-[#FF5A8C] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                 </svg>
               </div>
             </div>
             <div className="mt-12 text-center">
               <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Care</h3>
               <p className="text-gray-600">
                 Complete pregnancy monitoring solution with detailed analytics, trend tracking, and seamless healthcare provider integration for optimal care.
               </p>
               <div className="mt-6 pt-6 border-t border-gray-100">
                 <div className="flex items-center justify-center space-x-2">
                   <span className="text-[#FF6B9D] font-bold">24/7</span>
                   <span className="text-sm text-gray-500">continuous monitoring</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         {/* Call to Action */}
         <div className="mt-16 text-center">
           <a 
             href="/register" 
             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#FF6B9D] to-[#FF5A8C] hover:from-[#FF5A8C] hover:to-[#FF4979] transition-all duration-300 transform hover:scale-105"
           >
             Explore All Features
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </a>
         </div>
       </div>
     </div>

     {/* Professional Footer with Modern Design */}
     <footer className="bg-gradient-to-r from-[#1A1A2E] to-[#16213E] text-white">
       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
         {/* Top Section with Logo and Description */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
           {/* Brand */}
           <div className="col-span-1 md:col-span-2">
             <div className="flex items-center mb-4">
               <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-md mr-3">E</div>
               <span className="text-2xl font-bold text-white">EchoBump</span>
             </div>
             <p className="text-gray-400 mb-6 max-w-md">
               Advanced wireless maternal and fetal heart monitoring system for continuous pregnancy care and real-time health insights throughout your journey.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-400 flex items-center justify-center transition-colors duration-300">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
               </a>
             </div>
           </div>

           {/* Quick Links */}
           <div>
             <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
             <ul className="space-y-3">
               <li>
                 <a href="/Monitor/" className="text-gray-400 hover:text-[#FF6B9D] transition duration-300 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                   Heart Monitoring
                 </a>
               </li>
               <li>
                 <a href="/women" className="text-gray-400 hover:text-[#FF6B9D] transition duration-300 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                   Pregnancy Care
                 </a>
               </li>
               <li>
                 <a href="#" className="text-gray-400 hover:text-[#FF6B9D] transition duration-300 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                   Real-time Alerts
                 </a>
               </li>
             </ul>
           </div>

           {/* Support */}
           <div>
             <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
             <ul className="space-y-3">
               <li>
                 <Link href="/privacy" className="text-gray-400 hover:text-[#FF6B9D] transition duration-300 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                   Privacy
                 </Link>
               </li>
               <li>
                 <Link href="/terms" className="text-gray-400 hover:text-[#FF6B9D] transition duration-300 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                   Terms
                 </Link>
               </li>
               <li>
                 <Link href="/contact" className="text-gray-400 hover:text-[#FF6B9D] transition duration-300 flex items-center">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                   Contact
                 </Link>
               </li>
             </ul>
           </div>
         </div>

         {/* Bottom Section */}
         <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-gray-800">
           <p className="text-gray-400 text-sm">© {new Date().getFullYear()} EchoBump. All rights reserved.</p>
         </div>
       </div>
     </footer>

     <style jsx global>{`
       .bg-grid-pattern {
         background-size: 50px 50px;
         background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
       }
     `}</style>
   </main>
 );
}
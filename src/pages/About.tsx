
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import ButtonPrimary from '@/components/ButtonPrimary';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-[#3563E9] font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-[#3563E9] font-medium">About us</Link>
          </nav>
          <Link to="/demo">
            <ButtonPrimary className="bg-[#3563E9] hover:bg-[#2854d8]">
              Get Started Free
            </ButtonPrimary>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#192440] mb-6">About us</h1>
          
          <div className="bg-[#F3F6FF] p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-[#3563E9]">🧑‍💻</span> Titus & Prahladh – Digital Marketing Portfolio
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Helping local businesses grow with AI-powered marketing tools
            </p>

            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="text-[#3563E9]">👋</span> About Us
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              We're Titus & Prahladh, a young marketing duo from Bangalore, India. At just 18, we've started helping local businesses — from clinics to furniture stores — generate real leads using smart funnels, AI tools, and a deep understanding of digital behavior.
            </p>
            <p className="text-lg text-gray-700">
              We don't have decades of experience — just a passion for solving real problems and making marketing simple and effective.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Company Name:</span> AutoLead Systems</p>
              <p><span className="font-medium">Email:</span> <a href="mailto:prahladh416@gmail.com" className="text-[#3563E9] hover:underline">prahladh416@gmail.com</a></p>
              <p><span className="font-medium">Phone:</span> <a href="tel:+918431818662" className="text-[#3563E9] hover:underline">+91 8431818662</a></p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo />
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              © 2025 AutoLead Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

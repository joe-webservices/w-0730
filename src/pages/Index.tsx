import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import Logo from '@/components/Logo';

// New brand colors:
// Primary: #3563E9 (bright blue)
// Secondary: #36B37E (green)
// Accent: #FFB620 (amber)
// Dark: #192440
// Light: #F3F6FF

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#3563E9] text-white p-2 rounded-lg">
              <Zap size={24} />
            </div>
            <span className="text-[#192440] text-2xl font-bold">AutoLead</span>
            <span className="text-[#3563E9] text-2xl font-bold">Systems</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-[#3563E9] font-medium transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#3563E9] font-medium transition-colors">Testimonials</a>
            <a href="#about" className="text-gray-600 hover:text-[#3563E9] font-medium transition-colors">About Us</a>
          </nav>
          <ButtonPrimary className="bg-[#3563E9] hover:bg-[#2854d8]">
            Get Started Free
          </ButtonPrimary>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full pt-16 pb-24 px-4 bg-gradient-to-br from-[#F3F6FF] to-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - Updated with new headline and subheadline */}
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#192440]">
              Let AI Fill Your Calendar <span className="text-[#3563E9]">While You Run the Business</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              24/7 lead generation, follow-up, and automation that brings in real customers — not just clicks.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/demo">
                <ButtonPrimary className="bg-[#3563E9] hover:bg-[#2854d8]">
                  Start Your 30-Day Free Trial — No Credit Card Needed
                </ButtonPrimary>
              </Link>
              <ButtonSecondary className="border-[#3563E9] text-[#3563E9]" icon={true}>
                See How It Works
              </ButtonSecondary>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" />
              </div>
              <p className="text-sm text-gray-600">Trusted by <span className="font-semibold">2,000+</span> service businesses</p>
            </div>
          </div>
          
          {/* Right Content - Dashboard Mockup */}
          <div className="lg:w-1/2 flex justify-center relative animate-fade-in">
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg">
              <div className="bg-[#F3F6FF] rounded-xl p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <span className="text-[#192440] font-bold text-xl">Lead Dashboard</span>
                    <span className="text-gray-500 text-sm">Today's Overview</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <Users size={20} className="text-[#3563E9]" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-[#192440]">New Leads</span>
                    <span className="text-[#36B37E] font-bold">+12</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div className="bg-[#3563E9] h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>8:00 AM</span>
                    <span>Now</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare size={18} className="text-[#3563E9]" />
                      <span className="text-gray-700">Conversations</span>
                    </div>
                    <p className="text-[#192440] font-bold text-xl">24</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 size={18} className="text-[#36B37E]" />
                      <span className="text-gray-700">Conversion</span>
                    </div>
                    <p className="text-[#192440] font-bold text-xl">32%</p>
                  </div>
                </div>
                
                <div className="bg-[#3563E9] text-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <p className="font-medium mb-1">AI Assistant Status</p>
                    <p className="text-sm opacity-80">Actively generating leads</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-[#FFB620]/10 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-[#3563E9]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Taglines Section - Updated with new taglines */}
      <section className="w-full py-16 bg-[#192440] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-3">"From Click to Customer — Automatically"</h3>
              <p className="text-white/80">Our AI works around the clock so you don't have to.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-3">"You Focus on Service, We'll Handle the Leads"</h3>
              <p className="text-white/80">Turn your digital presence into a customer-generating machine.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-3">"Built for Busy Businesses Who Don't Have Time to Chase Leads"</h3>
              <p className="text-white/80">The perfect partnership for service industry growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#3563E9] font-semibold">POWERFUL FEATURES</span>
            <h2 className="text-4xl font-bold mt-2 text-[#192440]">Everything you need to grow your service business</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our platform combines AI, automation, and industry expertise to create a complete lead generation system that works 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#F3F6FF] rounded-lg flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-[#3563E9]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">AI Chat Automation</h3>
              <p className="text-gray-600">
                Our smart chatbots engage with potential customers, answer questions, and qualify leads 24/7, even when you're off the clock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#F3F6FF] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3563E9]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">WhatsApp Integration</h3>
              <p className="text-gray-600">
                Connect with customers where they are. Our system integrates with WhatsApp for seamless follow-ups and notifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#F3F6FF] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3563E9]">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">Facebook Ad Management</h3>
              <p className="text-gray-600">
                Target the right customers with our AI-driven Facebook ad campaigns, optimized for maximum conversion at minimum cost.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#F3F6FF] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-[#3563E9]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track performance with real-time insights into lead quality, conversion rates, and ROI on your marketing spend.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#F3F6FF] rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3563E9]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 8-2 2-6 6"></path>
                  <path d="m8 10 2 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">CRM Integration</h3>
              <p className="text-gray-600">
                Seamlessly sync with your existing CRM system to ensure all leads are tracked and followed up consistently.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#F3F6FF] rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#3563E9]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">Lead Qualification</h3>
              <p className="text-gray-600">
                Let AI identify your most promising leads, so you can focus your time and resources on clients most likely to convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Updated testimonials */}
      <section id="testimonials" className="w-full py-24 px-4 bg-[#F3F6FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#3563E9] font-semibold">SUCCESS STORIES</span>
            <h2 className="text-4xl font-bold mt-2 text-[#192440]">What our clients say</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#3563E9] flex items-center justify-center text-white text-xl font-bold">
                "
              </div>
              <div className="pt-6">
                <p className="text-lg text-gray-700 mb-4">
                  AutoLead filled my calendar within the first week. I no longer worry about chasing leads — I just show up to appointments. Their AI chatbot engages with website visitors 24/7 and has increased our qualified leads by 78% in just two months.
                </p>
                <div className="flex items-center">
                  <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                  <div>
                    <h4 className="font-bold text-[#192440]">Ankit Patel</h4>
                    <p className="text-gray-500">HVAC Specialist, Pune</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#3563E9] flex items-center justify-center text-white text-xl font-bold">
                "
              </div>
              <div className="pt-6">
                <p className="text-lg text-gray-700 mb-4">
                  As a small plumbing business, I was skeptical about AI lead generation. But the team at AutoLead made it simple to get started, and now I don't know how we managed without it. The WhatsApp follow-ups have been a game-changer for keeping clients engaged. Our business has grown 42% year over year.
                </p>
                <div className="flex items-center">
                  <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                  <div>
                    <h4 className="font-bold text-[#192440]">Sarah Johnson</h4>
                    <p className="text-gray-500">Johnson Plumbing, Operations Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Updated content */}
      <section id="about" className="w-full py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="bg-[#3563E9] w-full h-80 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg">
                  To empower service businesses with AI technology that was previously only available to large corporations, leveling the playing field and driving growth.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#FFB620]/20 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-[#3563E9] font-semibold">ABOUT AUTOLEAD SYSTEMS</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-[#192440]">Your automated growth partner</h2>
            <p className="text-gray-700 mb-4">
              We're AutoLead Systems — your automated growth partner. We help service-based businesses like yours turn conversations into customers using AI chatbots, smart ads, and instant follow-ups.
            </p>
            <p className="text-gray-700 mb-6">
              From the first click to the final payment, we automate every step — so you can focus on what you do best. Our platform combines cutting-edge AI technology with deep industry knowledge to create automated lead generation systems that work specifically for electricians, plumbers, HVAC technicians, and other service providers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#36B37E]" />
                <span className="text-gray-700">Founded in 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#36B37E]" />
                <span className="text-gray-700">15,000+ businesses helped</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#36B37E]" />
                <span className="text-gray-700">97% client satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#36B37E]" />
                <span className="text-gray-700">Industry specialized AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with new CTA */}
      <section className="w-full py-20 px-4 bg-[#192440] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your business growth?</h2>
          <p className="text-xl mb-8 text-white/80">
            Join thousands of service professionals who've boosted their revenue with our AI-powered lead generation system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonPrimary className="bg-[#3563E9] hover:bg-[#2854d8]">
              Start Your 30-Day Free Trial — No Credit Card Needed
            </ButtonPrimary>
            <ButtonSecondary className="border-white text-white hover:bg-white/10" icon={true}>
              Schedule a Demo
            </ButtonSecondary>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#3563E9] text-white p-2 rounded-lg">
                  <Zap size={20} />
                </div>
                <span className="text-[#192440] text-xl font-bold">AutoLead</span>
                <span className="text-[#3563E9] text-xl font-bold">Systems</span>
              </div>
              <p className="text-gray-600 mb-4">
                AI-powered lead generation for service businesses that never sleeps.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#3563E9]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3563E9]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3563E9]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#192440] mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#192440] mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Community</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#192440] mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3563E9]">Press Kit</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 AutoLead Systems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-[#3563E9]">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#3563E9]">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#3563E9]">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

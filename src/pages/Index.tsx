import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import Logo from '@/components/Logo';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[#3563E9] font-medium">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-[#3563E9] font-medium transition-colors">About us</Link>
          </nav>
          <ButtonPrimary className="bg-[#3563E9] hover:bg-[#2854d8]">
            Get Started Free
          </ButtonPrimary>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full bg-[#F3F6FF] py-2">
        <p className="text-center text-sm text-gray-600">
          This site is a quick demo — no charge, no commitment
        </p>
      </div>

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

      {/* What We Do Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#192440]">What We Actually Do</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We help businesses automate lead generation using AI-powered workflows. Our system turns conversations into qualified leads—on autopilot—so you can focus on closing deals, not chasing prospects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F3F6FF] p-8 rounded-xl">
              <div className="text-[#3563E9] text-2xl font-bold mb-4">📈</div>
              <h3 className="text-xl font-bold text-[#192440] mb-3">Supercharge Your Sales with Targeted Facebook Ads</h3>
              
              <div className="space-y-4 mt-6">
                <div className="flex gap-3">
                  <CheckCircle size={24} className="text-[#36B37E] shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">AI-Driven Facebook Ads Strategy:</span> We don't just run ads — we optimize your entire lead journey using AI tools to maximize your conversion rate and bring in qualified leads.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle size={24} className="text-[#36B37E] shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Performance-Based Partnership:</span> No upfront payment. We work first, and you only pay when you see the results we promise.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle size={24} className="text-[#36B37E] shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">1-Month Free Trial – Build Trust, Risk-Free:</span> We offer the first month of service completely free. Experience the value before making any commitment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F3F6FF] p-8 rounded-xl">
              <div className="text-[#3563E9] text-2xl font-bold mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-[#192440] mb-3">Services We Offer</h3>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#36B37E]/10 text-[#36B37E] p-1 rounded">✓</div>
                  <p className="text-gray-700">WhatsApp Automation for Follow-ups</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#36B37E]/10 text-[#36B37E] p-1 rounded">✓</div>
                  <p className="text-gray-700">Lead Capture & CRM Integration</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#36B37E]/10 text-[#36B37E] p-1 rounded">✓</div>
                  <p className="text-gray-700">Real-Time Reporting & Alerts</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#36B37E]/10 text-[#36B37E] p-1 rounded">✓</div>
                  <p className="text-gray-700">Fully Customizable AI Chatbots</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#36B37E]/10 text-[#36B37E] p-1 rounded">✓</div>
                  <p className="text-gray-700">Facebook Ad Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="w-full py-16 px-4 bg-[#F3F6FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#192440]">Why Trust Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#3563E9]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3563E9]">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">Privacy First</h3>
              <p className="text-gray-600">
                All client data stays secure and never shared.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#3563E9]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3563E9]">
                  <path d="M12 2a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H2"></path>
                  <path d="M22 12h-9"></path>
                  <path d="m15 15 3-3-3-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">AI-Powered Automation</h3>
              <p className="text-gray-600">
                We use cutting-edge AI to deliver smart workflows.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#3563E9]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3563E9]">
                  <path d="m2 22 3-3"></path>
                  <path d="M11 13h9"></path>
                  <path d="M18 16.5V11"></path>
                  <path d="M18.5 8.5a2.5 2.5 0 0 0-5 0v1a2.5 2.5 0 0 0 5 0Z"></path>
                  <path d="M7 6c0-1.1.9-2 2-2h.5"></path>
                  <path d="M11 4h9"></path>
                  <path d="M11 7h5"></path>
                  <path d="M11 10h3"></path>
                  <path d="M11 13h9"></path>
                  <path d="M11 16h7"></path>
                  <path d="M11 19h5"></path>
                  <path d="m3.23 10.73 1.54-1.54a2 2 0 0 1 2.83 0l4.27 4.27"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#192440]">Growth Focused</h3>
              <p className="text-gray-600">
                Our systems help local businesses scale faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taglines Section - New section with the 3 taglines */}
      <section className="w-full py-16 px-4 bg-[#192440] text-white">
        <div className="max-w-7xl mx-auto">
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

      {/* Testimonial Section - Updated with new testimonial */}
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

      {/* CTA Section */}
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
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-[#3563E9]">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-[#3563E9]">Terms of Service</Link>
              <Link to="/contact" className="text-gray-500 text-sm hover:text-[#3563E9]">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

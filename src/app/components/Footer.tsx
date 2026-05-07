import { Linkedin, Twitter, Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const links = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Our Experts", href: "#" },
      { label: "Success Stories", href: "#" },
      { label: "Careers", href: "#" }
    ],
    services: [
      { label: "Resume Writing", href: "#" },
      { label: "Job Applications", href: "#" },
      { label: "Interview Prep", href: "#" },
      { label: "LinkedIn Optimization", href: "#" }
    ],
    support: [
      { label: "Contact Us", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-block mb-4">
              <img src="/logo.png" alt="Job Appliers" className="h-12 md:h-14 w-auto" />
            </div>
            <p className="text-blue-200 leading-relaxed mb-6">
              Real experts helping real people land their dream jobs. No bots, no automation – just genuine human support and proven results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/JOBAPPLIERS" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/JOBAPPLIERS" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/12162053138" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Our Offices</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-blue-200">USA Office</h4>
                <p className="text-sm text-gray-300">Cleveland, Ohio</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-200">India Office</h4>
                <p className="text-sm text-gray-300">22-1-454 Chaderghat, Hyderabad - 500001, INDIA</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {links.support.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © 2026 Job Appliers. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm">
              Helping job seekers since 2020 🚀 Over 10,000 successful placements
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

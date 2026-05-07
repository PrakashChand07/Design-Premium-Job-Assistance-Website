import { motion } from "motion/react";
import { Briefcase, Target, Layers, FileSignature } from "lucide-react";

export function CompanyOverview() {
  const highlights = [
    {
      icon: Briefcase,
      title: "100–200 Jobs/Week",
      description: "We apply to a high volume of jobs weekly based strictly on your profile."
    },
    {
      icon: Target,
      title: "Personalized Targeting",
      description: "Focus on personalized and targeted applications for better results."
    },
    {
      icon: Layers,
      title: "Multi-Platform",
      description: "Support across multiple job platforms including LinkedIn, Indeed, and more."
    },
    {
      icon: FileSignature,
      title: "Resume & Cover Letters",
      description: "We provide resume optimization and manual cover letter customization."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6">
              Company Overview
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Job Appliers</strong> is a service-based startup designed to simplify the job search process for candidates by applying to jobs on their behalf.
              </p>
              <p>
                We help job seekers save time, stay consistent, and increase their chances of getting interview calls through structured, high-volume job applications.
              </p>
              <p>
                Our platform also offers community support, expert guidance, and exclusive interview resources to help candidates succeed in their career journey.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-10 h-10 text-[#3B82F6] mb-4" />
                <h3 className="font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

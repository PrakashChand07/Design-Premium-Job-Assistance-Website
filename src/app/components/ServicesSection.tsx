import { motion } from "motion/react";
import { FileText, Mail, Send, Linkedin, Video, UserCheck } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Send,
      title: "High-Volume Applications",
      description: "Up to 100 job applications per week, saving you hours of tedious work."
    },
    {
      icon: FileText,
      title: "Resume-Based Targeting",
      description: "We match and apply to jobs that strictly align with your resume and experience."
    },
    {
      icon: Linkedin,
      title: "Multi-Platform Applications",
      description: "We apply across various platforms including LinkedIn, Indeed, Job portals, and more."
    },
    {
      icon: UserCheck,
      title: "Role & Location Matching",
      description: "Applications are filtered based on your specific role and location preferences."
    },
    {
      icon: Mail,
      title: "Customer Support via DM/Telegram",
      description: "Stay connected with our team for quick updates and any queries."
    },
    {
      icon: Video,
      title: "Save Time & Increase Opportunities",
      description: "Our core focus is to save your time while maximizing your chances of getting hired."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to land your dream job, handled by real experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-blue-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

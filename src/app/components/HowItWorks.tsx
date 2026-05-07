import { motion } from "motion/react";
import { User, Sparkles, Phone } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: User,
      title: "Share Your Details",
      description: "Tell us about your career goals, experience, and preferences in a quick onboarding call."
    },
    {
      icon: Sparkles,
      title: "Our Experts Optimize & Apply",
      description: "Dedicated professionals craft your materials and manually apply to the best-fit positions."
    },
    {
      icon: Phone,
      title: "Get Interview Calls",
      description: "Sit back as interview invitations start rolling in. We'll prep you for each one."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to your dream job
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#10B981]"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-blue-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center mb-6 mx-auto relative"
                >
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

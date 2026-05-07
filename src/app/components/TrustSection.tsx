import { motion } from "motion/react";
import { TrendingUp, Award, Users } from "lucide-react";

export function TrustSection() {
  const stats = [
    { icon: Users, label: "Successful Placements", value: "10,000+" },
    { icon: Award, label: "Client Satisfaction", value: "95%" },
    { icon: TrendingUp, label: "Average Interviews/Client", value: "12+" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center mb-4"
              >
                <stat.icon className="w-7 h-7 text-white" />
              </motion.div>
              <p className="text-4xl font-bold text-[#1E3A8A] mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-2xl p-8 text-white text-center"
        >
          <p className="text-2xl font-semibold mb-4">Trusted by Job Seekers Worldwide</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 border-2 border-white flex items-center justify-center text-sm font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-blue-100">Join thousands of successful candidates</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

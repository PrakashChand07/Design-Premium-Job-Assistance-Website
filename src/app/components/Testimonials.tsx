import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Software Engineer",
      company: "Tech Giant Inc.",
      avatar: "ER",
      text: "I went from 50+ applications with no response to 3 interviews in 2 weeks! The expert team completely transformed my resume and cover letters. Worth every penny.",
      rating: 5,
      result: "Landed dream job in 3 weeks"
    },
    {
      name: "David Chen",
      role: "Marketing Manager",
      company: "Brand Solutions Co.",
      avatar: "DC",
      text: "The dedicated consultant approach is a game-changer. Having Sarah guide me through every application and interview made all the difference. Real human support when you need it most.",
      rating: 5,
      result: "5 interviews, 2 offers"
    },
    {
      name: "Priya Patel",
      role: "Data Analyst",
      company: "Analytics Pro",
      avatar: "PP",
      text: "After months of applying on my own with zero luck, I tried Job Appliers. Their experts found opportunities I missed and positioned me perfectly. Got hired within a month!",
      rating: 5,
      result: "Hired in 4 weeks"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real people who trusted our experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-blue-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#1E3A8A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-green-800">
                  ✅ {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

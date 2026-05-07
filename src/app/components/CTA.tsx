import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Let Experts Handle Your Job Search
          </h2>

          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop wasting time on applications that go nowhere. Our team of career experts will get you in front of the right employers faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#1E3A8A] px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all"
            >
              Start Now
              <ArrowRight className="w-6 h-6" />
            </motion.a>

            <div className="text-blue-100">
              <p className="font-semibold">🎯 No Credit Card Required</p>
              <p className="text-sm">Free consultation with our experts</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Real Human Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>10,000+ Placements</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

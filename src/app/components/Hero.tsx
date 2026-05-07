import { motion } from "motion/react";
import { ArrowRight, Users, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMTkzQzhBIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="mb-8 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-blue-100/50 inline-block"
            >
              <motion.img
                src="/logo.png"
                alt="Job Appliers"
                className="h-16 md:h-20 lg:h-24 w-auto"
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
                    "drop-shadow(0 0 0px rgba(59, 130, 246, 0))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-blue-400/30 shadow-lg"
            >
              <span className="text-sm font-semibold text-white">✨ Real Experts Helping You Get Hired</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent"
            >
              Your Career Journey Starts Here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Our experts apply to jobs, optimize your resume, and help you land interviews faster.
              <span className="font-bold text-[#1E3A8A]"> No bots. Just human expertise.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all"
              >
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.a>

              <motion.a
                href="https://wa.me/12162053138?text=Hi!%20I'm%20interested%20in%20your%20job%20assistance%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-3 border-[#1E3A8A] bg-white text-[#1E3A8A] px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center justify-center gap-3 hover:bg-gradient-to-r hover:from-[#1E3A8A] hover:to-[#3B82F6] hover:text-white transition-all shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Talk to Expert
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-200 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-3xl font-bold text-[#1E3A8A]">95%</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 space-y-4 border border-blue-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 font-medium">Applications Sent</span>
                    <span className="font-bold text-[#1E3A8A] text-lg">127</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full shadow-lg"
                    ></motion.div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-700 font-medium">Interviews Scheduled</span>
                    <span className="font-bold text-[#1E3A8A] text-lg">23</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "62%" }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full shadow-lg"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-green-50 border-2 border-green-300 rounded-xl p-4 shadow-md">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  ></motion.div>
                  <span className="text-sm font-semibold text-gray-800">Your dedicated expert is working on 5 new applications</span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-5 shadow-2xl border-2 border-white"
            >
              <p className="text-sm font-bold text-white">🎉 New Interview!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

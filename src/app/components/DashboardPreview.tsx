import { motion } from "motion/react";
import { CheckCircle2, Clock, TrendingUp } from "lucide-react";

export function DashboardPreview() {
  const activities = [
    { company: "TechCorp Inc.", status: "Interview Scheduled", time: "2 hours ago", type: "success" },
    { company: "Innovation Labs", status: "Application Sent", time: "5 hours ago", type: "pending" },
    { company: "Digital Solutions", status: "Resume Reviewed", time: "1 day ago", type: "progress" },
    { company: "Future Enterprises", status: "Application Sent", time: "1 day ago", type: "pending" },
    { company: "NextGen Systems", status: "Interview Scheduled", time: "2 days ago", type: "success" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            Track Your Success Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time updates from your dedicated expert team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-[#1E3A8A]">Recent Activity</h3>
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Expert Working
                </div>
              </div>

              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-blue-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        activity.type === 'success' ? 'bg-green-100' :
                        activity.type === 'pending' ? 'bg-blue-100' : 'bg-orange-100'
                      }`}>
                        {activity.type === 'success' ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : activity.type === 'pending' ? (
                          <Clock className="w-6 h-6 text-blue-600" />
                        ) : (
                          <TrendingUp className="w-6 h-6 text-orange-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#1E3A8A]">{activity.company}</p>
                        <p className="text-sm text-gray-600">{activity.status}</p>
                      </div>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">💼 Your Expert Team</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-blue-100">Resume Expert</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    MK
                  </div>
                  <div>
                    <p className="font-semibold">Michael Kim</p>
                    <p className="text-sm text-blue-100">Application Specialist</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-blue-100 leading-relaxed">
                Real people working on your success, not automated bots
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 text-xl">This Week's Progress</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Applications Sent</span>
                    <span className="font-semibold text-[#1E3A8A]">15/20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Interviews Booked</span>
                    <span className="font-semibold text-[#1E3A8A]">4</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

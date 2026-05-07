import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$25",
      period: "/week",
      description: "Up to 100 job applications apply per week",
      features: [
        "Up to 100 job applications per week",
        "Resume optimization (weekly)",
        "Manual cover letter customization",
        "Multi-platform job applications",
        "Community chat support",
        "Access to exclusive interview content",
        "Guidance from field experts"
      ],
      popular: false
    },
    {
      name: "Standard Plan",
      price: "$35",
      period: "/week",
      description: "$145 / month (400 applications)",
      features: [
        "Up to 130 job applications per week",
        "Resume optimization (weekly)",
        "Manual cover letter customization",
        "Multi-platform job applications",
        "Community chat support",
        "Access to exclusive interview content",
        "Guidance from field experts"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      price: "$45",
      period: "/week",
      description: "Approx. 680 applications per month",
      features: [
        "Up to 170 job applications per week",
        "Resume optimization (weekly)",
        "Manual cover letter customization",
        "Multi-platform job applications",
        "Community chat support",
        "Access to exclusive interview content",
        "Guidance from field experts"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            Invest in Your Career
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that matches your job search goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all relative ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white border-2 border-blue-400'
                  : 'bg-white border-2 border-blue-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#1E3A8A]'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-6 h-6 flex-shrink-0 ${
                      plan.popular ? 'text-green-300' : 'text-green-600'
                    }`} />
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold transition-all inline-flex items-center justify-center ${
                  plan.popular
                    ? 'bg-white text-[#1E3A8A] hover:bg-blue-50'
                    : 'bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white hover:shadow-lg'
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            💰 All plans include a 14-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500">
            No contracts. Cancel anytime. Real human support included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

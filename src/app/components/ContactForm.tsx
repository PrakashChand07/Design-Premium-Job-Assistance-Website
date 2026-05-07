import { motion } from "motion/react";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, Upload, CheckCircle2, Phone, MessageCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    plan: "",
    message: ""
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
    const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Job Appliers Website",
            email: CONTACT_EMAIL,
          },
          to: [
            {
              email: CONTACT_EMAIL,
              name: "Job Appliers",
            },
          ],
          subject: `💼 New Application from ${formData.name} — ${formData.plan || "Plan Not Selected"}`,
          htmlContent: `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: #f0f6ff; border: 2px solid #1E3A8A; border-radius: 12px; overflow: hidden;">
              <div style="background: linear-gradient(135deg, #1E3A8A, #3B82F6); padding: 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">💼 Job Appliers</h1>
                <p style="color: #bfdbfe; margin: 8px 0 0; font-size: 14px;">New Contact Form Submission</p>
              </div>
              <div style="padding: 32px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #dbeafe; width: 130px;">👤 Name:</td>
                    <td style="padding: 12px; color: #333; border-bottom: 1px solid #dbeafe;">${formData.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #dbeafe;">📞 Phone:</td>
                    <td style="padding: 12px; color: #333; border-bottom: 1px solid #dbeafe;">${formData.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #dbeafe;">📧 Email:</td>
                    <td style="padding: 12px; color: #333; border-bottom: 1px solid #dbeafe;">${formData.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #dbeafe;">💼 Plan:</td>
                    <td style="padding: 12px; color: #333; border-bottom: 1px solid #dbeafe;">${formData.plan || "Not specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #dbeafe;">📅 Experience:</td>
                    <td style="padding: 12px; color: #333; border-bottom: 1px solid #dbeafe;">${formData.experience || "Not specified"}</td>
                  </tr>
                </table>
                <div style="margin-top: 20px; padding: 16px; background: #fff; border-radius: 8px; border: 1px solid #dbeafe;">
                  <p style="font-weight: bold; color: #1E3A8A; margin: 0 0 8px;">💬 Message / Goals:</p>
                  <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message || "No message provided."}</p>
                </div>
                ${resume ? `<p style="margin-top: 16px; color: #16a34a; font-size: 13px;">📎 Resume attached: ${resume.name}</p>` : ""}
              </div>
              <div style="background: linear-gradient(135deg, #1E3A8A, #3B82F6); padding: 16px; text-align: center;">
                <p style="color: #bfdbfe; margin: 0; font-size: 12px;">Sent from Job Appliers Contact Form • jobappliers.usa@gmail.com</p>
              </div>
            </div>
          `,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", experience: "", plan: "", message: "" });
        setResume(null);
      } else {
        const errData = await response.json();
        setErrorMsg(errData.message || "Email send karne me error aaya. Please try again.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our expert team will reach out within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </motion.div>
              <h3 className="text-3xl font-bold text-[#1E3A8A] mb-4">
                Thank You! ✅
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Your application has been received! Our expert will contact you at <strong>{import.meta.env.VITE_CONTACT_EMAIL}</strong> within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[#3B82F6] underline font-semibold hover:text-[#1E3A8A] transition-colors"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="+1 234 567 8901"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                    Interested Plan
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-[#3B82F6] focus:outline-none transition-colors"
                  >
                    <option value="">Select a plan...</option>
                    <option value="Basic Plan – $25/week">Basic Plan – $25/week (100 apps)</option>
                    <option value="Standard Plan – $35/week">Standard Plan – $35/week (130 apps)</option>
                    <option value="Premium Plan – $45/week">Premium Plan – $45/week (170 apps)</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                    Years of Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-[#3B82F6] focus:outline-none transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                  Tell us about your job search goals
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-[#3B82F6] focus:outline-none transition-colors resize-none"
                  placeholder="What kind of roles are you looking for? What are your career goals?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                  Upload Your Resume (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-xl border-2 border-dashed border-blue-200 hover:border-[#3B82F6] bg-blue-50/50 hover:bg-blue-50 cursor-pointer transition-all"
                  >
                    <Upload className="w-6 h-6 text-[#3B82F6]" />
                    <span className="text-gray-700">
                      {resume ? resume.name : "Click to upload resume (PDF, DOC, DOCX)"}
                    </span>
                  </label>
                </div>
                {resume && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ {resume.name} selected
                  </p>
                )}
              </div>

              {/* Error Message */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {errorMsg}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-6 h-6" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-500">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="font-semibold text-[#1E3A8A]">Call Us</p>
            <a href="tel:+12162053138" className="text-gray-600 hover:text-[#3B82F6]">
              +1 2162053138
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <p className="font-semibold text-[#1E3A8A]">WhatsApp</p>
            <a
              href="https://wa.me/12162053138"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#25D366]"
            >
              Chat with us
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3">
              <Send className="w-6 h-6 text-white" />
            </div>
            <p className="font-semibold text-[#1E3A8A]">Email</p>
            <a href="mailto:jobappliers.usa@gmail.com" className="text-gray-600 hover:text-[#3B82F6]">
              jobappliers.usa@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

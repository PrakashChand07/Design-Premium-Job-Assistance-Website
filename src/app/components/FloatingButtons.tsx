import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingButtons() {
  const phoneNumber = "+12162053138";
  const whatsappMessage = "Hi! I'm interested in your job assistance services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </motion.a>

      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 md:w-8 md:h-8" />
      </motion.a>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full"
      />
    </div>
  );
}

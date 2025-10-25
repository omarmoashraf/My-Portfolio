import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-gradient-to-b from-transparent to-purple-600/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-foreground/70 flex items-center justify-center gap-2">
            © {currentYear} Omar. Built with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and React
          </p>
          <p className="text-foreground/50 mt-2">
            Designed for innovation, crafted with passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

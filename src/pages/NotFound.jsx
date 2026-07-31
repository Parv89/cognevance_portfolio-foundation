import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl font-black text-indigo-500 mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h2>

        <p className="text-slate-400 mb-10">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>

      </div>
    </section>
  );
}
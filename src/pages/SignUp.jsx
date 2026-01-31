import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Tiled background */}
      <div
        className="absolute inset-0 bg-top bg-repeat"
        style={{
          backgroundImage: "url('/gotbackground.png')",
          backgroundSize: "400px 400px",
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[rgba(19,20,20,0.8)] sm:bg-[rgba(19,20,20,0.85)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,20,20,0)_35%,rgba(19,20,20,0.9)_100%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-8"
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-3">
            Get started
          </p>
          <h1 className="text-3xl font-medium text-white tracking-tight">
            Create your account
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-xs text-neutral-400 mb-2">
              Full name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="
                w-full rounded-lg bg-black border border-white/10
                px-4 py-3 text-sm text-white
                placeholder:text-neutral-600
                focus:outline-none focus:border-green-500
              "
            />
          </div>

          <div>
            <label className="block text-xs text-neutral-400 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@institute.edu"
              className="
                w-full rounded-lg bg-black border border-white/10
                px-4 py-3 text-sm text-white
                placeholder:text-neutral-600
                focus:outline-none focus:border-green-500
              "
            />
          </div>

          <div>
            <label className="block text-xs text-neutral-400 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="
                w-full rounded-lg bg-black border border-white/10
                px-4 py-3 text-sm text-white
                placeholder:text-neutral-600
                focus:outline-none focus:border-green-500
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full rounded-full bg-green-500 py-3
              text-black text-sm font-medium
              hover:bg-green-400 transition
            "
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Sign in
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

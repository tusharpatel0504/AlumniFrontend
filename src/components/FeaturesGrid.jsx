import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  BookOpen,
  UserCircle,
} from "lucide-react";

const features = [
  {
    title: "Alumni in your city",
    description:
      "Discover alumni around you and build meaningful local connections.",
    cta: "Find alumni",
    href: "/alumni/city",
    icon: MapPin,
    active: true,
  },
  {
    title: "Your batchmates",
    description:
      "Reconnect with your batchmates and stay updated on where they are now.",
    cta: "Coming soon",
    href: "#",
    icon: GraduationCap,
    active: false,
  },
  {
    title: "Alumni directory",
    description:
      "Explore the complete alumni directory and connect by interest or domain.",
    cta: "View directory",
    href: "/alumni",
    icon: BookOpen,
    active: true,
  },
  {
    title: "Your alumni profile",
    description:
      "Create and maintain your alumni profile to unlock relevant opportunities.",
    cta: "Coming soon",
    href: "#",
    icon: UserCircle,
    active: false,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative mx-4 mt-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl bg-white/95 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-black/5">
                <Icon className="h-6 w-6 text-black/70" />
              </div>

              {/* content */}
              <h3 className="mb-2 text-base font-semibold text-black">
                {feature.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-black/60">
                {feature.description}
              </p>

              {/* CTA */}
              {feature.active ? (
                <a
                  href={feature.href}
                  className="inline-flex items-center rounded-full bg-black px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-black/90"
                >
                  {feature.cta}
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full bg-black/10 px-5 py-2 text-xs font-medium text-black/50">
                  {feature.cta}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

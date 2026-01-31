import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    url: "https://careers.google.com/",
  },
  {
    name: "Amazon",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    url: "https://www.amazon.jobs/",
  },
  {
    name: "Microsoft",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    url: "https://careers.microsoft.com/",
  },
  {
    name: "Meta",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    url: "https://www.metacareers.com/",
  },
  {
    name: "Netflix",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    url: "https://jobs.netflix.com/",
  },
  {
    name: "Adobe",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    url: "https://www.adobe.com/careers.html",
  },
  {
    name: "Salesforce",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    url: "https://www.salesforce.com/company/careers/",
  },
  {
    name: "IBM",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    url: "https://www.ibm.com/careers",
  },
];


export default function TrustedPartners() {
  return (
    <section className="relative mx-4 mt-6 rounded-xl md:rounded-2xl overflow-hidden bg-black">
      {/* Tiled background */}
      <div
        className="absolute inset-0 bg-top bg-repeat"
        style={{
          backgroundImage: "url('/gotbackground.png')",
          backgroundSize: "220px 220px",
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/80 sm:bg-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.85)_100%)]" />

      <div className="relative px-6 sm:px-8 md:px-20 py-16 z-10">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-lg sm:text-xl md:text-2xl font-medium text-white/90"
        >
          Where learning turns into careers
        </motion.h2>

        {/* marquee container */}
        <div className="relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black/80 to-transparent" />

          {/* marquee */}
          <div className="flex w-max animate-marquee-left-slow">
            {[...Array(2)].map((_, loopIndex) => (
              <div className="flex items-center" key={loopIndex}>
                {companies.map((company, i) => (
                  <motion.a
                    key={`${loopIndex}-${i}`}
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="px-10 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={company.logoSrc}
                      alt={company.name}
                      className="h-10 md:h-12 w-32 md:w-40 object-contain"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </motion.a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

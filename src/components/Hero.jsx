// import { useEffect, useState } from "react";

// export default function Hero() {
//     const [time, setTime] = useState("");

//     useEffect(() => {
//         const formatter = new Intl.DateTimeFormat("en-IN", {
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true,
//         });

//         const updateTime = () => setTime(formatter.format(new Date()));

//         updateTime();
//         const interval = setInterval(updateTime, 60_000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section
//             id="hero"
//             className="relative mt-4 md:mt-6 h-[92vh] md:h-[93vh] overflow-hidden rounded-xl md:rounded-2xl text-white"
//         >
//             {/* Background */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat mx-4 rounded-lg"
//                 style={{ backgroundImage: "url('/newbgimg.png')" }}
//             />

//             {/* Overlays */}
//             <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.6)_100%)]" />

//             {/* Content */}
//             <main className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-8 md:px-20 text-center">
//                 <p className="mb-3 text-xs uppercase tracking-widest opacity-80">
//                     Get started
//                 </p>

//                 <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight glow-text">
//                     Transforming Alumni–Student <br className="hidden sm:block" />
//                     Mentorship with<span className="font-bold"> AI</span>
//                 </h1>

//                 <p className="mt-5 mx-auto max-w-xl text-sm sm:text-base md:text-lg opacity-85 glow-text">
//                     A scalable mentorship system that leverages intelligent matching, scheduling, and feedback to deliver measurable, outcome-driven guidance.
//                 </p>

//                 {/* CTA */}
//                 <div className="mt-8 flex justify-center">
//                     <a
//                         href="/signup"
//                         className="inline-flex items-center justify-center rounded-full bg-green-500 px-7 py-3 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-green-400"
//                     >
//                         Sign up, it’s free!
//                     </a>
//                 </div>
//             </main>

//             {/* Footer UI */}
//             <div className="absolute inset-x-4 md:inset-x-6 bottom-4 md:bottom-6 z-10 flex flex-col md:flex-row items-center md:justify-between gap-2 text-xs tracking-wide opacity-80">
//                 <span>{time}</span>
//                 <span className="uppercase tracking-[0.3em]">Scroll to explore</span>
//                 <span>IND</span>
//             </div>
//         </section>
//     );
// }
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative mt-4 md:mt-6 h-[92vh] md:h-[93vh] overflow-hidden rounded-xl md:rounded-2xl text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mx-4 rounded-lg"
        style={{ backgroundImage: "url('/newbgimg.png')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.6)_100%)]" />

      {/* GRID CONTAINER */}
      <div className="relative z-10 grid h-full grid-rows-[1fr_auto_1fr] px-6 sm:px-8 md:px-20">
        
        {/* CENTER CONTENT */}
        <main className="row-start-2 flex flex-col items-center text-center">
          <p className="mb-3 text-xs uppercase tracking-widest opacity-80">
            Get started
          </p>

          <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight glow-text">
            Transforming Alumni Student <br className="hidden sm:block" />
            Mentorship with <span className="font-bold">AI</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg opacity-85 glow-text">
            A scalable mentorship system that leverages intelligent matching,
            scheduling, and feedback to deliver measurable, outcome-driven
            guidance.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#4A5E2A] px-7 py-3 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-[#526532]"
            >
              Sign up, it’s free!
            </a>
          </div>
        </main>

        {/* FOOTER */}
        <div className="row-start-3 flex items-end pb-4 md:pb-6">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 text-xs tracking-wide opacity-80">
            <span>{time}</span>
            <span className="uppercase tracking-[0.3em]">
              Scroll to explore
            </span>
            <span>IND</span>
          </div>
        </div>
      </div>
    </section>
  );
}

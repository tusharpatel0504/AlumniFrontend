// import React, { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { jobs } from "../../lib/Job";

// const JobPortal = () => {
//   const navigate = useNavigate();

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("all");

//   const filteredJobs = useMemo(() => {
//     return jobs.filter((job) => {
//       const matchSearch =
//         job.role.toLowerCase().includes(search.toLowerCase()) ||
//         job.company.toLowerCase().includes(search.toLowerCase()) ||
//         job.alumni.name.toLowerCase().includes(search.toLowerCase());

//       const matchStatus = status === "all" || job.status === status;

//       return matchSearch && matchStatus;
//     });
//   }, [search, status]);

//   return (
//     <div className="min-h-screen flex justify-center px-4 py-16 relative overflow-hidden text-white">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-top bg-repeat"
//         style={{
//           backgroundImage: "url('/gotbackground.png')",
//           backgroundSize: "400px 400px",
//         }}
//       />
//       <div className="absolute inset-0 bg-[rgba(19,20,20,0.85)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,20,20,0)_35%,rgba(19,20,20,0.95)_100%)]" />

//       {/* Glass Card */}
//       <div className="relative z-10 w-full max-w-4xl">
//         <div className="rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl px-6 py-8 md:px-8 md:py-10 shadow-2xl overflow-x-hidden">

//           {/* Header */}
//           <div className="text-center mb-10">
//             <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">
//               Opportunities
//             </p>
//             <h1 className="text-4xl font-light mb-3">Job Portal</h1>
//             <p className="text-sm text-neutral-400">
//               Opportunities shared directly by alumni
//             </p>
//           </div>

//           {/* Filters */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//             <input
//               placeholder="Search role, company, alumni..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="bg-black border border-white/10 rounded-lg px-4 py-2
//               text-sm text-white placeholder:text-neutral-500
//               focus:outline-none focus:border-green-500"
//             />

//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="bg-black border border-white/10 rounded-lg px-4 py-2
//               text-sm text-white focus:outline-none focus:border-green-500"
//             >
//               <option value="all">All Jobs</option>
//               <option value="open">Open</option>
//               <option value="closed">Closed</option>
//             </select>
//           </div>

//           {/* Table Header */}
//           <div
//             className="grid grid-cols-12 gap-4 text-xs uppercase tracking-widest
//             text-neutral-500 pb-3 border-b border-white/10"
//           >
//             <div className="col-span-5">Role</div>
//             <div className="col-span-3">Company</div>
//             <div className="col-span-2">Eligibility</div>
//             <div className="col-span-2 text-right">Status</div>
//           </div>

//           {/* Job Rows */}
//           <div className="divide-y divide-white/5">
//             {filteredJobs.map((job) => (
//               <div
//                 key={job.id}
//                 onClick={() => navigate(`/jobs/${job.id}`)}
//                 className="
//                   group grid grid-cols-12 gap-4 py-4 cursor-pointer relative
//                   transition-all duration-200 ease-out
//                   hover:bg-white/[0.04]
//                   hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]
//                   hover:translate-x-[2px]
//                 "
//               >
//                 {/* Role */}
//                 <div className="col-span-5 relative">
//                   <p className="font-medium transition-colors group-hover:text-white">
//                     {job.role}
//                   </p>
//                   <p className="text-xs text-neutral-500 transition-colors group-hover:text-neutral-400">
//                     {job.alumni.name} · Batch {job.alumni.batch}
//                   </p>

//                   {/* Arrow */}
//                   <span
//                     className="
//                       absolute right-0 top-1/2 -translate-y-1/2
//                       opacity-0 text-neutral-400 text-sm
//                       transition group-hover:opacity-100
//                     "
//                   >
//                     →
//                   </span>
//                 </div>

//                 {/* Company */}
//                 <div className="col-span-3 text-sm text-neutral-300 transition-colors group-hover:text-white">
//                   {job.company}
//                 </div>

//                 {/* Eligibility */}
//                 <div className="col-span-2 text-xs text-neutral-400 transition-colors group-hover:text-neutral-300">
//                   {job.eligibility.minCGPA
//                     ? `CGPA ≥ ${job.eligibility.minCGPA}`
//                     : "Open to all"}
//                 </div>

//                 {/* Status */}
//                 <div className="col-span-2 text-right">
//                   <span
//                     className={`inline-block px-3 py-1 rounded-full text-xs border transition-all
//                     group-hover:scale-[1.03]
//                     ${
//                       job.status === "open"
//                         ? "border-green-500/30 text-green-400 bg-green-500/20"
//                         : "border-white/10 text-neutral-400"
//                     }`}
//                   >
//                     {job.status}
//                   </span>
//                 </div>
//               </div>
//             ))}

//             {filteredJobs.length === 0 && (
//               <p className="text-center text-sm text-neutral-500 py-12">
//                 No jobs found.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobPortal;
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobs } from "../../lib/Job";

const JobPortal = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [company, setCompany] = useState("all");
  const [eligibility, setEligibility] = useState("all");

  // Unique company list
  const companies = useMemo(() => {
    return ["all", ...new Set(jobs.map((job) => job.company))];
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        job.role.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.alumni.name.toLowerCase().includes(search.toLowerCase());

      const matchStatus = status === "all" || job.status === status;

      const matchCompany =
        company === "all" || job.company === company;

      const matchEligibility =
        eligibility === "all" ||
        (eligibility === "cgpa" && job.eligibility.minCGPA) ||
        (eligibility === "open" && !job.eligibility.minCGPA);

      return (
        matchSearch &&
        matchStatus &&
        matchCompany &&
        matchEligibility
      );
    });
  }, [search, status, company, eligibility]);

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setCompany("all");
    setEligibility("all");
  };

  return (
    <div className="min-h-screen flex justify-center px-4 py-32 relative overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-top bg-repeat"
        style={{
          backgroundImage: "url('/gotbackground.png')",
          backgroundSize: "400px 400px",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(19,20,20,0.85)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,20,20,0)_35%,rgba(19,20,20,0.95)_100%)]" />

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl px-6 py-8 md:px-8 md:py-10 shadow-2xl overflow-x-hidden">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">
              Opportunities
            </p>
            <h1 className="text-4xl font-light mb-3">Job Portal</h1>
            <p className="text-sm text-neutral-400">
              Opportunities shared directly by alumni
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <input
              placeholder="Search role, company, alumni..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black border border-white/10 rounded-lg px-4 py-2
              text-sm text-white placeholder:text-neutral-500
              focus:outline-none focus:border-green-500"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-black border border-white/10 rounded-lg px-4 py-2
              text-sm text-white focus:outline-none focus:border-green-500"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>

            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-black border border-white/10 rounded-lg px-4 py-2
              text-sm text-white focus:outline-none focus:border-green-500"
            >
              {companies.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All Companies" : c}
                </option>
              ))}
            </select>

            <select
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              className="bg-black border border-white/10 rounded-lg px-4 py-2
              text-sm text-white focus:outline-none focus:border-green-500"
            >
              <option value="all">All Eligibility</option>
              <option value="open">Open to All</option>
              <option value="cgpa">CGPA Required</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-end mb-8">
            <button
              onClick={clearFilters}
              className="text-xs text-neutral-400 hover:text-white transition"
            >
              Clear filters
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-xs uppercase tracking-widest text-neutral-500 pb-3 border-b border-white/10">
            <div className="col-span-5">Role</div>
            <div className="col-span-3">Company</div>
            <div className="col-span-2">Eligibility</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          {/* Job Rows */}
          <div className="divide-y divide-white/5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => navigate(`/jobs/${job.id}`)}
                className="group grid grid-cols-12 gap-4 py-4 cursor-pointer transition-all hover:bg-white/[0.04]"
              >
                <div className="col-span-5">
                  <p className="font-medium">{job.role}</p>
                  <p className="text-xs text-neutral-500">
                    {job.alumni.name} · Batch {job.alumni.batch}
                  </p>
                </div>

                <div className="col-span-3 text-sm text-neutral-300">
                  {job.company}
                </div>

                <div className="col-span-2 text-xs text-neutral-400">
                  {job.eligibility.minCGPA
                    ? `CGPA ≥ ${job.eligibility.minCGPA}`
                    : "Open to all"}
                </div>

                <div className="col-span-2 text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${
                      job.status === "open"
                        ? "border-green-500/30 text-green-400 bg-green-500/20"
                        : "border-white/10 text-neutral-400"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <p className="text-center text-sm text-neutral-500 py-12">
                No jobs found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;

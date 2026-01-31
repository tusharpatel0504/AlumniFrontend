// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { jobs } from "../../lib/Job";

// const JobDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const job = jobs.find((j) => j.id === id);
//   const [applied, setApplied] = useState(false);

//   if (!job) {
//     return (
//       <div className="text-white text-center py-20">
//         Job not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen px-6 py-36 text-white relative overflow-hidden">
//       {/* Tiled background */}
//       <div
//         className="absolute inset-0 bg-top bg-repeat"
//         style={{
//           backgroundImage: "url('/gotbackground.png')",
//           backgroundSize: "400px 400px",
//         }}
//       />

//       {/* Dark overlays */}
//       <div className="absolute inset-0 bg-[rgba(19,20,20,0.8)] sm:bg-[rgba(19,20,20,0.85)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,20,20,0)_35%,rgba(19,20,20,0.9)_100%)]" />

//       {/* Content */}
//       <div className="relative z-10">
//       <div className="max-w-5xl mx-auto space-y-10">
//         {/* Back */}
//         <button
//           onClick={() => navigate(-1)}
//           className="text-sm text-neutral-400 hover:text-white"
//         >
//           ← Back to jobs
//         </button>

//         {/* Job Summary */}
//         <div className="border border-white/10 rounded-xl p-6 bg-neutral-950">
//           <h1 className="text-3xl font-medium mb-2">{job.role}</h1>
//           <p className="text-neutral-400 mb-4">
//             {job.company} · {job.location} · {job.type}
//           </p>

//           <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
//             <span>Status: {job.status === "open" ? "Open" : "Closed"}</span>
//             <span>Posted on {job.postedOn}</span>
//           </div>
//         </div>

//         {/* About Job */}
//         <section>
//           <h2 className="text-lg font-medium mb-3">About the Job</h2>
//           <p className="text-neutral-300 leading-relaxed">
//             {job.description}
//           </p>
//         </section>

//         {/* Skills */}
//         {job.skills && (
//           <section>
//             <h2 className="text-lg font-medium mb-3">Skills Required</h2>
//             <div className="flex flex-wrap gap-2">
//               {job.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-3 py-1 rounded-full text-xs border border-white/10
//                   text-neutral-300"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Hiring Workflow */}
//         {job.hiringWorkflow && (
//           <section>
//             <h2 className="text-lg font-medium mb-4">
//               Hiring Workflow Rounds
//             </h2>
//             <div className="space-y-4">
//               {job.hiringWorkflow.map((round, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-white/10 rounded-lg p-4 bg-neutral-950"
//                 >
//                   <p className="font-medium">
//                     {idx + 1}. {round.title}
//                   </p>
//                   <p className="text-xs text-neutral-500 mt-1">
//                     Round Type: {round.type}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Eligibility */}
//         <section>
//           <h2 className="text-lg font-medium mb-3">Eligibility</h2>
//           <p className="text-neutral-300">
//             {job.eligibility.minCGPA &&
//               `CGPA ≥ ${job.eligibility.minCGPA}`}
//             {job.eligibility.batches.length > 0 &&
//               ` · Batches ${job.eligibility.batches.join(", ")}`}
//             {job.eligibility.branches.length > 0 &&
//               ` · ${job.eligibility.branches.join(", ")}`}
//           </p>
//         </section>

//         {/* External Links */}
//         {job.externalLink && (
//           <section>
//             <h2 className="text-lg font-medium mb-3">External Link</h2>
//             <a
//               href={job.externalLink}
//               target="_blank"
//               rel="noreferrer"
//               className="text-green-400 hover:underline text-sm"
//             >
//               Company Registration Link
//             </a>
//           </section>
//         )}

//         {/* Attachments */}
//         {job.attachments && (
//           <section>
//             <h2 className="text-lg font-medium mb-3">File Attachments</h2>
//             <div className="space-y-2">
//               {job.attachments.map((file) => (
//                 <a
//                   key={file.name}
//                   href={file.url}
//                   className="block border border-green-500/30 rounded-lg
//                   px-4 py-2 text-sm text-green-400 hover:bg-green-500/10 transition"
//                 >
//                   {file.name}
//                 </a>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Alumni */}
//         <section className="border border-white/10 rounded-xl p-6 bg-neutral-950">
//           <h2 className="text-lg font-medium mb-4">Posted by Alumni</h2>
//           <p className="font-medium">{job.alumni.name}</p>
//           <p className="text-sm text-neutral-400">
//             {job.alumni.role} · {job.alumni.company}
//           </p>
//           <p className="text-sm text-neutral-500 mb-4">
//             Batch of {job.alumni.batch}
//           </p>

//           <a
//             href={job.alumni.linkedin}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block rounded-full border border-white/10
//             px-5 py-2 text-sm text-neutral-300 hover:bg-white/5 transition"
//           >
//             View LinkedIn
//           </a>
//         </section>

//         {/* Apply Section */}
//         <section className="border-t border-white/10 pt-6">
//           {applied ? (
//             <div className="border border-white/10 rounded-lg p-4 bg-neutral-950">
//               <p className="text-sm text-neutral-400">
//                 Your current status for this job
//               </p>
//               <p className="font-medium text-green-400">Applied</p>
//             </div>
//           ) : (
//             <button
//               onClick={() => setApplied(true)}
//               disabled={job.status !== "open"}
//               className={`w-full rounded-full py-3 text-sm font-medium transition ${
//                 job.status === "open"
//                   ? "bg-green-500 text-black hover:bg-green-400"
//                   : "bg-white/10 text-neutral-500 cursor-not-allowed"
//               }`}
//             >
//               Apply for this Job
//             </button>
//           )}
//         </section>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetail;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "../../lib/Job";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === id);
  const [applied, setApplied] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden text-white">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-top bg-repeat"
        style={{
          backgroundImage: "url('/gotbackground.png')",
          backgroundSize: "400px 400px",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(19,20,20,0.85)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,20,20,0)_35%,rgba(19,20,20,0.95)_100%)]" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl px-8 py-10 shadow-2xl">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-400 hover:text-white mb-6"
          >
            ← Back to jobs
          </button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-light mb-2">{job.role}</h1>
            <p className="text-sm text-neutral-400">
              {job.company} · {job.location} · {job.type}
            </p>
          </div>

          {/* About */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              About the job
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              {job.description}
            </p>
          </section>

          {/* Skills */}
          {job.skills?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                Skills required
              </h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs border border-white/10 text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Hiring Workflow */}
          {job.hiringWorkflow?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
                Hiring workflow
              </h2>
              <div className="space-y-3">
                {job.hiringWorkflow.map((round, idx) => (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-lg px-4 py-3"
                  >
                    <p className="text-sm font-medium">
                      {idx + 1}. {round.title}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {round.type}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Eligibility */}
          <section className="mb-10">
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Eligibility
            </h2>
            <p className="text-sm text-neutral-300">
              {job.eligibility?.minCGPA &&
                `CGPA ≥ ${job.eligibility.minCGPA}`}
              {job.eligibility?.batches?.length > 0 &&
                ` · Batches ${job.eligibility.batches.join(", ")}`}
              {job.eligibility?.branches?.length > 0 &&
                ` · ${job.eligibility.branches.join(", ")}`}
            </p>
          </section>

          {/* Alumni */}
          <div className="border-t border-white/10 pt-6 mb-8">
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Posted by
            </h2>
            <p className="font-medium">{job.alumni.name}</p>
            <p className="text-sm text-neutral-400">
              {job.alumni.role} · {job.alumni.company}
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Batch of {job.alumni.batch}
            </p>

            {job.alumni.linkedin && (
              <a
                href={job.alumni.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm text-neutral-300 border border-white/10
                px-4 py-2 rounded-full hover:bg-white/5 transition"
              >
                View LinkedIn
              </a>
            )}
          </div>

          {/* Apply Section */}
          {applied ? (
            <div className="rounded-lg border border-white/10 px-4 py-3">
              <p className="text-xs text-neutral-400">
                Your current status for this job
              </p>
              <p className="font-medium text-green-400">Applied</p>
            </div>
          ) : (
            <button
              onClick={() => setApplied(true)}
              disabled={job.status !== "open"}
              className={`w-full rounded-full py-3 text-sm font-medium transition ${
                job.status === "open"
                  ? "bg-green-500 text-black hover:bg-green-400"
                  : "bg-white/10 text-neutral-500 cursor-not-allowed"
              }`}
            >
              Apply for this job
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

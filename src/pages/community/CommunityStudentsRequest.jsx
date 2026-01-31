// // import React, { useState } from "react";

// // const CommunityStudentsRequest = () => {
// //   const [requests, setRequests] = useState([
// //     {
// //       id: 1,
// //       studentName: "Akash Kumar",
// //       role: "Student · CSE",
// //       topic: "Interview Preparation",
// //       message: "Looking for guidance on cracking tech interviews at top companies.",
// //       status: "pending",
// //       requestedDate: "2025-02-01",
// //     },
// //     {
// //       id: 2,
// //       studentName: "Neha Sharma",
// //       role: "Student · AI & ML",
// //       topic: "Career Path in AI",
// //       message: "Want to discuss specialization options and best learning resources.",
// //       status: "pending",
// //       requestedDate: "2025-01-31",
// //     },
// //     {
// //       id: 3,
// //       studentName: "Rohan Patel",
// //       role: "Student · CSE",
// //       topic: "Startup Ideas Discussion",
// //       message: "Have an idea for a SaaS startup, need mentorship on execution.",
// //       status: "pending",
// //       requestedDate: "2025-01-30",
// //     },
// //   ]);

// //   const [filter, setFilter] = useState("pending");

// //   const approveRequest = (id) => {
// //     setRequests((prev) =>
// //       prev.map((req) =>
// //         req.id === id ? { ...req, status: "approved" } : req
// //       )
// //     );
// //   };

// //   const declineRequest = (id) => {
// //     if (!window.confirm("Are you sure you want to decline this request?"))
// //       return;
// //     setRequests((prev) =>
// //       prev.map((req) =>
// //         req.id === id ? { ...req, status: "declined" } : req
// //       )
// //     );
// //   };

// //   const filteredRequests =
// //     filter === "all"
// //       ? requests
// //       : requests.filter((req) => req.status === filter);

// //   const statusPill = {
// //     pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
// //     approved: "bg-green-500/20 text-green-400 border-green-500/30",
// //     declined: "bg-red-500/20 text-red-400 border-red-500/30",
// //   };

// //   return (
// //     <div className="text-white max-w-5xl">
// //       {/* Header */}
// //       <div className="mb-8">
// //         <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
// //           Community
// //         </p>
// //         <h1 className="text-3xl font-medium">Students Request</h1>
// //         <p className="text-sm text-neutral-400 mt-2">
// //           Manage student requests and mentorship inquiries
// //         </p>
// //       </div>

// //       {/* Filter Tabs */}
// //       <div className="flex gap-3 mb-8 flex-wrap">
// //         {["all", "pending", "approved", "declined"].map((tab) => (
// //           <button
// //             key={tab}
// //             onClick={() => setFilter(tab)}
// //             className={`rounded-full px-4 py-2 text-sm transition ${
// //               filter === tab
// //                 ? "bg-green-500/20 text-green-400 border border-green-500/30"
// //                 : "border border-white/10 text-neutral-400 hover:bg-white/5 hover:text-white"
// //             }`}
// //           >
// //             {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             {tab !== "all" &&
// //               ` (${requests.filter((r) => r.status === tab).length})`}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Requests List */}
// //       <div className="space-y-6">
// //         {filteredRequests.length === 0 && (
// //           <div className="text-center py-12">
// //             <p className="text-neutral-500 text-sm">
// //               No {filter === "all" ? "" : filter} requests found.
// //             </p>
// //           </div>
// //         )}

// //         {filteredRequests.map((request) => (
// //           <div
// //             key={request.id}
// //             className="border border-white/10 rounded-xl p-6 bg-neutral-950 transition hover:border-white/20"
// //           >
// //             {/* Header */}
// //             <div className="flex justify-between items-start mb-4">
// //               <div>
// //                 <h3 className="text-lg font-medium">{request.studentName}</h3>
// //                 <p className="text-sm text-neutral-500">{request.role}</p>
// //               </div>

// //               <span
// //                 className={`text-xs px-3 py-1 rounded-full border font-medium ${
// //                   statusPill[request.status]
// //                 }`}
// //               >
// //                 {request.status.charAt(0).toUpperCase() +
// //                   request.status.slice(1)}
// //               </span>
// //             </div>

// //             {/* Content */}
// //             <div className="bg-black/40 rounded-lg p-4 mb-4">
// //               <p className="text-xs uppercase text-neutral-500 mb-2">Topic</p>
// //               <p className="font-medium mb-4">{request.topic}</p>

// //               <p className="text-xs uppercase text-neutral-500 mb-2">Message</p>
// //               <p className="text-sm text-neutral-300 leading-relaxed">
// //                 {request.message}
// //               </p>
// //             </div>

// //             {/* Date */}
// //             <p className="text-xs text-neutral-500 mb-6">
// //               Requested on {new Date(request.requestedDate).toLocaleDateString()}
// //             </p>

// //             {/* Actions */}
// //             {request.status === "pending" ? (
// //               <div className="flex gap-3">
// //                 <button
// //                   onClick={() => approveRequest(request.id)}
// //                   className="flex-1 rounded-full bg-green-500/20 text-green-400 py-2
// //                   font-medium hover:bg-green-500/30 transition"
// //                 >
// //                   Approve
// //                 </button>
// //                 <button
// //                   onClick={() => declineRequest(request.id)}
// //                   className="flex-1 rounded-full border border-red-500/30 text-red-400 py-2
// //                   font-medium hover:bg-red-500/10 transition"
// //                 >
// //                   Decline
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="flex gap-3">
// //                 <button
// //                   className="flex-1 rounded-full border border-white/10 py-2
// //                   text-sm text-neutral-300 hover:bg-white/5 transition"
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CommunityStudentsRequest;


// import React, { useState } from "react";

// const CommunityStudentSessions = () => {
//   const [sessions, setSessions] = useState([
//     {
//       id: 1,
//       topic: "Interview Preparation for FAANG",
//       description:
//         "Need guidance on DSA, system design, and interview strategy.",
//       votes: 12,
//       status: "open",
//       scheduledDetails: null,
//     },
//     {
//       id: 2,
//       topic: "Getting Started with AI & ML",
//       description:
//         "Confused about roadmap, math requirements, and projects.",
//       votes: 8,
//       status: "open",
//       scheduledDetails: null,
//     },
//   ]);

//   const [selectedSession, setSelectedSession] = useState(null);
//   const [showScheduleModal, setShowScheduleModal] = useState(false);

//   const [scheduleForm, setScheduleForm] = useState({
//     description: "",
//     date: "",
//     time: "",
//     duration: "",
//     meetLink: "",
//   });

//   /* ---------------- STUDENT ACTION ---------------- */

//   const upvoteSession = (id) => {
//     setSessions((prev) =>
//       prev.map((s) =>
//         s.id === id ? { ...s, votes: s.votes + 1 } : s
//       )
//     );
//   };

//   /* ---------------- ALUMNI ACTION ---------------- */

//   const openScheduleModal = (session) => {
//     setSelectedSession(session);
//     setScheduleForm({
//       description: "",
//       date: "",
//       time: "",
//       duration: "",
//       meetLink: "",
//     });
//     setShowScheduleModal(true);
//   };

//   const scheduleSession = () => {
//     setSessions((prev) =>
//       prev.map((s) =>
//         s.id === selectedSession.id
//           ? {
//               ...s,
//               status: "scheduled",
//               scheduledDetails: scheduleForm,
//             }
//           : s
//       )
//     );
//     setShowScheduleModal(false);
//   };

//   /* ---------------- UI ---------------- */

//   return (
//     <div className="text-white max-w-5xl">
//       {/* Header */}
//       <div className="mb-8">
//         <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
//           Community
//         </p>
//         <h1 className="text-3xl font-medium">
//           Student Proposed Sessions
//         </h1>
//         <p className="text-sm text-neutral-400 mt-2">
//           Students propose topics · Community votes · Alumni host
//         </p>
//       </div>

//       {/* Session Cards */}
//       <div className="space-y-6">
//         {sessions.map((session) => (
//           <div
//             key={session.id}
//             className="border border-white/10 rounded-xl p-6 bg-neutral-950 hover:border-white/20 transition"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h3 className="text-lg font-medium">
//                   {session.topic}
//                 </h3>
//                 <p className="text-sm text-neutral-400 mt-1">
//                   {session.description}
//                 </p>
//               </div>

//               <span
//                 className={`text-xs px-3 py-1 rounded-full border ${
//                   session.status === "open"
//                     ? "border-yellow-500/30 text-yellow-400 bg-yellow-500/20"
//                     : "border-green-500/30 text-green-400 bg-green-500/20"
//                 }`}
//               >
//                 {session.status === "open"
//                   ? "Open for Voting"
//                   : "Scheduled"}
//               </span>
//             </div>

//             {/* Votes */}
//             <p className="text-sm text-neutral-400 mb-4">
//               👍 {session.votes} students interested
//             </p>

//             {/* Scheduled Details */}
//             {session.status === "scheduled" && session.scheduledDetails && (
//               <div className="bg-black/40 rounded-lg p-4 mb-4">
//                 <p className="text-xs uppercase text-neutral-500 mb-2">
//                   Session Details
//                 </p>
//                 <p className="text-sm text-neutral-300 mb-2">
//                   {session.scheduledDetails.description}
//                 </p>
//                 <p className="text-xs text-neutral-400">
//                   {session.scheduledDetails.date} ·{" "}
//                   {session.scheduledDetails.time} ·{" "}
//                   {session.scheduledDetails.duration}
//                 </p>
//                 <a
//                   href={session.scheduledDetails.meetLink}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-block mt-3 text-sm text-green-400 hover:underline"
//                 >
//                   Join Meeting
//                 </a>
//               </div>
//             )}

//             {/* Actions */}
//             {session.status === "open" && (
//               <div className="flex gap-3 flex-wrap">
//                 <button
//                   onClick={() => upvoteSession(session.id)}
//                   className="rounded-full border border-white/10 px-4 py-1.5 text-sm
//                   hover:bg-white/5 transition"
//                 >
//                   Upvote
//                 </button>

//                 <button
//                   onClick={() => openScheduleModal(session)}
//                   className="rounded-full bg-green-500/20 text-green-400 px-4 py-1.5 text-sm
//                   hover:bg-green-500/30 transition"
//                 >
//                   Take Session (Alumni)
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Schedule Modal */}
//       {showScheduleModal && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//           <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 w-full max-w-lg">
//             <h2 className="text-2xl font-medium mb-6">
//               Schedule Session
//             </h2>

//             <div className="space-y-4">
//               <textarea
//                 placeholder="Session Description"
//                 className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm
//                 text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500"
//                 onChange={(e) =>
//                   setScheduleForm({
//                     ...scheduleForm,
//                     description: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 type="date"
//                 className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white"
//                 onChange={(e) =>
//                   setScheduleForm({
//                     ...scheduleForm,
//                     date: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 type="time"
//                 className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white"
//                 onChange={(e) =>
//                   setScheduleForm({
//                     ...scheduleForm,
//                     time: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 placeholder="Duration (e.g. 45 mins)"
//                 className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white"
//                 onChange={(e) =>
//                   setScheduleForm({
//                     ...scheduleForm,
//                     duration: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 placeholder="Meeting Link"
//                 className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white"
//                 onChange={(e) =>
//                   setScheduleForm({
//                     ...scheduleForm,
//                     meetLink: e.target.value,
//                   })
//                 }
//               />

//               <div className="flex gap-3 pt-4">
//                 <button
//                   onClick={scheduleSession}
//                   className="flex-1 rounded-full bg-green-500 py-2 text-black font-medium hover:bg-green-400"
//                 >
//                   Schedule Session
//                 </button>
//                 <button
//                   onClick={() => setShowScheduleModal(false)}
//                   className="flex-1 rounded-full border border-white/10 py-2 text-white hover:bg-white/5"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CommunityStudentSessions;
import React, { useState } from "react";

const CommunityStudentSessions = () => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      topic: "Interview Preparation for FAANG",
      description:
        "Need guidance on DSA, system design, and interview strategy.",
      votes: 12,
      status: "open",
      scheduledDetails: null,
    },
    {
      id: 2,
      topic: "Getting Started with AI & ML",
      description:
        "Confused about roadmap, math requirements, and projects.",
      votes: 8,
      status: "open",
      scheduledDetails: null,
    },
  ]);

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const [requestForm, setRequestForm] = useState({
    topic: "",
    description: "",
  });

  const [scheduleForm, setScheduleForm] = useState({
    description: "",
    date: "",
    time: "",
    duration: "",
    meetLink: "",
  });

  /* ---------------- STUDENT ACTIONS ---------------- */

  const upvoteSession = (id) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, votes: s.votes + 1 } : s
      )
    );
  };

  const submitRequest = () => {
    if (!requestForm.topic || !requestForm.description) return;

    setSessions((prev) => [
      {
        id: Date.now(),
        topic: requestForm.topic,
        description: requestForm.description,
        votes: 1,
        status: "open",
        scheduledDetails: null,
      },
      ...prev,
    ]);

    setRequestForm({ topic: "", description: "" });
    setShowRequestModal(false);
  };

  /* ---------------- ALUMNI ACTIONS ---------------- */

  const openScheduleModal = (session) => {
    setSelectedSession(session);
    setScheduleForm({
      description: "",
      date: "",
      time: "",
      duration: "",
      meetLink: "",
    });
    setShowScheduleModal(true);
  };

  const scheduleSession = () => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === selectedSession.id
          ? {
              ...s,
              status: "scheduled",
              scheduledDetails: scheduleForm,
            }
          : s
      )
    );
    setShowScheduleModal(false);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="text-white max-w-5xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
            Community
          </p>
          <h1 className="text-3xl font-medium">
            Student Proposed Sessions
          </h1>
          <p className="text-sm text-neutral-400 mt-2">
            Students propose · Community votes · Alumni host
          </p>
        </div>

        <button
          onClick={() => setShowRequestModal(true)}
          className="rounded-full bg-green-500 px-6 py-2.5 text-sm font-medium text-black
          hover:bg-green-400 active:scale-[0.97] transition"
        >
          Request Session
        </button>
      </div>

      {/* Session Cards */}
      <div className="space-y-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="border border-white/10 rounded-xl p-6 bg-neutral-950
            hover:border-white/20 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">{session.topic}</h3>
                <p className="text-sm text-neutral-400 mt-1">
                  {session.description}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full border ${
                  session.status === "open"
                    ? "border-yellow-500/30 text-yellow-400 bg-yellow-500/20"
                    : "border-green-500/30 text-green-400 bg-green-500/20"
                }`}
              >
                {session.status === "open"
                  ? "Open for Voting"
                  : "Scheduled"}
              </span>
            </div>

            <p className="text-sm text-neutral-400 mb-4">
              👍 {session.votes} students interested
            </p>

            {session.status === "scheduled" && session.scheduledDetails && (
              <div className="bg-black/40 rounded-lg p-4 mb-4">
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Session Details
                </p>
                <p className="text-sm text-neutral-300 mb-2">
                  {session.scheduledDetails.description}
                </p>
                <p className="text-xs text-neutral-400">
                  {session.scheduledDetails.date} ·{" "}
                  {session.scheduledDetails.time} ·{" "}
                  {session.scheduledDetails.duration}
                </p>
                <a
                  href={session.scheduledDetails.meetLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm text-green-400 hover:underline"
                >
                  Join Meeting
                </a>
              </div>
            )}

            {session.status === "open" && (
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => upvoteSession(session.id)}
                  className="rounded-full border border-white/10 px-4 py-1.5 text-sm
                  hover:bg-white/5 transition"
                >
                  Upvote
                </button>

                <button
                  onClick={() => openScheduleModal(session)}
                  className="rounded-full bg-green-500/20 text-green-400 px-4 py-1.5 text-sm
                  hover:bg-green-500/30 transition"
                >
                  Take Session (Alumni)
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Request Session Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-medium mb-6">
              Request a Session
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Session Topic"
                value={requestForm.topic}
                onChange={(e) =>
                  setRequestForm({
                    ...requestForm,
                    topic: e.target.value,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-2
                text-sm text-white placeholder:text-neutral-500 focus:outline-none
                focus:border-green-500"
              />

              <textarea
                placeholder="Describe what you want to learn"
                value={requestForm.description}
                onChange={(e) =>
                  setRequestForm({
                    ...requestForm,
                    description: e.target.value,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-2
                text-sm text-white placeholder:text-neutral-500 h-24 resize-none
                focus:outline-none focus:border-green-500"
              />

              <div className="flex gap-3 pt-4">
                <button
                  onClick={submitRequest}
                  className="flex-1 rounded-full bg-green-500 py-2 text-black font-medium
                  hover:bg-green-400"
                >
                  Submit Request
                </button>
                <button
                  onClick={() => setShowRequestModal(false)}
                  className="flex-1 rounded-full border border-white/10 py-2
                  text-white hover:bg-white/5"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-medium mb-6">
              Schedule Session
            </h2>

            <div className="space-y-4">
              <textarea
                placeholder="Session Description"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-2
                text-sm text-white placeholder:text-neutral-500 h-24 resize-none
                focus:outline-none focus:border-green-500"
                onChange={(e) =>
                  setScheduleForm({
                    ...scheduleForm,
                    description: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-2
                text-sm text-white"
                onChange={(e) =>
                  setScheduleForm({
                    ...scheduleForm,
                    date: e.target.value,
                  })
                }
              />

              <input
                type="time"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-2
                text-sm text-white"
                onChange={(e) =>
                  setScheduleForm({
                    ...scheduleForm,
                    time: e.target.value,
                  })
                }
              />

              <input
                placeholder="Duration (e.g. 45 mins)"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-2
                text-sm text-white"
                onChange={(e) =>
                  setScheduleForm({
                    ...scheduleForm,
                    duration: e.target.value,
                  })
                }
              />

              <input
                placeholder="Meeting Link"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-2
                text-sm text-white"
                onChange={(e) =>
                  setScheduleForm({
                    ...scheduleForm,
                    meetLink: e.target.value,
                  })
                }
              />

              <div className="flex gap-3 pt-4">
                <button
                  onClick={scheduleSession}
                  className="flex-1 rounded-full bg-green-500 py-2 text-black font-medium
                  hover:bg-green-400"
                >
                  Schedule Session
                </button>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="flex-1 rounded-full border border-white/10 py-2
                  text-white hover:bg-white/5"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityStudentSessions;

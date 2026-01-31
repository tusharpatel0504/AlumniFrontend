// import React, { useState } from "react";

// const AlumniSession = () => {
//   const [sessions, setSessions] = useState([
//     {
//       id: 1,
//       type: "one-to-one",
//       title: "Resume Review Session",
//       studentName: "Raj Kumar",
//       studentEmail: "raj.kumar@email.com",
//       date: "2025-02-05",
//       time: "2:00 PM",
//       duration: "30 mins",
//       topic: "Resume & LinkedIn Profile",
//       status: "upcoming",
//       meetingLink: "https://meet.google.com/abc-defg-hij",
//     },
//     {
//       id: 2,
//       type: "group",
//       title: "Tech Interview Masterclass",
//       studentsCount: 25,
//       date: "2025-02-08",
//       time: "3:00 PM",
//       duration: "1 hour",
//       topic: "DSA & System Design",
//       status: "upcoming",
//       meetingLink: "https://meet.google.com/xyz-uvwx-yzab",
//       description: "Learn essential DSA patterns and system design concepts for tech interviews.",
//     },
//     {
//       id: 3,
//       type: "group",
//       title: "Startup Networking Event",
//       studentsCount: 40,
//       date: "2025-02-15",
//       time: "6:00 PM",
//       duration: "2 hours",
//       topic: "Entrepreneurship & Startups",
//       status: "upcoming",
//       meetingLink: "https://meet.google.com/123-4567-890a",
//       description: "Connect with like-minded students and explore startup opportunities.",
//     },
//   ]);

//   const [filter, setFilter] = useState("all"); // all, upcoming, completed, one-to-one, group

//   const joinSession = (id) => {
//     const session = sessions.find((s) => s.id === id);
//     if (session?.meetingLink) {
//       window.open(session.meetingLink, "_blank");
//     }
//   };

//   const cancelSession = (id) => {
//     if (!window.confirm("Are you sure you want to cancel this session?")) return;
//     setSessions((prev) =>
//       prev.map((session) =>
//         session.id === id ? { ...session, status: "cancelled" } : session
//       )
//     );
//   };

//   const filteredSessions = sessions.filter((session) => {
//     if (filter === "all") return true;
//     if (filter === "upcoming" || filter === "completed") {
//       return session.status === filter;
//     }
//     if (filter === "one-to-one" || filter === "group") {
//       return session.type === filter;
//     }
//     return true;
//   });

//   const statusColors = {
//     upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
//     completed: "bg-green-500/20 text-green-400 border-green-500/30",
//     cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
//   };

//   const typeColors = {
//     "one-to-one": "bg-purple-500/20 text-purple-400",
//     group: "bg-blue-500/20 text-blue-400",
//   };

//   const typeBgColors = {
//     "one-to-one": "bg-purple-500/10",
//     group: "bg-blue-500/10",
//   };

//   return (
//     <div className="text-white">
//       {/* Header */}
//       <div className="mb-8">
//         <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
//           Sessions
//         </p>
//         <h1 className="text-3xl font-medium">My Sessions</h1>
//         <p className="text-sm text-neutral-400 mt-2">
//           Manage your one-to-one and group mentoring sessions
//         </p>
//       </div>

//       {/* Filter Tabs */}
//       <div className="flex gap-3 mb-8 flex-wrap">
//         {["all", "upcoming", "completed", "one-to-one", "group"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setFilter(tab)}
//             className={`rounded-full px-4 py-2 text-sm transition ${
//               filter === tab
//                 ? "custom-green"
//                 : "border border-white/10 hover:bg-white/5"
//             }`}
//           >
//             {tab === "one-to-one"
//               ? "1-on-1"
//               : tab.charAt(0).toUpperCase() + tab.slice(1)}
//             {(tab === "upcoming" || tab === "completed" || tab === "one-to-one" || tab === "group") &&
//               ` (${sessions.filter((s) => {
//                 if (tab === "upcoming" || tab === "completed") {
//                   return s.status === tab;
//                 }
//                 if (tab === "one-to-one" || tab === "group") {
//                   return s.type === tab;
//                 }
//                 return false;
//               }).length})`}
//           </button>
//         ))}
//       </div>

//       {/* Sessions List */}
//       <div className="space-y-6">
//         {filteredSessions.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-neutral-500 text-sm">
//               No {filter === "all" ? "" : filter} sessions found.
//             </p>
//           </div>
//         )}

//         {filteredSessions.map((session) => (
//           <div
//             key={session.id}
//             className={`border border-white/10 rounded-xl p-6 transition ${
//               typeBgColors[session.type] || "bg-neutral-950"
//             }`}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-start mb-4">
//               <div className="flex-1">
//                 <div className="flex items-center gap-3 mb-2">
//                   <h3 className="text-lg font-medium">{session.title}</h3>
//                   <span
//                     className={`text-xs px-2 py-1 rounded-full font-medium ${
//                       typeColors[session.type]
//                     }`}
//                   >
//                     {session.type === "one-to-one" ? "1-on-1" : "Group"}
//                   </span>
//                 </div>

//                 {session.type === "one-to-one" ? (
//                   <p className="text-sm text-neutral-400">
//                     {session.studentName} · {session.studentEmail}
//                   </p>
//                 ) : (
//                   <p className="text-sm text-neutral-400">
//                     {session.studentsCount} students
//                   </p>
//                 )}
//               </div>

//               <span
//                 className={`text-xs px-3 py-1 rounded-full border font-medium whitespace-nowrap ml-4 ${
//                   statusColors[session.status]
//                 }`}
//               >
//                 {session.status.charAt(0).toUpperCase() +
//                   session.status.slice(1)}
//               </span>
//             </div>

//             {/* Details Grid */}
//             <div className="bg-black/40 rounded-lg p-4 mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div>
//                 <p className="text-xs uppercase text-neutral-500 mb-1">
//                   Date
//                 </p>
//                 <p className="font-medium">
//                   {new Date(session.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                   })}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs uppercase text-neutral-500 mb-1">
//                   Time
//                 </p>
//                 <p className="font-medium">{session.time}</p>
//               </div>

//               <div>
//                 <p className="text-xs uppercase text-neutral-500 mb-1">
//                   Duration
//                 </p>
//                 <p className="font-medium">{session.duration}</p>
//               </div>

//               <div>
//                 <p className="text-xs uppercase text-neutral-500 mb-1">
//                   Topic
//                 </p>
//                 <p className="font-medium">{session.topic}</p>
//               </div>
//             </div>

//             {/* Description for group sessions */}
//             {session.type === "group" && session.description && (
//               <div className="mb-4">
//                 <p className="text-sm text-neutral-300">{session.description}</p>
//               </div>
//             )}

//             {/* Actions */}
//             <div className="flex gap-3 flex-wrap">
//               {session.status === "upcoming" && (
//                 <>
//                   <button
//                     onClick={() => joinSession(session.id)}
//                     className="custom-green rounded-full px-6 py-2 text-sm font-medium hover:opacity-90 transition"
//                   >
//                     Join Session
//                   </button>
//                   <button
//                     onClick={() => cancelSession(session.id)}
//                     className="rounded-full border border-red-500/30 text-red-400 px-6 py-2 text-sm font-medium hover:bg-red-500/10 transition"
//                   >
//                     Cancel
//                   </button>
//                 </>
//               )}

//               {session.status === "completed" && (
//                 <button className="rounded-full border border-white/10 px-6 py-2 text-sm font-medium hover:bg-white/5 transition">
//                   View Recording
//                 </button>
//               )}

//               {session.status === "cancelled" && (
//                 <p className="text-sm text-neutral-500">Session cancelled</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AlumniSession;

import React, { useState } from "react";

const AlumniSession = () => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      type: "one-to-one",
      title: "Resume Review Session",
      studentName: "Raj Kumar",
      studentEmail: "raj.kumar@email.com",
      date: "2025-02-05",
      time: "2:00 PM",
      duration: "30 mins",
      topic: "Resume & LinkedIn Profile",
      status: "upcoming",
      meetingLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      type: "group",
      title: "Tech Interview Masterclass",
      studentsCount: 25,
      date: "2025-02-08",
      time: "3:00 PM",
      duration: "1 hour",
      topic: "DSA & System Design",
      status: "upcoming",
      meetingLink: "https://meet.google.com/xyz-uvwx-yzab",
      description:
        "Learn essential DSA patterns and system design concepts for tech interviews.",
    },
    {
      id: 3,
      type: "group",
      title: "Startup Networking Event",
      studentsCount: 40,
      date: "2025-02-15",
      time: "6:00 PM",
      duration: "2 hours",
      topic: "Entrepreneurship & Startups",
      status: "upcoming",
      meetingLink: "https://meet.google.com/123-4567-890a",
      description:
        "Connect with like-minded students and explore startup opportunities.",
    },
  ]);

  const [filter, setFilter] = useState("all");

  const joinSession = (id) => {
    const session = sessions.find((s) => s.id === id);
    if (session?.meetingLink) {
      window.open(session.meetingLink, "_blank");
    }
  };

  const cancelSession = (id) => {
    if (!window.confirm("Are you sure you want to cancel this session?")) return;
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "cancelled" } : s
      )
    );
  };

  const filteredSessions = sessions.filter((s) => {
    if (filter === "all") return true;
    if (filter === "upcoming" || filter === "completed") {
      return s.status === filter;
    }
    if (filter === "one-to-one" || filter === "group") {
      return s.type === filter;
    }
    return true;
  });

  const statusPill = {
    upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  const typePill = {
    "one-to-one": "bg-purple-500/20 text-purple-400",
    group: "bg-blue-500/20 text-blue-400",
  };

  return (
    <div className="text-white max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
          Sessions
        </p>
        <h1 className="text-3xl font-medium">My Sessions</h1>
        <p className="text-sm text-neutral-400 mt-2">
          Manage your one-to-one and group mentoring sessions
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {["all", "upcoming", "completed", "one-to-one", "group"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === tab
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "border border-white/10 text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab === "one-to-one"
                ? "1-on-1"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Sessions */}
      <div className="space-y-6">
        {filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-sm">
              No sessions found.
            </p>
          </div>
        )}

        {filteredSessions.map((session) => (
          <div
            key={session.id}
            className="border border-white/10 rounded-xl p-6 bg-neutral-950
            transition hover:border-white/20"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium">
                    {session.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      typePill[session.type]
                    }`}
                  >
                    {session.type === "one-to-one"
                      ? "1-on-1"
                      : "Group"}
                  </span>
                </div>

                {session.type === "one-to-one" ? (
                  <p className="text-sm text-neutral-400">
                    {session.studentName} ·{" "}
                    {session.studentEmail}
                  </p>
                ) : (
                  <p className="text-sm text-neutral-400">
                    {session.studentsCount} students
                  </p>
                )}
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full border font-medium ${
                  statusPill[session.status]
                }`}
              >
                {session.status.charAt(0).toUpperCase() +
                  session.status.slice(1)}
              </span>
            </div>

            {/* Details */}
            <div className="bg-black/40 rounded-lg p-4 mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs uppercase text-neutral-500 mb-1">
                  Date
                </p>
                <p className="font-medium">
                  {new Date(session.date).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric" }
                  )}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-neutral-500 mb-1">
                  Time
                </p>
                <p className="font-medium">{session.time}</p>
              </div>

              <div>
                <p className="text-xs uppercase text-neutral-500 mb-1">
                  Duration
                </p>
                <p className="font-medium">{session.duration}</p>
              </div>

              <div>
                <p className="text-xs uppercase text-neutral-500 mb-1">
                  Topic
                </p>
                <p className="font-medium">{session.topic}</p>
              </div>
            </div>

            {/* Description */}
            {session.type === "group" && session.description && (
              <p className="text-sm text-neutral-300 mb-4">
                {session.description}
              </p>
            )}

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              {session.status === "upcoming" && (
                <>
                  <button
                    onClick={() => joinSession(session.id)}
                    className="rounded-full bg-green-500/20 text-green-400 px-6 py-2
                    text-sm font-medium hover:bg-green-500/30 transition"
                  >
                    Join Session
                  </button>
                  <button
                    onClick={() => cancelSession(session.id)}
                    className="rounded-full border border-red-500/30 text-red-400 px-6 py-2
                    text-sm font-medium hover:bg-red-500/10 transition"
                  >
                    Cancel
                  </button>
                </>
              )}

              {session.status === "completed" && (
                <button className="rounded-full border border-white/10 px-6 py-2 text-sm font-medium hover:bg-white/5 transition">
                  View Recording
                </button>
              )}

              {session.status === "cancelled" && (
                <p className="text-sm text-neutral-500">
                  Session cancelled
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSession;

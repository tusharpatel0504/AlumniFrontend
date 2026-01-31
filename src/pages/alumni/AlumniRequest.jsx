// import React, { useState } from "react";

// const AlumniRequest = () => {
//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       studentName: "Raj Kumar",
//       studentEmail: "raj.kumar@email.com",
//       topic: "Interview Preparation",
//       message: "I would like to discuss my interview preparation strategy and get tips for tech interviews.",
//       status: "pending",
//       requestedDate: "2025-02-01",
//     },
//     {
//       id: 2,
//       studentName: "Priya Singh",
//       studentEmail: "priya.singh@email.com",
//       topic: "Career Guidance",
//       message: "Looking for guidance on which specialization to choose in my final year.",
//       status: "pending",
//       requestedDate: "2025-02-01",
//     },
//   ]);

//   const [filter, setFilter] = useState("pending"); // pending, approved, declined, all

//   const approveRequest = (id) => {
//     setRequests((prev) =>
//       prev.map((req) =>
//         req.id === id ? { ...req, status: "approved" } : req
//       )
//     );
//   };

//   const declineRequest = (id) => {
//     if (!window.confirm("Are you sure you want to decline this request?"))
//       return;
//     setRequests((prev) =>
//       prev.map((req) =>
//         req.id === id ? { ...req, status: "declined" } : req
//       )
//     );
//   };

//   const deleteRequest = (id) => {
//     if (!window.confirm("Delete this request permanently?")) return;
//     setRequests((prev) => prev.filter((req) => req.id !== id));
//   };

//   const filteredRequests =
//     filter === "all" ? requests : requests.filter((req) => req.status === filter);

//   const statusColors = {
//     pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
//     approved: "bg-green-500/20 text-green-400 border-green-500/30",
//     declined: "bg-red-500/20 text-red-400 border-red-500/30",
//   };

//   const statusBgColors = {
//     pending: "bg-yellow-500/20",
//     approved: "bg-green-500/20",
//     declined: "bg-red-500/20",
//   };

//   return (
//     <div className="text-white">
//       {/* Header */}
//       <div className="mb-8">
//         <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
//           Requests
//         </p>
//         <h1 className="text-3xl font-medium">Session Requests</h1>
//         <p className="text-sm text-neutral-400 mt-2">
//           Manage one-to-one session requests from students
//         </p>
//       </div>

//       {/* Filter Tabs */}
//       <div className="flex gap-3 mb-8 flex-wrap">
//         {["all", "pending", "approved", "declined"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setFilter(tab)}
//             className={`rounded-full px-4 py-2 text-sm transition ${
//               filter === tab
//                 ? "custom-green"
//                 : "border border-white/10 hover:bg-white/5"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             {tab !== "all" &&
//               ` (${requests.filter((r) => r.status === tab).length})`}
//           </button>
//         ))}
//       </div>

//       {/* Requests List */}
//       <div className="space-y-6">
//         {filteredRequests.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-neutral-500 text-sm">
//               No {filter === "all" ? "" : filter} requests found.
//             </p>
//           </div>
//         )}

//         {filteredRequests.map((request) => (
//           <div
//             key={request.id}
//             className={`border border-white/10 rounded-xl p-6 transition ${
//               statusBgColors[request.status] || "bg-neutral-950"
//             }`}
//           >
//             {/* Header with Status */}
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h3 className="text-lg font-medium">{request.studentName}</h3>
//                 <p className="text-sm text-neutral-400">{request.studentEmail}</p>
//               </div>
//               <span
//                 className={`text-xs px-3 py-1 rounded-full border font-medium ${
//                   statusColors[request.status]
//                 }`}
//               >
//                 {request.status.charAt(0).toUpperCase() +
//                   request.status.slice(1)}
//               </span>
//             </div>

//             {/* Topic and Message */}
//             <div className="bg-black/40 rounded-lg p-4 mb-4">
//               <p className="text-xs uppercase text-neutral-500 mb-2">
//                 Topic
//               </p>
//               <p className="font-medium mb-4">{request.topic}</p>

//               <p className="text-xs uppercase text-neutral-500 mb-2">
//                 Message
//               </p>
//               <p className="text-sm text-neutral-300 leading-relaxed">
//                 {request.message}
//               </p>
//             </div>

//             {/* Request Date */}
//             <p className="text-xs text-neutral-500 mb-6">
//               Requested on {new Date(request.requestedDate).toLocaleDateString()}
//             </p>

//             {/* Actions */}
//             {request.status === "pending" && (
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => approveRequest(request.id)}
//                   className="flex-1 custom-green rounded-full py-2 font-medium hover:opacity-90 transition"
//                 >
//                   Approve
//                 </button>
//                 <button
//                   onClick={() => declineRequest(request.id)}
//                   className="flex-1 rounded-full border border-red-500/30 text-red-400 py-2 font-medium hover:bg-red-500/10 transition"
//                 >
//                   Decline
//                 </button>
//               </div>
//             )}

//             {request.status !== "pending" && (
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => deleteRequest(request.id)}
//                   className="flex-1 rounded-full border border-white/10 py-2 text-sm hover:bg-white/5 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AlumniRequest;
import React, { useState } from "react";

const inputClass =
  "w-full bg-black text-white caret-green-400 " +
  "border border-white/10 rounded-lg px-4 py-2 text-sm " +
  "placeholder:text-neutral-500 " +
  "transition-all duration-200 " +
  "hover:border-white/20 " +
  "focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/30";

const AlumniRequest = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      studentName: "Raj Kumar",
      studentEmail: "raj.kumar@email.com",
      topic: "Interview Preparation",
      message:
        "I would like to discuss my interview preparation strategy and get tips for tech interviews.",
      status: "pending",
      requestedDate: "2025-02-01",
    },
    {
      id: 2,
      studentName: "Priya Singh",
      studentEmail: "priya.singh@email.com",
      topic: "Career Guidance",
      message:
        "Looking for guidance on which specialization to choose in my final year.",
      status: "pending",
      requestedDate: "2025-02-01",
    },
  ]);

  const [filter, setFilter] = useState("pending");
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [approveTargetId, setApproveTargetId] = useState(null);
  const [meetingLink, setMeetingLink] = useState("");
  const [linkError, setLinkError] = useState("");

  const approveRequest = (id, link) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status: "approved", meetingLink: link }
          : req
      )
    );
  };

  const openApproveModal = (id) => {
    setApproveTargetId(id);
    setMeetingLink("");
    setLinkError("");
    setShowApproveModal(true);
  };

  const handleApproveConfirm = () => {
    if (!meetingLink.trim()) {
      setLinkError("Meeting link is required.");
      return;
    }

    approveRequest(approveTargetId, meetingLink.trim());
    setShowApproveModal(false);
    setApproveTargetId(null);
    setMeetingLink("");
    setLinkError("");
  };

  const declineRequest = (id) => {
    if (!window.confirm("Are you sure you want to decline this request?"))
      return;
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "declined" } : req
      )
    );
  };

  const deleteRequest = (id) => {
    if (!window.confirm("Delete this request permanently?")) return;
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((req) => req.status === filter);

  const statusPill = {
    pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    approved: "bg-green-500/20 text-green-400 border-green-500/30",
    declined: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="text-white max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
          Requests
        </p>
        <h1 className="text-3xl font-medium">Session Requests</h1>
        <p className="text-sm text-neutral-400 mt-2">
          Manage one-to-one session requests from students
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {["all", "pending", "approved", "declined"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === tab
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "border border-white/10 text-neutral-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab !== "all" &&
              ` (${requests.filter((r) => r.status === tab).length})`}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-sm">
              No {filter === "all" ? "" : filter} requests found.
            </p>
          </div>
        )}

        {filteredRequests.map((request) => (
          <div
            key={request.id}
            className="border border-white/10 rounded-xl p-6 bg-neutral-950
            transition hover:border-white/20"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">
                  {request.studentName}
                </h3>
                <p className="text-sm text-neutral-400">
                  {request.studentEmail}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full border font-medium ${
                  statusPill[request.status]
                }`}
              >
                {request.status.charAt(0).toUpperCase() +
                  request.status.slice(1)}
              </span>
            </div>

            {/* Content */}
            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <p className="text-xs uppercase text-neutral-500 mb-2">
                Topic
              </p>
              <p className="font-medium mb-4">{request.topic}</p>

              <p className="text-xs uppercase text-neutral-500 mb-2">
                Message
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {request.message}
              </p>

              {request.status === "approved" && request.meetingLink && (
                <div className="mt-4">
                  <p className="text-xs uppercase text-neutral-500 mb-2">
                    Meeting Link
                  </p>
                  <a
                    href={request.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-green-400 hover:text-green-300 break-all"
                  >
                    {request.meetingLink}
                  </a>
                </div>
              )}
            </div>

            {/* Date */}
            <p className="text-xs text-neutral-500 mb-6">
              Requested on{" "}
              {new Date(request.requestedDate).toLocaleDateString()}
            </p>

            {/* Actions */}
            {request.status === "pending" ? (
              <div className="flex gap-3">
                <button
                  onClick={() => openApproveModal(request.id)}
                  className="flex-1 rounded-full bg-green-500/20 text-green-400 py-2
                  font-medium hover:bg-green-500/30 transition"
                >
                  Approve
                </button>
                <button
                  onClick={() => declineRequest(request.id)}
                  className="flex-1 rounded-full border border-red-500/30 text-red-400 py-2
                  font-medium hover:bg-red-500/10 transition"
                >
                  Decline
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={() => deleteRequest(request.id)}
                  className="flex-1 rounded-full border border-white/10 py-2
                  text-sm text-neutral-300 hover:bg-white/5 transition"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showApproveModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-medium mb-2">Approve Request</h2>
            <p className="text-sm text-neutral-400 mb-6">
              Add a meeting link to approve this session request.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase text-neutral-500 mb-2 block">
                  Meeting Link
                </label>
                <input
                  placeholder="https://meet.google.com/..."
                  value={meetingLink}
                  onChange={(e) => {
                    setMeetingLink(e.target.value);
                    if (linkError) setLinkError("");
                  }}
                  className={inputClass}
                />
                {linkError && (
                  <p className="text-xs text-red-400 mt-2">{linkError}</p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleApproveConfirm}
                  className="flex-1 rounded-full bg-green-500/20 text-green-400 py-2
                  font-medium hover:bg-green-500/30 transition"
                >
                  Approve
                </button>
                <button
                  onClick={() => setShowApproveModal(false)}
                  className="flex-1 rounded-full border border-white/10 py-2
                  text-sm text-neutral-300 hover:bg-white/5 transition"
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

export default AlumniRequest;

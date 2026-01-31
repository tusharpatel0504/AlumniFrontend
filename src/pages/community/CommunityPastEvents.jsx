import React, { useState } from "react";

const CommunityPastEvents = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Tech Talk: AI & Machine Learning",
      date: "2025-01-28",
      time: "6:00 PM",
      location: "Online",
      attendees: 45,
      description:
        "Insightful discussion on AI and Machine Learning trends and real-world applications.",
    },
    {
      id: 2,
      title: "Networking Brunch",
      date: "2025-01-22",
      time: "11:00 AM",
      location: "Downtown Cafe",
      attendees: 32,
      description:
        "Casual networking session with alumni and peers across domains.",
    },
  ]);

  return (
    <div className="text-white max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
          Community
        </p>
        <h1 className="text-3xl font-medium">Past Events</h1>
        <p className="text-sm text-neutral-400 mt-2">
          Browse events that have already taken place
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-white/10 rounded-xl p-6 bg-neutral-950
            opacity-80 hover:opacity-100 hover:border-white/20 transition"
          >
            {/* Title */}
            <h3 className="text-lg font-medium mb-2">
              {event.title}
            </h3>

            {/* Meta */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400 mb-4">
              <span>
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span>{event.time}</span>
              <span>{event.location}</span>
              <span>{event.attendees} attended</span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              {event.description}
            </p>

            {/* Status */}
            <span className="inline-block rounded-full border border-white/10
              px-4 py-1.5 text-xs text-neutral-400">
              Event Completed
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPastEvents;

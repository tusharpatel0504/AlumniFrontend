import React, { useState } from "react";

const CommunityUpcomingEvents = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Tech Talk: AI & Machine Learning",
      date: "2025-02-10",
      time: "6:00 PM",
      location: "Online",
      attendees: 45,
      description:
        "Join us for an insightful discussion on AI and Machine Learning trends in 2025.",
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      date: "2025-02-22",
      time: "3:00 PM",
      location: "Tech Hub",
      attendees: 60,
      description:
        "Showcase your startup ideas and compete for prizes with fellow innovators.",
    },
    {
      id: 3,
      title: "Web Development Workshop",
      date: "2025-02-28",
      time: "4:00 PM",
      location: "Online",
      attendees: 35,
      description:
        "Learn advanced web development techniques and industry best practices.",
    },
  ]);

  return (
    <div className="text-white max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
          Community
        </p>
        <h1 className="text-3xl font-medium">Upcoming Events</h1>
        <p className="text-sm text-neutral-400 mt-2">
          Discover and join events hosted by the community
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-white/10 rounded-xl p-6 bg-neutral-950
            hover:border-white/20 transition"
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
              <span>{event.attendees} interested</span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              {event.description}
            </p>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                className="flex-1 rounded-full bg-green-500/20 text-green-400
                py-2 text-sm font-medium hover:bg-green-500/30 transition"
              >
                Join Event
              </button>
              <button
                className="flex-1 rounded-full border border-white/10 py-2
                text-sm text-neutral-300 hover:bg-white/5 transition"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityUpcomingEvents;

import React, { useState } from "react";

const CommunityEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Talk: AI & Machine Learning",
      date: "2025-02-10",
      time: "6:00 PM",
      location: "Online",
      attendees: 45,
      image: "🤖",
      description: "Join us for an insightful discussion on AI and Machine Learning trends in 2025.",
    },
    {
      id: 2,
      title: "Networking Brunch",
      date: "2025-02-15",
      time: "11:00 AM",
      location: "Downtown Cafe",
      attendees: 32,
      image: "🍽️",
      description: "Casual networking session with alumni and peers from the community.",
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "2025-02-22",
      time: "3:00 PM",
      location: "Tech Hub",
      attendees: 60,
      image: "🚀",
      description: "Showcase your startup ideas and compete for prizes!",
    },
  ]);

  return (
    <div className="text-white max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
          Community
        </p>
        <h1 className="text-3xl font-medium">Events</h1>
        <p className="text-sm text-neutral-400 mt-2">
          Discover upcoming community events and workshops
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="border border-white/10 rounded-xl p-6 bg-neutral-950 hover:border-white/20 transition">
            {/* Event Image */}
            <div className="text-5xl mb-4">{event.image}</div>

            {/* Event Title */}
            <h3 className="text-lg font-medium mb-2">{event.title}</h3>

            {/* Event Details */}
            <div className="space-y-2 mb-4 text-sm text-neutral-400">
              <p>📅 {new Date(event.date).toLocaleDateString()}</p>
              <p>🕐 {event.time}</p>
              <p>📍 {event.location}</p>
              <p>👥 {event.attendees} attending</p>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 mb-4">{event.description}</p>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 custom-green rounded-full py-2 text-sm font-medium hover:opacity-90 transition">
                Join Event
              </button>
              <button className="flex-1 rounded-full border border-white/10 py-2 text-sm hover:bg-white/5 transition">
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityEvents;

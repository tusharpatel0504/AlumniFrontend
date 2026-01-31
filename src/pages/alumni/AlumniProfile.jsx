import React, { useState } from "react";

// Calendar component (simplified, content only)
const Calendar = ({ startDate, endDate, onDateSelect, isSelecting }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const days = [];
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const isDateInRange = (day) => {
    if (!startDate || !endDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date >= startDate && date <= endDate;
  };

  const isStartDate = (day) => {
    if (!startDate) return false;
    return (
      day === startDate.getDate() &&
      currentMonth.getMonth() === startDate.getMonth() &&
      currentMonth.getFullYear() === startDate.getFullYear()
    );
  };

  const isEndDate = (day) => {
    if (!endDate) return false;
    return (
      day === endDate.getDate() &&
      currentMonth.getMonth() === endDate.getMonth() &&
      currentMonth.getFullYear() === endDate.getFullYear()
    );
  };

  const handleDayClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    } else {
      const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      if (selectedDate >= startDate) {
        onDateSelect(selectedDate);
      }
    }
  };

  return (
    <div className="bg-neutral-900 rounded-xl p-4 border border-white/10">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          className="text-white hover:bg-neutral-800 px-2 py-1 rounded"
        >
          ←
        </button>
        <h3 className="text-white font-medium">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          className="text-white hover:bg-neutral-800 px-2 py-1 rounded"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="text-center text-xs text-neutral-400 font-medium">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => (
          <button
            key={idx}
            onClick={() => day && handleDayClick(day)}
            disabled={!day}
            className={`py-2 text-sm rounded ${
              !day
                ? "text-neutral-700"
                : isStartDate(day) || isEndDate(day)
                ? "bg-green-500 text-black font-medium"
                : isDateInRange(day)
                ? "bg-green-500/30 text-white"
                : "text-white hover:bg-white/10"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const AlumniProfile = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingAvailability, setIsEditingAvailability] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Ayaz Khan",
    role: "Senior Software Engineer",
    company: "Google",
    domain: "Backend & Systems",
    experience: "6+ years",
    mentorshipAreas: "Backend Engineering, System Design, Career Guidance",
    about: "Passionate about mentoring students and helping them bridge the gap between academics and industry.",
  });

  const [availability, setAvailability] = useState({
    startDate: null,
    endDate: null,
    startTime: "09:00",
    endTime: "17:00",
    selectingStart: true,
  });

  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date) => {
    if (availability.selectingStart) {
      setAvailability((prev) => ({ ...prev, startDate: date, selectingStart: false }));
    } else {
      if (date >= availability.startDate) {
        setAvailability((prev) => ({ ...prev, endDate: date }));
      }
    }
  };

  const saveProfile = () => {
    setIsEditingProfile(false);
  };

  const saveAvailability = () => {
    setIsEditingAvailability(false);
    setAvailability((prev) => ({ ...prev, selectingStart: true }));
  };

  return (
    <div className="text-white">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">Profile</p>
        <h1 className="text-3xl font-medium tracking-tight">Your Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="max-w-5xl border border-white/10 rounded-2xl bg-neutral-950 p-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 text-sm">
            Photo
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-medium text-white">{profileData.name}</h2>
            <p className="text-sm text-neutral-400 mt-1">
              {profileData.role} · {profileData.company}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Professional Details</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <span className="text-neutral-500">Current Role:</span> {profileData.role}
              </li>
              <li>
                <span className="text-neutral-500">Company:</span> {profileData.company}
              </li>
              <li>
                <span className="text-neutral-500">Domain:</span> {profileData.domain}
              </li>
              <li>
                <span className="text-neutral-500">Experience:</span> {profileData.experience}
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Mentorship Preferences</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <span className="text-neutral-500">Areas:</span> {profileData.mentorshipAreas}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bio */}
        <div>
          <h3 className="text-sm font-medium text-white mb-4">About</h3>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-3xl">{profileData.about}</p>
        </div>

        {/* Actions */}
        <div className="mt-10 flex gap-4">
          <button
            onClick={() => setIsEditingProfile(true)}
            className="rounded-full custom-green px-6 py-2.5 text-sm font-medium hover:bg-green-700 transition"
          >
            Edit Profile
          </button>

          <button
            onClick={() => setIsEditingAvailability(true)}
            className="rounded-full border border-white/10 px-6 py-2.5 text-sm text-neutral-300 hover:bg-white/5 transition"
          >
            Update Availability
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-medium text-white mb-6">Edit Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleProfileChange("name", e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-2">Role</label>
                <input
                  type="text"
                  value={profileData.role}
                  onChange={(e) => handleProfileChange("role", e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-2">Company</label>
                <input
                  type="text"
                  value={profileData.company}
                  onChange={(e) => handleProfileChange("company", e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-2">About</label>
                <textarea
                  value={profileData.about}
                  onChange={(e) => handleProfileChange("about", e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-500 h-24 resize-none"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={saveProfile}
                  className="flex-1 custom-green rounded-full py-2 font-medium hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 border border-white/10 text-white rounded-full py-2 hover:bg-white/5 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Update Availability Modal */}
      {isEditingAvailability && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[95vh] overflow-y-auto">
            <h2 className="text-2xl font-medium text-white mb-6">Update Availability</h2>
            <div className="space-y-6">
              {/* Calendar Section */}
              <div>
                <label className="block text-sm font-medium text-white mb-4">
                  {availability.selectingStart ? "Select Start Date" : "Select End Date"}
                </label>
                <Calendar
                  startDate={availability.startDate}
                  endDate={availability.endDate}
                  onDateSelect={handleDateSelect}
                />

                {/* Selected Dates Display */}
                {(availability.startDate || availability.endDate) && (
                  <div className="mt-4 p-4 bg-black border border-white/10 rounded-lg">
                    <p className="text-sm text-neutral-300">
                      {availability.startDate && (
                        <>
                          <span className="text-green-500">Start:</span> {availability.startDate.toDateString()}
                        </>
                      )}
                    </p>
                    {availability.endDate && (
                      <p className="text-sm text-neutral-300 mt-2">
                        <span className="text-green-500">End:</span> {availability.endDate.toDateString()}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Time Selection */}
              {availability.startDate && (
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-sm font-medium text-white mb-4">Time Slot</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-2">Start Time</label>
                      <input
                        type="time"
                        value={availability.startTime}
                        onChange={(e) =>
                          setAvailability((prev) => ({ ...prev, startTime: e.target.value }))
                        }
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-2">End Time</label>
                      <input
                        type="time"
                        value={availability.endTime}
                        onChange={(e) =>
                          setAvailability((prev) => ({ ...prev, endTime: e.target.value }))
                        }
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  onClick={saveAvailability}
                  className="flex-1 custom-green rounded-full py-2 font-medium hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditingAvailability(false);
                    setAvailability((prev) => ({ ...prev, selectingStart: true }));
                  }}
                  className="flex-1 border border-white/10 text-white rounded-full py-2 hover:bg-white/5 transition"
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

export default AlumniProfile;

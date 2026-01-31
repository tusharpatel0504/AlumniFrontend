import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Profile", href: "profile" },
  { label: "Jobs", href: "jobs" },
  { label: "Requests", href: "requests" },
  { label: "Session", href: "sessions" },
  { label: "Home", href: "/" },
];

const AlumniDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  const handleNavClick = (href) => {
    if (href === "/") {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-neutral-950 px-6 py-8 overflow-y-auto">
        {/* Brand */}
        <div className="mb-12">
          <h1 className="text-lg font-medium text-white">Alumni Portal</h1>
          <p className="text-xs text-neutral-500 mt-1">
            Mentorship dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item, idx) => {
            if (item.href === "#") {
              return (
                <button
                  key={idx}
                  className="w-full text-left block rounded-lg px-4 py-2.5 text-sm font-medium transition text-neutral-400 cursor-not-allowed opacity-50"
                  disabled
                >
                  {item.label}
                </button>
              );
            }

            if (item.href === "/") {
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium transition text-neutral-400 nav-link-hover"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <NavLink
                key={idx}
                to={item.href}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    isActive ? "custom-green" : "text-neutral-400 nav-link-hover"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="h-px bg-white/10 mb-4" />
          <button
            onClick={handleLogout}
            className="w-full text-left text-sm text-neutral-400 nav-link-hover transition font-medium px-3 py-2 rounded-lg"
            type="button"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 w-[calc(100%-16rem)] px-10 py-8 overflow-y-auto h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AlumniDashboard;

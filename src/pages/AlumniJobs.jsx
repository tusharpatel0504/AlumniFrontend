import React, { useState } from "react";

const CGPA_OPTIONS = [6, 6.5, 7, 7.5, 8];
const BRANCHES = ["CSE", "MNC", "MAE", "ECE"];
const BATCH_YEARS = [2025, 2026, 2027, 2028, 2029];

const inputClass =
  "w-full bg-black text-white caret-green-400 " +
  "border border-white/10 rounded-lg px-4 py-2 text-sm " +
  "placeholder:text-neutral-500 " +
  "transition-all duration-200 " +
  "hover:border-white/20 " +
  "focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/30";

const AlumniJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);

  const [form, setForm] = useState({
    role: "",
    company: "",
    description: "",
    minCGPA: null,
    branches: [],
    batches: [],
    status: "Open",
  });

  /* ---------- HELPERS ---------- */

  const toggleArrayItem = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const resetForm = () => {
    setForm({
      role: "",
      company: "",
      description: "",
      minCGPA: null,
      branches: [],
      batches: [],
      status: "Open",
    });
    setEditingJobId(null);
  };

  /* ---------- CRUD ---------- */

  const openCreateModal = () => {
    resetForm();
    setShowForm(true);
  };

  const openEditModal = (job) => {
    setForm(job);
    setEditingJobId(job.id);
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (editingJobId) {
      // UPDATE
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editingJobId ? { ...form, id: editingJobId } : job
        )
      );
    } else {
      // CREATE
      setJobs((prev) => [{ ...form, id: Date.now() }, ...prev]);
    }

    setShowForm(false);
    resetForm();
  };

  const deleteJob = (id) => {
    if (!window.confirm("Delete this job permanently?")) return;
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const toggleStatus = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? { ...job, status: job.status === "Open" ? "Closed" : "Open" }
          : job
      )
    );
  };

  /* ---------- UI ---------- */

  return (
    <div className="text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
            Jobs
          </p>
          <h1 className="text-3xl font-medium">Manage Job Posts</h1>
        </div>
        <button
          onClick={openCreateModal}
          className="custom-green rounded-full px-6 py-2.5 text-sm font-medium hover:opacity-90 active:scale-[0.97] transition"
        >
          Post New Job
        </button>
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {jobs.length === 0 && (
          <p className="text-neutral-500 text-sm">
            No jobs posted yet. Click "Post New Job" to get started.
          </p>
        )}

        {jobs.map((job) => (
          <div
            key={job.id}
            className="border border-white/10 rounded-xl p-6 bg-neutral-950"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">{job.role}</h3>
                <p className="text-sm text-neutral-400">{job.company}</p>

                <p className="text-xs text-neutral-500 mt-3">
                  {job.status}
                  {job.minCGPA && ` · CGPA ≥ ${job.minCGPA}`}
                  {job.batches.length > 0 &&
                    ` · Batches ${job.batches.join(", ")}`}
                  {job.branches.length > 0 &&
                    ` · ${job.branches.join(", ")}`}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  job.status === "Open"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-white/10 text-neutral-400"
                }`}
              >
                {job.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6 flex-wrap">
              <button
                onClick={() => toggleStatus(job.id)}
                className="rounded-full border border-white/10 px-4 py-1.5 text-xs hover:bg-white/5 transition"
              >
                {job.status === "Open" ? "Close Job" : "Reopen Job"}
              </button>

              <button
                onClick={() => openEditModal(job)}
                className="rounded-full border border-white/10 px-4 py-1.5 text-xs hover:bg-white/5 transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteJob(job.id)}
                className="rounded-full border border-red-500/30 text-red-400 px-4 py-1.5 text-xs hover:bg-red-500/10 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create / Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-medium mb-6">
              {editingJobId ? "Edit Job" : "Post New Job"}
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Job Title"
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
                className={inputClass}
              />

              <input
                placeholder="Company"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                className={inputClass}
              />

              <textarea
                placeholder="Job Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className={`${inputClass} h-24 resize-none`}
              />

              {/* CGPA */}
              <div>
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Minimum CGPA
                </p>
                <div className="flex flex-wrap gap-2">
                  {CGPA_OPTIONS.map((cgpa) => (
                    <button
                      key={cgpa}
                      onClick={() =>
                        setForm({
                          ...form,
                          minCGPA:
                            form.minCGPA === cgpa ? null : cgpa,
                        })
                      }
                      className={`px-4 py-1.5 rounded-full text-xs border ${
                        form.minCGPA === cgpa
                          ? "bg-green-500/20 border-green-500/40 text-green-400"
                          : "border-white/10 text-neutral-400 hover:border-green-500/30 hover:text-white"
                      }`}
                    >
                      ≥ {cgpa}
                    </button>
                  ))}
                </div>
              </div>

              {/* Batches */}
              <div>
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Eligible Batches
                </p>
                <div className="flex flex-wrap gap-2">
                  {BATCH_YEARS.map((year) => (
                    <button
                      key={year}
                      onClick={() =>
                        toggleArrayItem("batches", year)
                      }
                      className={`px-4 py-1.5 rounded-full text-xs border ${
                        form.batches.includes(year)
                          ? "bg-green-500/20 border-green-500/40 text-green-400"
                          : "border-white/10 text-neutral-400 hover:border-green-500/30 hover:text-white"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Branches */}
              <div>
                <p className="text-xs uppercase text-neutral-500 mb-2">
                  Eligible Branches
                </p>
                <div className="flex flex-wrap gap-2">
                  {BRANCHES.map((branch) => (
                    <button
                      key={branch}
                      onClick={() =>
                        toggleArrayItem("branches", branch)
                      }
                      className={`px-4 py-1.5 rounded-full text-xs border ${
                        form.branches.includes(branch)
                          ? "bg-green-500/20 border-green-500/40 text-green-400"
                          : "border-white/10 text-neutral-400 hover:border-green-500/30 hover:text-white"
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-6">
                <button
                  onClick={handleSubmit}
                  className="flex-1 custom-green rounded-full py-2 font-medium hover:opacity-90 transition"
                >
                  {editingJobId ? "Save Changes" : "Post Job"}
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-full border border-white/10 py-2 text-white hover:bg-white/5 transition"
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

export default AlumniJobs;

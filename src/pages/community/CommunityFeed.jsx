import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    author: "Raj Kumar",
    role: "Student · CSE",
    timestamp: "2 hours ago",
    title: "Received my offer from Google",
    content:
      "I’m excited to share that I’ll be joining Google next month. Thanks to the alumni mentors who helped me with system design and interviews.",
    votes: 42,
    comments: 8,
  },
  {
    id: 2,
    author: "Priya Singh",
    role: "Student · AI & ML",
    timestamp: "5 hours ago",
    title: "Looking for collaborators on a side project",
    content:
      "Working on an AI-powered study assistant using React and Node.js. Looking for interested students or alumni to collaborate.",
    votes: 19,
    comments: 5,
  },
];

const CommunityFeed = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleVote = (id, delta) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, votes: p.votes + delta } : p
      )
    );
  };

  return (
    <div className="max-w-4xl text-white">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
          Community
        </p>
        <h1 className="text-3xl font-medium tracking-tight">
          Discussions
        </h1>
        <p className="text-sm text-neutral-400 mt-2">
          Share updates, ask questions, and engage with students and alumni.
        </p>
      </div>

      {/* Create Post */}
      <div className="mb-6 border border-white/10 rounded-xl bg-neutral-950 p-4">
        <input
          type="text"
          placeholder="Create a post..."
          className="
            w-full bg-black border border-white/10
            rounded-lg px-4 py-2 text-sm
            text-white placeholder:text-neutral-500
            focus:outline-none focus:border-green-500
          "
        />
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="
              flex gap-4 rounded-xl border border-white/10
              bg-neutral-950 p-4
            "
          >
            {/* Votes */}
            <div className="flex flex-col items-center text-neutral-500">
              <button
                onClick={() => handleVote(post.id, 1)}
                className="hover:text-green-500 transition"
              >
                ▲
              </button>
              <span className="text-sm font-medium text-white">
                {post.votes}
              </span>
              <button
                onClick={() => handleVote(post.id, -1)}
                className="hover:text-green-500 transition"
              >
                ▼
              </button>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Meta */}
              <div className="flex flex-wrap gap-2 text-xs text-neutral-500 mb-2">
                <span className="text-neutral-300 font-medium">
                  {post.author}
                </span>
                <span>·</span>
                <span>{post.role}</span>
                <span>·</span>
                <span>{post.timestamp}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-white mb-2">
                {post.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                {post.content}
              </p>

              {/* Actions */}
              <div className="flex gap-6 text-xs text-neutral-500">
                <button className="hover:text-white transition">
                  💬 {post.comments} comments
                </button>
                <button className="hover:text-white transition">
                  Share
                </button>
                <button className="hover:text-white transition">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;

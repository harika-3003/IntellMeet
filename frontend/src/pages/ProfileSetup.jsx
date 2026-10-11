import { useState } from "react";

function ProfileSetup() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-xl font-bold text-slate-950 shadow-lg shadow-cyan-500/30">
            IM
          </div>

          <h1 className="text-3xl font-bold">
            Complete your profile
          </h1>

          <p className="mt-2 text-slate-400">
            Set up your IntellMeet profile to get started.
          </p>
        </div>

        {/* Profile Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

          {/* Profile Photo */}
          <div className="mb-8 flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-400/50 bg-blue-500/20 text-3xl font-bold text-cyan-300">
              👤
            </div>

            <button
              type="button"
              className="mt-3 text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              Add profile photo
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                About / Bio
              </label>

              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="4"
                placeholder="Tell your team something about you..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Save */}
            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Save Profile
            </button>

          </form>

          {/* Skip */}
          <div className="mt-5 text-center">
            <button
              type="button"
              className="text-sm text-slate-400 hover:text-white"
            >
              Skip for now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProfileSetup;
import { Link } from "react-router-dom";

function JoinMeeting() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-cyan-400 text-sm font-semibold">MEETINGS</p>
          <h1 className="text-3xl font-bold">Join Meeting</h1>
        </div>

        <Link
          to="/dashboard"
          className="text-slate-300 hover:text-white"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <main className="max-w-2xl mx-auto">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-900/30 p-8 shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Join a meeting
          </h2>

          <p className="text-slate-300 mb-8">
            Enter the meeting link or meeting ID provided by your team.
          </p>

          <label className="block text-sm font-semibold mb-2">
            Meeting Link or ID
          </label>

          <input
            type="text"
            placeholder="Enter meeting link or meeting ID"
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Join Meeting
          </button>

          <p className="mt-6 text-center text-sm text-slate-400">
            Make sure you have the correct meeting link before joining.
          </p>

        </div>
      </main>
    </div>
  );
}

export default JoinMeeting;
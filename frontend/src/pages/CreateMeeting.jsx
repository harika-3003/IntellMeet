import { Link } from "react-router-dom";

function CreateMeeting() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <p className="text-sm text-cyan-400">MEETINGS</p>
            <h1 className="text-2xl font-bold">Create Meeting</h1>
          </div>

          <Link
            to="/dashboard"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-4xl px-6 py-10">

        <div className="rounded-2xl border border-blue-400/20 bg-blue-950/40 p-8 shadow-2xl">

          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              Schedule a new meeting
            </h2>

            <p className="mt-2 text-slate-400">
              Create a meeting and invite your team members.
            </p>
          </div>

          <form className="space-y-6">

            {/* Meeting Title */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Meeting Title
              </label>

              <input
                type="text"
                placeholder="Enter meeting title"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
              />
            </div>

            {/* Date and Time */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Date
                </label>

                <input
                  type="date"
                  className="w-full rounded-lg border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Time
                </label>

                <input
                  type="time"
                  className="w-full rounded-lg border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Describe the purpose of this meeting..."
                className="w-full resize-none rounded-lg border border-white/15 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
              ></textarea>
            </div>

            {/* Participants */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Participants
              </label>

              <input
                type="text"
                placeholder="Enter participant emails separated by commas"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
              />

              <p className="mt-2 text-xs text-slate-500">
                Example: user1@gmail.com, user2@gmail.com
              </p>
            </div>

            {/* Meeting Link */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Meeting Link
              </label>

              <input
                type="url"
                placeholder="https://meet.example.com/..."
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
              />

              <p className="mt-2 text-xs text-slate-500">
                The meeting link can later be generated automatically by the backend.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">

              <button
                type="submit"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                + Create Meeting
              </button>

              <Link
                to="/dashboard"
                className="rounded-lg border border-white/20 px-6 py-3 text-center text-slate-300 transition hover:bg-white/10"
              >
                Cancel
              </Link>

            </div>

          </form>
        </div>

      </main>
    </div>
  );
}

export default CreateMeeting;
import { Link } from "react-router-dom";

function Chat() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-cyan-400 font-semibold">COMMUNICATION</p>
          <h1 className="text-3xl font-bold">Chat</h1>
        </div>

        <Link
          to="/dashboard"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Chat Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Conversations */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

          <h2 className="text-xl font-bold mb-5">
            Conversations
          </h2>

          <div className="space-y-3">

            <div className="p-4 rounded-xl bg-blue-700">
              <p className="font-semibold">
                Development Team
              </p>
              <p className="text-sm text-slate-200">
                Project discussion
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800">
              <p className="font-semibold">
                Project Team
              </p>
              <p className="text-sm text-slate-400">
                Meeting updates
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800">
              <p className="font-semibold">
                General
              </p>
              <p className="text-sm text-slate-400">
                Team announcements
              </p>
            </div>

          </div>
        </div>

        {/* Chat Window */}
        <div className="md:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl p-5 flex flex-col min-h-[500px]">

          {/* Chat Header */}
          <div className="border-b border-slate-700 pb-4">
            <h2 className="text-xl font-bold">
              Development Team
            </h2>

            <p className="text-sm text-slate-400">
              Team conversation
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 py-6 space-y-4">

            <div className="bg-slate-800 rounded-xl p-4 max-w-md">
              <p className="text-sm text-cyan-400 mb-1">
                Team Member
              </p>

              <p>
                Welcome to the IntellMeet project!
              </p>
            </div>

            <div className="bg-blue-600 rounded-xl p-4 max-w-md ml-auto">
              <p>
                Let's discuss today's meeting.
              </p>
            </div>

          </div>

          {/* Message Input */}
          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />

            <button
              className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Chat;
import { Link } from "react-router-dom";

function AIInsights() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-cyan-400 text-sm font-semibold">
            INTELLIGENT ANALYSIS
          </p>
          <h1 className="text-3xl font-bold">
            AI Insights
          </h1>
        </div>

        <Link
          to="/dashboard"
          className="text-slate-300 hover:text-white"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* AI Summary */}
      <div className="max-w-6xl mx-auto">

        <div className="rounded-2xl border border-cyan-500/30 bg-blue-900/30 p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-xl">
              🤖
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                AI Meeting Summary
              </h2>

              <p className="text-slate-400">
                -
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            No meeting summary available yet.
          </p>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="rounded-2xl border border-blue-500/30 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold mb-3">
              💡 Key Points
            </h3>

            <ul className="space-y-3 text-slate-300 text-sm">
              <li>• Project development is progressing.</li>
              <li>• Frontend features are being completed.</li>
              <li>• Backend integration is upcoming.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold mb-3">
              📋 Action Items
            </h3>

            <ul className="space-y-3 text-slate-300 text-sm">
              <li>• Complete remaining UI pages.</li>
              <li>• Connect frontend with backend APIs.</li>
              <li>• Test meeting functionality.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold mb-3">
              ✅ Decisions
            </h3>

            <ul className="space-y-3 text-slate-300 text-sm">
              <li>• Continue with the current project design.</li>
              <li>• Integrate MongoDB with the backend.</li>
              <li>• Add real-time meeting features later.</li>
            </ul>
          </div>

        </div>

        {/* Productivity */}
        <div className="mt-8 rounded-2xl border border-blue-500/30 bg-slate-900 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">
                Meeting Productivity
              </h3>

              <p className="text-slate-400 text-sm">
                AI-generated productivity overview
              </p>
            </div>

            <span className="text-cyan-400 text-2xl font-bold">
              -
            </span>
          </div>

          <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AIInsights;
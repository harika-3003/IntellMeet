import { Link } from "react-router-dom";

function Tasks() {
  const tasks = [];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-cyan-400 text-sm font-semibold">
            PRODUCTIVITY
          </p>

          <h1 className="text-3xl font-bold">
            Tasks
          </h1>
        </div>

        <Link
          to="/dashboard"
          className="text-slate-300 hover:text-white"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <main className="max-w-6xl mx-auto">

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="rounded-2xl border border-blue-500/30 bg-blue-900/30 p-6">
            <p className="text-slate-400">
              Total Tasks
            </p>

            <h2 className="text-3xl font-bold mt-2">
              -
            </h2>
          </div>

          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-900/20 p-6">
            <p className="text-slate-400">
              Pending
            </p>

            <h2 className="text-3xl font-bold mt-2">
              -
            </h2>
          </div>

          <div className="rounded-2xl border border-green-500/30 bg-green-900/20 p-6">
            <p className="text-slate-400">
              Completed
            </p>

            <h2 className="text-3xl font-bold mt-2">
              -
            </h2>
          </div>

        </div>

        {/* Add Task */}
        <div className="flex justify-end mb-6">
          <button
            type="button"
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            + Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">

          {tasks.map((task, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-500/30 bg-slate-900 p-6"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>
                  <h3 className="text-lg font-semibold">
                    {task.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {task.meeting}
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-wrap">

                  <span className="text-sm text-slate-300">
                    Due: {task.due}
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
                    {task.priority}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      task.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {task.status}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default Tasks;
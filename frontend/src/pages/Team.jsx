import { Link } from "react-router-dom";

function Team() {
  const members = [
    {
      name: "Harika",
      role: "Frontend Developer",
      status: "Online",
      initial: "H",
    },
    {
      name: "Team Member 2",
      role: "Backend Developer",
      status: "Online",
      initial: "B",
    },
    {
      name: "Team Member 3",
      role: "Database Developer",
      status: "Away",
      initial: "D",
    },
    {
      name: "Team Member 4",
      role: "Project Manager",
      status: "Offline",
      initial: "P",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-cyan-400 font-semibold">COLLABORATION</p>
          <h1 className="text-3xl font-bold">Team</h1>
        </div>

        <Link
          to="/dashboard"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Team Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <div className="bg-blue-700/30 border border-blue-500/40 rounded-2xl p-6">
          <p className="text-cyan-300">Total Members</p>
          <h2 className="text-3xl font-bold mt-2">4</h2>
        </div>

        <div className="bg-green-700/20 border border-green-500/30 rounded-2xl p-6">
          <p className="text-green-300">Online</p>
          <h2 className="text-3xl font-bold mt-2">2</h2>
        </div>

        <div className="bg-purple-700/20 border border-purple-500/30 rounded-2xl p-6">
          <p className="text-purple-300">Active Projects</p>
          <h2 className="text-3xl font-bold mt-2">3</h2>
        </div>

      </div>

      {/* Team Members */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Team Members</h2>
            <p className="text-slate-400">
              Manage and collaborate with your team
            </p>
          </div>

          <button className="bg-cyan-400 text-slate-950 px-5 py-3 rounded-xl font-semibold hover:bg-cyan-300">
            + Invite Member
          </button>
        </div>

        <div className="space-y-4">

          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-center justify-between bg-slate-800 rounded-xl p-4"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold">
                  {member.initial}
                </div>

                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-slate-400">
                    {member.role}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`text-sm ${
                    member.status === "Online"
                      ? "text-green-400"
                      : member.status === "Away"
                      ? "text-yellow-400"
                      : "text-slate-500"
                  }`}
                >
                  ● {member.status}
                </span>

                <button className="border border-slate-600 px-4 py-2 rounded-lg hover:bg-slate-700">
                  View
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Team;
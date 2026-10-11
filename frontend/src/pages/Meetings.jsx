import { Link } from "react-router-dom";

function Meetings() {
  const upcomingMeetings = [
    {
      title: "Weekly Team Meeting",
      date: "Today",
      time: "10:00 AM",
      team: "Development Team",
    },
    {
      title: "Project Discussion",
      date: "Tomorrow",
      time: "2:00 PM",
      team: "Project Team",
    },
    {
      title: "Client Meeting",
      date: "Friday",
      time: "11:30 AM",
      team: "Client Team",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-cyan-400 text-sm font-semibold">MEETINGS</p>
          <h1 className="text-3xl font-bold">Meetings</h1>
        </div>

        <Link
          to="/dashboard"
          className="text-slate-300 hover:text-white"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-8">
        <Link
          to="/create-meeting"
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          + Create Meeting
        </Link>

        <Link
          to="/join-meeting"
          className="rounded-xl border border-slate-600 bg-slate-900 px-5 py-3 font-semibold hover:bg-slate-800"
        >
          Join Meeting
        </Link>
      </div>

      {/* Upcoming Meetings */}
      <section>
        <h2 className="text-2xl font-bold mb-5">
          Upcoming Meetings
        </h2>

        <div className="space-y-4">
          {upcomingMeetings.map((meeting, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-500/30 bg-blue-900/30 p-6 flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {meeting.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {meeting.date} • {meeting.time}
                </p>

                <p className="text-slate-400 mt-1">
                  {meeting.team}
                </p>
              </div>

              <Link
                to="/join-meeting"
                className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Join
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Past Meetings */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-5">
          Past Meetings
        </h2>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <p className="text-slate-400">
            Your completed meetings will appear here.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Meetings;
import { Link } from "react-router-dom";

function AdminMeetings() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 p-5">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
            IM
          </div>

          <div>
            <h1 className="font-bold text-lg">IntellMeet</h1>
            <p className="text-xs text-blue-400">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">

          <Link
            to="/admin/dashboard"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/admin/users"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
          >
            👥 Users
          </Link>

          <Link
            to="/admin/meetings"
            className="block px-4 py-3 rounded-lg bg-blue-600"
          >
            🎥 Meetings
          </Link>

          <Link
            to="/admin/chat"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
          >
            💬 Chat
          </Link>

          <Link
            to="/admin/reports"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
          >
            📋 Reports
          </Link>

          <Link
            to="/admin/settings"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
          >
            ⚙️ Settings
          </Link>

        </nav>

        {/* Logout */}
        <div className="absolute bottom-5 left-5 right-5">
          <Link
            to="/"
            className="block text-center px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700"
          >
            🚪 Logout
          </Link>
        </div>

      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">

        {/* Header */}
        <header className="border-b border-slate-800 px-8 py-5">
          <p className="text-sm text-blue-400">
            ADMINISTRATION
          </p>

          <h2 className="text-3xl font-bold mt-1">
            Meeting Management
          </h2>

          <p className="text-slate-400 mt-2">
            View and manage meetings across the IntellMeet platform
          </p>
        </header>

        <div className="p-8">

          {/* Search and Filter */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-6">

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Search meetings..."
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
              />

              <select
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
              >
                <option>All Status</option>
                <option>Scheduled</option>
                <option>Live</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>

              <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
                Search
              </button>

            </div>

          </div>

          {/* Meeting Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">
                Total Meetings
              </p>

              <h3 className="text-3xl font-bold mt-2">
                —
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                All meetings
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">
                Live Meetings
              </p>

              <h3 className="text-3xl font-bold mt-2">
                —
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Currently active
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">
                Completed
              </p>

              <h3 className="text-3xl font-bold mt-2">
                —
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Completed meetings
              </p>
            </div>

          </div>

          {/* Meetings Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

            <div className="p-6 border-b border-slate-800">
              <h3 className="text-xl font-semibold">
                Meetings
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                Meeting information will appear here after backend integration.
              </p>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-800">

                  <tr>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Meeting
                    </th>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Organizer
                    </th>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Date & Time
                    </th>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Participants
                    </th>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Status
                    </th>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-t border-slate-800">

                    <td className="px-6 py-6">
                      —
                    </td>

                    <td className="px-6 py-6">
                      —
                    </td>

                    <td className="px-6 py-6 text-slate-400">
                      —
                    </td>

                    <td className="px-6 py-6">
                      —
                    </td>

                    <td className="px-6 py-6">

                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm">
                        —
                      </span>

                    </td>

                    <td className="px-6 py-6">

                      <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg">
                        View
                      </button>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* Backend Information */}
          <div className="mt-6 bg-blue-950/40 border border-blue-900 rounded-xl p-5">

            <h3 className="font-semibold text-blue-400">
              Backend Integration
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Meeting data will be loaded from MongoDB through the
              Node.js and Express backend after integration.
            </p>

          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminMeetings;
import { Link } from "react-router-dom";

function AdminReports() {
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
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
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
            className="block px-4 py-3 rounded-lg bg-blue-600"
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
            Reports & Analytics
          </h2>

          <p className="text-slate-400 mt-2">
            Monitor platform activity and meeting performance
          </p>

        </header>

        <div className="p-8">

          {/* Filter Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-6">

            <div className="flex flex-col md:flex-row gap-4 items-center">

              <select
                className="w-full md:w-auto px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
              >
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>

              <button className="w-full md:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
                Generate Report
              </button>

              <button className="w-full md:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium">
                Export Report
              </button>

            </div>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

              <p className="text-slate-400">
                Total Users
              </p>

              <h3 className="text-3xl font-bold mt-2">
                —
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Registered users
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

              <p className="text-slate-400">
                Total Meetings
              </p>

              <h3 className="text-3xl font-bold mt-2">
                —
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Meetings conducted
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

              <p className="text-slate-400">
                Meeting Hours
              </p>

              <h3 className="text-3xl font-bold mt-2">
                —
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Total meeting duration
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

              <p className="text-slate-400">
                Active Users
              </p>

              <h3 className="text-3xl font-bold mt-2">
                —
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Currently active
              </p>

            </div>

          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* User Activity */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <h3 className="text-xl font-semibold">
                User Activity
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                User activity trends
              </p>

              <div className="h-64 mt-6 flex items-center justify-center border border-dashed border-slate-700 rounded-xl">

                <div className="text-center">

                  <div className="text-4xl mb-3">
                    📈
                  </div>

                  <p className="text-slate-400">
                    Analytics data will appear here
                  </p>

                  <p className="text-xs text-slate-500 mt-2">
                    Backend data required
                  </p>

                </div>

              </div>

            </div>

            {/* Meeting Activity */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <h3 className="text-xl font-semibold">
                Meeting Activity
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                Meeting activity trends
              </p>

              <div className="h-64 mt-6 flex items-center justify-center border border-dashed border-slate-700 rounded-xl">

                <div className="text-center">

                  <div className="text-4xl mb-3">
                    📊
                  </div>

                  <p className="text-slate-400">
                    Analytics data will appear here
                  </p>

                  <p className="text-xs text-slate-500 mt-2">
                    Backend data required
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Report Summary */}
          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-semibold">
              Report Summary
            </h3>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400">
                  Average Meeting Duration
                </p>

                <p className="text-xl font-semibold mt-2">
                  —
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400">
                  Average Participants
                </p>

                <p className="text-xl font-semibold mt-2">
                  —
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400">
                  Meeting Completion Rate
                </p>

                <p className="text-xl font-semibold mt-2">
                  —
                </p>
              </div>

            </div>

          </div>

          {/* Backend Information */}
          <div className="mt-6 bg-blue-950/40 border border-blue-900 rounded-xl p-5">

            <h3 className="font-semibold text-blue-400">
              Backend Integration
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Analytics and report values will be calculated from
              MongoDB data through the Node.js and Express backend.
            </p>

          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminReports;
import { Link } from "react-router-dom";

function AdminUsers() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 p-5">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
            IM
          </div>

          <div>
            <h1 className="font-bold text-lg">IntellMeet</h1>
            <p className="text-xs text-blue-400">Admin Panel</p>
          </div>
        </div>

        <nav className="space-y-2">

          <Link
            to="/admin/dashboard"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/admin/users"
            className="block px-4 py-3 rounded-lg bg-blue-600"
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
          <p className="text-sm text-blue-400">ADMINISTRATION</p>

          <h2 className="text-3xl font-bold mt-1">
            User Management
          </h2>

          <p className="text-slate-400 mt-2">
            View and manage IntellMeet users
          </p>
        </header>

        <div className="p-8">

          {/* Search and Actions */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-6">

            <div className="flex flex-col md:flex-row gap-4 justify-between">

              <input
                type="text"
                placeholder="Search users..."
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
              />

              <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
                Add User
              </button>

            </div>

          </div>

          {/* Users Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

            <div className="p-6 border-b border-slate-800">
              <h3 className="text-xl font-semibold">
                Registered Users
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                User information will appear here after backend integration.
              </p>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-800">

                  <tr>
                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Name
                    </th>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Email
                    </th>

                    <th className="text-left px-6 py-4 text-sm text-slate-300">
                      Role
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

          {/* Information */}
          <div className="mt-6 bg-blue-950/40 border border-blue-900 rounded-xl p-5">

            <h3 className="font-semibold text-blue-400">
              Backend Integration
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              User data will be loaded from MongoDB through the Node.js
              and Express backend after integration.
            </p>

          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminUsers;
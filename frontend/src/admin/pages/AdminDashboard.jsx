import { Link } from "react-router-dom";

function AdminDashboard() {
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
            className="block px-4 py-3 rounded-lg bg-blue-600"
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
        <header className="border-b border-slate-800 px-8 py-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-400">ADMINISTRATION</p>
            <h2 className="text-3xl font-bold">
              Admin Dashboard
            </h2>
          </div>

          <div className="text-right">
            <p className="font-medium">Admin</p>
            <p className="text-sm text-slate-400">
              Platform Administrator
            </p>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">

          {/* Welcome */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold">
              Welcome to IntellMeet Admin Panel 👋
            </h3>

            <p className="text-blue-100 mt-2">
              Manage users, meetings, reports and platform activity
              from one place.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">Total Users</p>
              <h3 className="text-3xl font-bold mt-2">—</h3>
              <p className="text-sm text-slate-500 mt-2">
                Registered users
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">Total Meetings</p>
              <h3 className="text-3xl font-bold mt-2">—</h3>
              <p className="text-sm text-slate-500 mt-2">
                Meetings created
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">Active Meetings</p>
              <h3 className="text-3xl font-bold mt-2">—</h3>
              <p className="text-sm text-slate-500 mt-2">
                Currently active
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">Platform Activity</p>
              <h3 className="text-3xl font-bold mt-2">—</h3>
              <p className="text-sm text-slate-500 mt-2">
                Current activity
              </p>
            </div>

          </div>

          {/* Quick Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-5">
                User Management
              </h3>

              <p className="text-slate-400 mb-5">
                Manage registered users and their accounts.
              </p>

              <Link
                to="/admin/users"
                className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Manage Users
              </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-5">
                Meeting Management
              </h3>

              <p className="text-slate-400 mb-5">
                View and manage meetings across the platform.
              </p>

              <Link
                to="/admin/meetings"
                className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Manage Meetings
              </Link>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
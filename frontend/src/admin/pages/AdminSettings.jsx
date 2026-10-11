import { Link } from "react-router-dom";

function AdminSettings() {
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
            className="block px-4 py-3 rounded-lg hover:bg-slate-800"
          >
            📋 Reports
          </Link>

          <Link
            to="/admin/settings"
            className="block px-4 py-3 rounded-lg bg-blue-600"
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
            Admin Settings
          </h2>

          <p className="text-slate-400 mt-2">
            Manage administrator and platform settings
          </p>

        </header>

        <div className="p-8 space-y-6">

          {/* Admin Account */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-semibold">
              Administrator Account
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Manage administrator account information
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Admin Name
                </label>

                <input
                  type="text"
                  placeholder="Enter admin name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Admin Email
                </label>

                <input
                  type="email"
                  placeholder="Enter admin email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                />
              </div>

            </div>

            <button className="mt-5 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
              Save Account
            </button>

          </section>

          {/* Security */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-semibold">
              Security
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Manage administrator security options
            </p>

            <div className="space-y-4 mt-6">

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

                <div>
                  <p className="font-medium">
                    Two-Factor Authentication
                  </p>

                  <p className="text-sm text-slate-400">
                    Add an extra layer of security
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-500"
                />

              </div>

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

                <div>
                  <p className="font-medium">
                    Login Notifications
                  </p>

                  <p className="text-sm text-slate-400">
                    Receive notifications for admin logins
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-500"
                />

              </div>

            </div>

            <button className="mt-5 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg">
              Change Password
            </button>

          </section>

          {/* Platform Settings */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-semibold">
              Platform Settings
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Configure general IntellMeet platform options
            </p>

            <div className="space-y-4 mt-6">

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

                <div>
                  <p className="font-medium">
                    User Registration
                  </p>

                  <p className="text-sm text-slate-400">
                    Allow new users to register
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-500"
                />

              </div>

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

                <div>
                  <p className="font-medium">
                    Meeting Creation
                  </p>

                  <p className="text-sm text-slate-400">
                    Allow users to create meetings
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-500"
                />

              </div>

            </div>

          </section>

          {/* Notifications */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-semibold">
              Notifications
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Configure platform notifications
            </p>

            <div className="space-y-4 mt-6">

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

                <div>
                  <p className="font-medium">
                    System Notifications
                  </p>

                  <p className="text-sm text-slate-400">
                    Receive important platform alerts
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-500"
                />

              </div>

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

                <div>
                  <p className="font-medium">
                    Meeting Alerts
                  </p>

                  <p className="text-sm text-slate-400">
                    Receive meeting-related alerts
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-500"
                />

              </div>

            </div>

          </section>

          {/* Danger Zone */}
          <section className="bg-red-950/30 border border-red-900 rounded-2xl p-6">

            <h3 className="text-xl font-semibold text-red-400">
              Danger Zone
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              These actions can affect the entire platform.
            </p>

            <button className="mt-5 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium">
              Disable Platform
            </button>

          </section>

          {/* Backend Information */}
          <div className="bg-blue-950/40 border border-blue-900 rounded-xl p-5">

            <h3 className="font-semibold text-blue-400">
              Backend Integration
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Admin settings and platform configuration will be
              stored and managed through the Node.js, Express and
              MongoDB backend after integration.
            </p>

          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminSettings;
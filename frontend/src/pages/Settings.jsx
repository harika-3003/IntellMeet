import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="border-b border-slate-800 px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-400">ACCOUNT</p>
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <Link
          to="/dashboard"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">

        {/* Account Settings */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-5">
            Account Settings
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block text-sm text-slate-400 mb-2">
                Email Notifications
              </label>

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-slate-400">
                    Receive meeting and task notifications
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">
                Meeting Reminders
              </label>

              <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">
                <div>
                  <p className="font-medium">Meeting Reminders</p>
                  <p className="text-sm text-slate-400">
                    Get reminders before scheduled meetings
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-blue-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Appearance */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-5">
            Appearance
          </h2>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="font-medium">Theme</p>
            <p className="text-sm text-slate-400 mt-1">
              Dark theme
            </p>
          </div>
        </div>

        {/* Security */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-5">
            Security
          </h2>

          <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
            Change Password
          </button>
        </div>

        {/* Back */}
        <div className="text-center pt-2">
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg"
          >
            Back to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Settings;
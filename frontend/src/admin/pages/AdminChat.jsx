import { Link } from "react-router-dom";

function AdminChat() {
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
            className="block px-4 py-3 rounded-lg bg-blue-600"
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
      <main className="ml-64 min-h-screen flex flex-col">

        {/* Header */}
        <header className="border-b border-slate-800 px-8 py-5">
          <p className="text-sm text-blue-400">
            ADMINISTRATION
          </p>

          <h2 className="text-3xl font-bold mt-1">
            Admin Chat
          </h2>

          <p className="text-slate-400 mt-2">
            Communicate with users and team members
          </p>
        </header>

        {/* Chat Area */}
        <div className="flex-1 p-8">

          <div className="h-[650px] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex">

            {/* Conversations */}
            <div className="w-80 border-r border-slate-800 flex flex-col">

              <div className="p-5 border-b border-slate-800">
                <h3 className="text-xl font-semibold">
                  Conversations
                </h3>

                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full mt-4 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex-1 overflow-y-auto">

                {/* Conversation 1 */}
                <button className="w-full text-left p-4 bg-blue-600 border-b border-slate-800">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                      U
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold">
                        User Support
                      </p>

                      <p className="text-sm text-blue-100 truncate">
                        —
                      </p>
                    </div>

                  </div>

                </button>

                {/* Conversation 2 */}
                <button className="w-full text-left p-4 hover:bg-slate-800 border-b border-slate-800">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-purple-500 flex items-center justify-center font-bold">
                      T
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold">
                        Team Chat
                      </p>

                      <p className="text-sm text-slate-400 truncate">
                        —
                      </p>
                    </div>

                  </div>

                </button>

                {/* Conversation 3 */}
                <button className="w-full text-left p-4 hover:bg-slate-800 border-b border-slate-800">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center font-bold">
                      G
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold">
                        General Support
                      </p>

                      <p className="text-sm text-slate-400 truncate">
                        —
                      </p>
                    </div>

                  </div>

                </button>

              </div>

            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">

              {/* Chat Header */}
              <div className="p-5 border-b border-slate-800">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                    U
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      User Support
                    </h3>

                    <p className="text-sm text-slate-400">
                      Admin communication
                    </p>
                  </div>

                </div>

              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto">

                <div className="text-center py-20">

                  <div className="text-5xl mb-4">
                    💬
                  </div>

                  <h3 className="text-xl font-semibold">
                    No messages yet
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Messages will appear here after chat backend integration.
                  </p>

                </div>

              </div>

              {/* Message Input */}
              <div className="p-5 border-t border-slate-800">

                <div className="flex gap-3">

                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
                  />

                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
                    Send
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminChat;
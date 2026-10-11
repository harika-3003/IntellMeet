import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-800 bg-slate-900 lg:block">

        {/* Logo */}
        <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">
            IM
          </div>

          <span className="text-xl font-bold">
            IntellMeet
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-xl bg-blue-600/20 px-4 py-3 text-blue-400"
          >
            🏠
            <span>Dashboard</span>
          </Link>

          <Link
            to="/meetings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            📅
            <span>Meetings</span>
          </Link>

          <Link
            to="/ai-insights"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            🤖
            <span>AI Insights</span>
          </Link>

          <Link
            to="/tasks"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            ✅
            <span>Tasks</span>
          </Link>

          <Link
            to="/team"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            👥
            <span>Team</span>
          </Link>

          <Link
            to="/chat"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            💬
            <span>Chat</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            👤
            <span>Profile</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            ⚙️
            <span>Settings</span>
          </Link>

        </nav>

        {/* Logout */}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            🚪
            <span>Logout</span>
          </Link>
        </div>

      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">

        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 backdrop-blur-xl lg:px-10">

          <div>
            <p className="text-sm text-slate-500">
              Dashboard
            </p>

            <h1 className="text-xl font-semibold">
              Overview
            </h1>
          </div>

          <div className="flex items-center gap-4">

            <button className="relative rounded-xl border border-slate-800 bg-slate-900 p-3 hover:bg-slate-800">
              🔔
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500"></span>
            </button>

            <Link
              to="/profile"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold">
                U
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-medium">
                  User
                </p>

                <p className="text-xs text-slate-500">
                  My Profile
                </p>
              </div>
            </Link>

          </div>

        </header>

        {/* Dashboard Body */}
        <div className="space-y-8 p-6 lg:p-10">

          {/* Welcome */}
          <section className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-slate-900 p-8">

            <p className="mb-2 text-sm font-medium text-blue-400">
              SMART COLLABORATION
            </p>

            <h2 className="text-3xl font-bold">
              Welcome back! 👋
            </h2>

            <p className="mt-2 max-w-2xl text-slate-400">
              Stay organized, collaborate with your team,
              and make every meeting more productive.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                to="/create-meeting"
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
              >
                + Create Meeting
              </Link>

              <Link
                to="/join-meeting"
                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold transition hover:bg-slate-800"
              >
                Join Meeting
              </Link>

            </div>

          </section>

          {/* Statistics */}
          <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-500">
                Total Meetings
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                24
              </h3>

              <p className="mt-2 text-sm text-emerald-400">
                +12% this month
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-500">
                Upcoming
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                6
              </h3>

              <p className="mt-2 text-sm text-blue-400">
                Next meeting today
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-500">
                Completed
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                18
              </h3>

              <p className="mt-2 text-sm text-emerald-400">
                75% completion
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-500">
                Pending Tasks
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                8
              </h3>

              <p className="mt-2 text-sm text-orange-400">
                3 due soon
              </p>
            </div>

          </section>

          {/* Meetings + Tasks */}
          <section className="grid gap-6 xl:grid-cols-3">

            {/* Upcoming Meetings */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">

              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Upcoming Meetings
                </h2>

                <Link
                  to="/meetings"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  View all
                </Link>
              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
                  <div>
                    <h3 className="font-medium">
                      Weekly Product Sync
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Today • 10:00 AM
                    </p>
                  </div>

                  <span className="rounded-lg bg-blue-500/10 px-3 py-2 text-sm text-blue-400">
                    Join
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
                  <div>
                    <h3 className="font-medium">
                      Team Planning
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Tomorrow • 2:00 PM
                    </p>
                  </div>

                  <span className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
                    Upcoming
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
                  <div>
                    <h3 className="font-medium">
                      Client Discussion
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Friday • 11:30 AM
                    </p>
                  </div>

                  <span className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
                    Upcoming
                  </span>
                </div>

              </div>

            </div>

            {/* Pending Tasks */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Pending Tasks
                </h2>

                <Link
                  to="/tasks"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  View all
                </Link>
              </div>

              <div className="space-y-4">

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="font-medium">
                    Prepare project report
                  </p>

                  <p className="mt-1 text-xs text-orange-400">
                    Due today
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="font-medium">
                    Review meeting notes
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Due tomorrow
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="font-medium">
                    Update presentation
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Due Friday
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Recent Meetings + Notifications */}
          <section className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="mb-5 text-xl font-semibold">
                Recent Meetings
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <p className="font-medium">
                      Sprint Review
                    </p>

                    <p className="text-sm text-slate-500">
                      Yesterday
                    </p>
                  </div>

                  <span className="text-sm text-emerald-400">
                    Completed
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <p className="font-medium">
                      Design Discussion
                    </p>

                    <p className="text-sm text-slate-500">
                      2 days ago
                    </p>
                  </div>

                  <span className="text-sm text-emerald-400">
                    Completed
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      Team Standup
                    </p>

                    <p className="text-sm text-slate-500">
                      3 days ago
                    </p>
                  </div>

                  <span className="text-sm text-emerald-400">
                    Completed
                  </span>
                </div>

              </div>

            </div>

            {/* Notifications */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="mb-5 text-xl font-semibold">
                Notifications
              </h2>

              <div className="space-y-4">

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="font-medium">
                    New meeting invitation
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    You were invited to Weekly Product Sync.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="font-medium">
                    Task assigned
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    A new task was assigned to you.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="font-medium">
                    Meeting summary ready
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    AI generated a summary for your recent meeting.
                  </p>
                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
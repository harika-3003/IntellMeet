import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <div className="text-2xl font-bold text-cyan-400">
          IntellMeet
        </div>

        <div className="flex items-center gap-8">
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#features" className="hover:text-cyan-400">
            Features
          </a>

          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <Link
            to="/login"
            className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[650px] flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-20 max-w-7xl mx-auto"
      >

        <div className="max-w-2xl">

          <p className="text-cyan-400 font-semibold mb-4">
            SMART COLLABORATION • BETTER MEETINGS
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Meetings that
            <span className="text-cyan-400"> think with you.</span>
          </h1>

          <p className="text-slate-400 text-lg mt-6 leading-8">
            IntellMeet brings meetings, conversations and intelligent
            insights together in one collaborative workspace.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              to="/login"
              className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="border border-slate-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-800"
            >
              Explore Features
            </a>

          </div>

        </div>

        {/* Meeting Preview */}
        <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl">

          <div className="flex justify-between text-sm text-slate-400 mb-6">
            <span className="text-cyan-400">
              ● Live Meeting
            </span>

            <span>12:42</span>
          </div>

          <div className="h-56 bg-slate-800 rounded-xl flex flex-col items-center justify-center">

            <div className="w-20 h-20 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-2xl font-bold">
              IM
            </div>

            <p className="mt-4 text-slate-300">
              Team Collaboration
            </p>

          </div>

          <div className="mt-5">
            <h3 className="font-bold text-lg">
              Weekly Product Sync
            </h3>

            <p className="text-cyan-400 text-sm mt-1">
              AI assistant is ready
            </p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="px-10 py-20 bg-slate-900"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 font-semibold">
            INTELLMEET FEATURES
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Everything you need for
            <span className="text-cyan-400"> better meetings.</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl">
            IntellMeet helps teams communicate, collaborate and turn
            conversations into meaningful actions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Smart Meetings
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Organize and manage meetings from one collaborative workspace.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                AI Meeting Insights
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Turn conversations into summaries, decisions and tasks.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Team Collaboration
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Work together with your team and keep important information connected.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Action Tracking
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Keep track of important tasks and decisions after every meeting.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-10 py-20"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 font-semibold">
            ABOUT INTELLMEET
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Meetings should create
            <span className="text-cyan-400"> progress.</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl leading-7">
            IntellMeet brings communication, collaboration and
            AI-powered meeting intelligence together in one workspace.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <div className="text-cyan-400 text-2xl font-bold">
                01
              </div>

              <h3 className="text-xl font-bold mt-4">
                Real-time Collaboration
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Connect with your team and collaborate during meetings
                from one workspace.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <div className="text-cyan-400 text-2xl font-bold">
                02
              </div>

              <h3 className="text-xl font-bold mt-4">
                AI-powered Insights
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Convert meeting conversations into summaries,
                decisions and actionable tasks.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <div className="text-cyan-400 text-2xl font-bold">
                03
              </div>

              <h3 className="text-xl font-bold mt-4">
                Connected Workspace
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                Keep meetings, conversations and important information
                organized together.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 IntellMeet. All rights reserved.
      </footer>

    </div>
  );
}

export default Home;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import CreateMeeting from "./pages/CreateMeeting";
import JoinMeeting from "./pages/JoinMeeting";
import Meetings from "./pages/Meetings";
import AIInsights from "./pages/AIInsights";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminUsers from "./admin/pages/AdminUsers";
import AdminMeetings from "./admin/pages/AdminMeetings";
import AdminChat from "./admin/pages/AdminChat";
import AdminReports from "./admin/pages/AdminReports";
import AdminSettings from "./admin/pages/AdminSettings";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/join-meeting" element={<JoinMeeting/>} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/team" element={<Team />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/meetings" element={<AdminMeetings />} />
        <Route path="/admin/chat" element={<AdminChat />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { NavLink, useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  Users,
  CalendarDays,
  MessageCircleMore,
  LogOut,
  Menu,
  ShieldCheck,
} from "lucide-react";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import "./Admin.css";

const navItems = [
  { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/messages", label: "Messages", icon: MessageSquare },
  { path: "/admin/jobs", label: "Jobs", icon: Briefcase },
  { path: "/admin/applications", label: "Applications", icon: Users },
  { path: "/admin/interviews", label: "Interviews", icon: CalendarDays },
  { path: "/admin/interview-feedback", label: "Feedback", icon: MessageCircleMore },
  { path: "/admin/users", label: "Admin Users", icon: UserPlus },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin-login");
  };

  const user = {
    name: "Admin",
    email: "admin@pirnav.com",
  };

  return (
    <div className="admin-container">
      <aside className={`admin-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h4>Admin Panel</h4>
            <small>Management Console</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={16} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-box">
            <div className="avatar">{user.name.charAt(0)}</div>
            <div>
              <p>{user.name}</p>
              <small>{user.email}</small>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu size={18} />
      </button>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

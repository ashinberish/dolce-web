import { Navigate, NavLink, Outlet } from "react-router-dom";
import "./main-layout.scss";
import {
  House,
  Search,
  Settings,
  Telescope,
  TrendingUp,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useStore } from "@/stores";

const MainLayout = () => {
  const { auth_token } = useStore();

  if (auth_token === null) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return (
    <>
      <div className="flex">
        <nav className="flex flex-col fixed">
          <div className="app-logo">
            <h3 className="brand-text">Dolce</h3>
          </div>
          <div className="nav-links flex-1">
            <ul>
              <li>
                <NavLink to="/">
                  <House />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/search">
                  <Search />
                  <span>Search</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/explore">
                  <Telescope />
                  <span>Explore</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/trending">
                  <TrendingUp />
                  <span>Trending</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends">
                  <UsersRound />
                  <span>Friends</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="account-settings">
            <ul>
              <li>
                <NavLink to="/settings">
                  <Settings />
                  <span>Settings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile">
                  <UserRound />
                  <span>Profile</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;

import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import { Login } from "../Login/Login";
import { Main } from "../Main/Main";
import { Sidebar } from "../Sidebar/Sidebar";
import "../style.scss";
import { WorkingPanel } from "../WorkingPanel/WorkingPanel";
import "./App.style.scss";
import { useToken } from "./useToken";

export const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  const routes = [
    { path: "/", name: "Main", Component: <Main /> },
    { path: "/dashboard", name: "Dashboard", Component: <Dashboard /> },
    { path: "/statistics", name: "Statistics", Component: <Main /> },
  ];
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Sidebar />
        <WorkingPanel>
          {token ? (
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} />
              ))}
            </Routes>
          ) : (
            <Login setToken={setToken} />
          )}
        </WorkingPanel>
      </HashRouter>
    </div>
  );
};

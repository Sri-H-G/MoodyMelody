import React, { createContext, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import "./App.css";

export const sidebarCollapsedContext = createContext(null);

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  return (
    <>
      <sidebarCollapsedContext.Provider
        value={[sidebarCollapsed, setSidebarCollapsed]}
      >
        <Sidebar />
        <Main />
      </sidebarCollapsedContext.Provider>
    </>
  );
}

export default App;

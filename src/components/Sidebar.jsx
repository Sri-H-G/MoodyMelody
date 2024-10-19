import React, { useState, useRef } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleBtnRef = useRef(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [chatList, setchatList] = useState(null);

  return (
    <div>
      <div className="sidebar-header">
        <button
          ref={toggleBtnRef}
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="-2" y1="5" x2="18" y2="5" />
            <line x1="-2" y1="10" x2="18" y2="10" />
            <line x1="-2" y1="15" x2="18" y2="15" />
          </svg>
        </button>
      </div>
      <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <nav className="sidebar-menu">
          <ul>
            {chatList.map((item) => (
              <li className="menu-item" key={item.id}>
                {/* Access item properties here  */}
              </li>
            ))}
            <li className="menu-item">
              <a href="#">
                <i className="icon">🏠</i>
                {!isCollapsed && <span>Home</span>}
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon">💬</i>
                {!isCollapsed && <span>Messages</span>}
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon">📁</i>
                {!isCollapsed && <span>Files</span>}
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon">⚙️</i>
                {!isCollapsed && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

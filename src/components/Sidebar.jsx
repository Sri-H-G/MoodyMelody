import React, { useState, useRef, useContext } from "react";
import { sidebarCollapsedContext } from "../App.jsx";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useContext(sidebarCollapsedContext);
  const [chatList, setchatList] = useState([]);
  const toggleCollapseRef = useRef(null);
  const toggleNewChatRef = useRef(null);

  const chatHistory = class {
    constructor(name) {
      this.Name = name;
      this.Time = time;
    }
  };
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="sidebar-header">
        <button
          ref={toggleCollapseRef}
          className="toggle-btn"
          onClick={toggleCollapse}
        >
          <svg
            fill="#000000"
            // Adjust width and height as needed
            width="50px"
            height="50px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            stroke="#000000"
            strokeWidth="0.0033"
          >
            <g id="SVGRepo_iconCarrier">
              <g id="XMLID_106_">
                {isCollapsed
                  ? [
                      <path
                        id="XMLID_104_"
                        d="M310.607,154.391l-150-149.997c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0,21.213l139.393,139.39L139.394,304.394c-5.857,5.858-5.857,15.355,0,21.213 c2.929,2.929,6.768,4.393,10.606,4.393s7.678-1.464,10.607-4.394l150-150.003c2.813-2.813,4.393-6.628,4.393-10.606 C315,161.019,313.42,157.204,310.607,154.391z"
                      ></path>,
                      <path
                        id="XMLID_105_"
                        d="M195.001,164.996c0-3.979-1.581-7.794-4.394-10.607L40.606,4.393c-5.858-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.394,139.39L19.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C22.322,328.536,26.161,330,30,330s7.678-1.464,10.607-4.394l150.001-150.004C193.42,172.79,195.001,168.974,195.001,164.996z"
                      ></path>,
                    ]
                  : [
                      <path
                        id="XMLID_107_"
                        d="M51.213,165.004L190.607,25.607c5.857-5.858,5.857-15.355-0.001-21.213 c-5.857-5.858-15.355-5.858-21.213,0.001l-150,150.004C16.58,157.211,15,161.026,15,165.004c0,3.979,1.581,7.794,4.394,10.607 l150,149.996C172.322,328.536,176.161,330,180,330s7.678-1.464,10.607-4.394c5.857-5.858,5.857-15.355-0.001-21.213L51.213,165.004 z"
                      />,
                      <path
                        id="XMLID_108_"
                        d="M171.213,165.004L310.607,25.607c5.858-5.858,5.858-15.355,0-21.213 c-5.857-5.858-15.355-5.858-21.213,0.001l-150,150.004c-2.813,2.813-4.393,6.628-4.393,10.606c0,3.979,1.581,7.794,4.394,10.607 l150,149.996C292.322,328.536,296.161,330,300,330c3.839,0,7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213 L171.213,165.004z"
                      />,
                    ]}
              </g>
            </g>
          </svg>
        </button>
      </div>
      <h1>{}</h1>
      <aside id="sidebar" className={`${isCollapsed ? "collapsed" : ""}`}>
        <nav className="sidebar-menu">
          <ul>
            <button
              ref={toggleNewChatRef}
              className={`newchat-btn ${isCollapsed ? "collapsed" : ""}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="style=doutone">
                    {" "}
                    <g id="add-circle">
                      {" "}
                      <path
                        id="vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        id="vector (Stroke)_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 7.00744C12.4142 7.00744 12.75 7.34323 12.75 7.75744L12.75 16.2427C12.75 16.6569 12.4142 16.9927 12 16.9927C11.5857 16.9927 11.25 16.6569 11.25 16.2427L11.25 7.75743C11.25 7.34322 11.5858 7.00744 12 7.00744Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        id="vector (Stroke)_3"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 12C17 12.4142 16.6642 12.75 16.25 12.75L7.76476 12.75C7.35055 12.75 7.01476 12.4142 7.01476 12C7.01477 11.5857 7.35055 11.25 7.76477 11.25L16.25 11.25C16.6642 11.25 17 11.5858 17 12Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h2>New Chat</h2>
            </button>
            {chatList.map((item) => (
              <li className="chat-history-item" key={item.id}>
                {/* Access item properties here  */}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

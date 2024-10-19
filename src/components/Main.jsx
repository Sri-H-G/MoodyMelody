import React, { useContext } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { sidebarCollapsedContext } from "../App.jsx";
import "./Main.css";

function Main() {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [isCollapsed, setIsCollapsed] = useContext(sidebarCollapsedContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      // const prompt = "Write a story about a magic backpack.";
      // const result = await model.generateContent(prompt);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="main-wrapper" className={`${!isCollapsed ? "collapsed" : ""}`}>
      <div id="" className="typewriter">
        <h1>Hello, how are you today</h1>
      </div>
      <form id="chat-form" onSubmit={handleSubmit}>
        <div className="search">
          <div className="round">
            <input
              type="text"
              name="text"
              className="searchbar"
              placeholder="search something ..."
            />
          </div>
          <input type="file" name="file" className="uploadbutton" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="fileSVG"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M17 5.93023V16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16V6.33333C7 4.49238 8.49238 3 10.3333 3C12.1743 3 13.6667 4.49238 13.6667 6.33333V15.9845C13.6667 16.905 12.9205 17.6512 12 17.6512C11.0795 17.6512 10.3333 16.905 10.3333 15.9845V6.5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <input
            type="submit"
            className="submitbutton"
            value="submit"
            onClick={() => {}}
          />
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            id="submitSVG"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                className="c"
                d="m33.363,41.0276l-6.8415-19.5491,13.9784-13.9784-7.137,33.5276Zm-1.3742,3.4724l-8.2304-20.2584-6.014,6.014,14.2444,14.2444Z"
              ></path>
              <polyline
                className="c"
                points="6.9724 14.637 40.5 7.5 26.5216 21.4784 6.9724 14.637"
              ></polyline>
              <polyline
                className="c"
                points="3.5 16.0112 17.7444 30.2556 23.7584 24.2416 3.5 16.0112"
              ></polyline>
            </g>
          </svg>
        </div>
      </form>
    </div>
  );
}

export default Main;

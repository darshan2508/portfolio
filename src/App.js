import React, { useState, createContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Education from "./Components/Education/Education";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
// import WorkExperience from "./Components/WorkExperience/WorkExperience";
// import Testimonial from "./Components/Testimonial/Testimonial";
export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div id={theme}>
          <NavbarMobileView changeTheme={changeTheme} theme={theme} />
          <Sidebar changeTheme={changeTheme} theme={theme} />
          <About />
          {/* <WorkExperience /> */}
          <TechStack />
          <Education />
          <Project />
          {/* <Testimonial /> */}
          <Contact />
        </div>

        <ScrollToTop
          smooth
          top="50"
          color="white"
          height="20"
          width="20"
          style={{ borderRadius: "90px", backgroundColor: "#38004C" }}
        />
      </ThemeContext.Provider>
    </>
  );
};

export default App;

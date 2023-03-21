import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import RightBar from "./RightBar";

const Layout = (props) => {
  return (
    <main className="text-gray-400 font-inter bg-gray-primary text-ss">
      <div className="app-container flex min-h-screen">
        <SideBar />
        <Content>{props.children}</Content>
        <RightBar />
      </div>
    </main>
  );
};

export default Layout;

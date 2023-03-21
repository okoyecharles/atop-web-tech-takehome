import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import RightBar from "./RightBar";
import { useParams } from "react-router-dom";

const Layout = (props) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const params = useParams();

  useEffect(() => {
    if (navOpen) setNotificationOpen(false);
  }, [navOpen]);
  useEffect(() => {
    if (notificationOpen) setNavOpen(false);
  }, [notificationOpen]);
  useEffect(() => {
    setNavOpen(false);
  }, [params])


  return (
    <main className="text-gray-400 font-inter bg-gray-primary text-ss">
      <div className="app-container flex min-h-screen">
        <SideBar navOpen={navOpen} />
        <Content
          setNotificationOpen={setNotificationOpen}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        >
          {props.children}
        </Content>
        <RightBar open={notificationOpen} />
      </div>
    </main>
  );
};

export default Layout;

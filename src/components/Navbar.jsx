import { MenuOutlined } from "@ant-design/icons";
import { Menu, Typography, Avatar, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoImg } from "../utils/image";
import { items } from "../utils/menu";
export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logoImg} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>Cruptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <Menu theme="dark" items={items}></Menu>}
    </div>
  );
};

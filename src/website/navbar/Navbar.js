import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const [dorpshow, setDorpshow] = useState(false);
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDorpshow(false);
    }
  };
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
      category: true,
    },
    {
      icon: "settings",
      name: "Service",
      route: "service",
      category: true,
    },
    {
      icon: "user",
      name: "About Us",
      route: "about",
      category: true,
    },
    {
      icon: "folder",
      name: "Connect",
      route: "connect",
      category: true,
    },
  ];

  return (
    <div className="navbar automation" tabIndex={0} onBlur={handleBlur}>
      <div
        className={
          sidebarshow === true
            ? "fixed hidden h-100 md-block sm-block z-99 navview"
            : "fixed hidden h-100 md-block sm-block z-99 navhide"
        }
      >
        <div className="bgwhite b-shadow w-90 md-w-40 h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                RS Developers
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setsidebarshow(false)}
              />
            </div>
          </div>
          <div className="mtpx20">
            {NavMenu.map((e) => (
              <>
                <div className="plpx20 prpx20 mbpx25">
                  <NavLink
                    to={e.route}
                    activeClass="active"
                    className="fsize15 textgray flex items-center gap-8 cursor-pointer"
                  >
                    <FeatherIcon icon={e.icon} size={16} />
                    <p
                      className="my-0 mlpx6"
                      onClick={() => setsidebarshow(false)}
                    >
                      {e.name}
                    </p>
                  </NavLink>
                </div>
              </>
            ))}
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <div className="px20 pbpx20">
              <button className="primarybtn border-0 fsize15 w-full py8 rounded-5">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py4 md-py2 sm-py1 bgwhite">
        <div className="flex items-center justify-between container mx-auto">
          <div className="">
            <NavLink to="/">
              <img
                src={logo}
                alt="logo"
                className="object-contain nav-logo flex"
              />
            </NavLink>
          </div>
          <div className="flex justify-center items-center md-hidden sm-hidden">
            {NavMenu.map((e) => (
              <>
                <NavLink
                  activeClass="active"
                  className="fsize15 font-500 mx20 activetext cursor-pointer"
                  to={e.route}
                >
                  {e.name}
                </NavLink>
              </>
            ))}
            <div className="relative">
              <p
                className="fsize15 textgray font-500 mx20 cursor-pointer"
                onClick={() => setDorpshow(!dorpshow)}
                tabIndex={0}
              >
                Sections
              </p>
              <div
                className={`${
                  dorpshow ? "dropdown" : "dropdown_out"
                } bgwhite b-shadow`}
              >
                <div className="grid-cols-1 gap-5">
                  <NavLink
                    activeClass="active"
                    className="fsize12 font-500 activetext pbpx6 cursor-pointer flex items-center gap-4"
                    to="/home"
                  >
                    <FeatherIcon
                      icon="chevron-right"
                      size={13}
                      className="flex"
                    />
                    Home
                  </NavLink>
                  <NavLink
                    activeClass="active"
                    className="fsize12 font-500 activetext pbpx6 cursor-pointer flex items-center gap-4"
                    to="/about"
                  >
                    <FeatherIcon
                      icon="chevron-right"
                      size={13}
                      className="flex"
                    />
                    About Us
                  </NavLink>
                  <NavLink
                    activeClass="active"
                    className="fsize12 font-500 activetext pbpx6 cursor-pointer flex items-center gap-4"
                    to="/service"
                  >
                    <FeatherIcon
                      icon="chevron-right"
                      size={13}
                      className="flex"
                    />
                    Service
                  </NavLink>
                  <NavLink
                    activeClass="active"
                    className="fsize12 font-500 activetext pbpx6 cursor-pointer flex items-center gap-4"
                    to="/blogs"
                  >
                    <FeatherIcon
                      icon="chevron-right"
                      size={13}
                      className="flex"
                    />
                    Blogs
                  </NavLink>
                  <NavLink
                    activeClass="active"
                    className="fsize12 font-500 activetext pbpx6 cursor-pointer flex items-center gap-4"
                    to="/connect"
                  >
                    <FeatherIcon
                      icon="chevron-right"
                      size={13}
                      className="flex"
                    />
                    Connect
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md-hidden sm-hidden">
            <button className="primarybtn border-0 fsize13 px18 py8 rounded-5">
              Get Started
            </button>
          </div>
          <div className="hidden md-block sm-block">
            <div className="bgprimary p6 justify-center items-center flex rounded-5">
              <FeatherIcon
                icon="menu"
                className="textwhite flex"
                size={20}
                onClick={() => setsidebarshow(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

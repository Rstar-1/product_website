import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../../assets/logo.png";

const Navbar1 = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
      dropdown: [],
    },
    {
      icon: "user",
      name: "Pages",
      route: "",
      dropdown: [
        {
          icon: "user",
          name: "About Us",
          route: "AboutUs"
        },
        {
          icon: "grid",
          name: "Services",
          route: "Services",
        },
        {
          icon: "plus",
          name: "Teams",
          route: "Teams",
        },
        {
          icon: "edit",
          name: "Gallery",
          route: "Gallery",
        },
        {
          icon: "grid",
          name: "Connect Us",
          route: "ConnectUs",
        },
      ],
    },
    {
      icon: "settings",
      name: "Sections",
      route: "sections",
      dropdown: [],
    },
    {
      icon: "folder",
      name: "Blogs",
      route: "blogs",
      dropdown: [],
    },
    {
      icon: "grid",
      name: "Ecom",
      route: "ecom",
      dropdown: [],
    },
    {
      icon: "phone-call",
      name: "Elearning",
      route: "elearning",
      dropdown: [],
    },
  ];

  return (
    <div className="navbar">
      <div
        className={
          sidebarshow === true
            ? "bg-glass-nav fixed hidden h-100 md-block sm-block z-99 navview"
            : "bg-glass-nav fixed hidden h-100 md-block sm-block z-99 navhide"
        }
      >
        <div className="bgwhite w-90 md-w-40 h-100 absolute right-0 top-0">
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
                  {e.dropdown.length > 0 ? (
                    <>
                      <div className="relative cursor-pointer dropdown">
                        <div className="fsize15 textforth flex items-center gap-8 cursor-pointer">
                          <FeatherIcon icon={e.icon} size={16} />
                          <p className="my-0 mlpx6">{e.name}</p>
                          <FeatherIcon
                            icon="chevron-down"
                            size="18"
                            className="mlpx2"
                          />
                        </div>
                        <div className="dropbox absolute top-0 left-0 z-99 w-max">
                          <div className="bgwhite b-shadow border ptpx10 pbpx10 rounded-5 mtpx30 grid-cols-1">
                            {e.dropdown.map((drop) => (
                              <NavLink
                                to={drop.route}
                                activeClass="active"
                                className="fsize14 activetext flex items-center gap-8 cursor-pointer plpx20 prpx20 ptpx5 pbpx5"
                              >
                                <FeatherIcon icon={drop.icon} size={14} />
                                <p
                                  className="my-0 mlpx5"
                                  onClick={() => setsidebarshow(false)}
                                >
                                  {drop.name}
                                </p>
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to={e.route}
                        activeClass="active"
                        className="fsize15 textforth flex items-center gap-8 cursor-pointer"
                      >
                        <FeatherIcon icon={e.icon} size={16} />
                        <p
                          className="my-0 mlpx6"
                          onClick={() => setsidebarshow(false)}
                        >
                          {e.name}
                        </p>
                      </NavLink>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full ptpx4 pbpx4 md-ptpx1 md-pbpx1 bgwhite sm-ptpx1 sm-pbpx1">
        <div className="flex justify-between items-center container mx-auto">
          <div className="">
            <NavLink to="/">
              <img src={logo} alt="logo" className="object-contain nav-logo" />
            </NavLink>
          </div>
          <div className="flex justify-center gap-5 items-center md-hidden sm-hidden">
            {NavMenu.map((e) => (
              <>
                <div className="plpx6 prpx6 lp-plpx5 lp-prpx5 sm-mbpx25">
                  {e.dropdown.length > 0 ? (
                    <>
                      <div className="relative cursor-pointer dropdown">
                        <div className="flex items-center cursor-pointer">
                          <p className="fsize16 font-600 cursor-pointer">
                            {e.name}
                          </p>
                          <FeatherIcon
                            icon="chevron-down"
                            size="18"
                            className="mlpx2"
                          />
                        </div>
                        <div className="dropbox absolute top-0 left-0 z-99 w-max">
                          <div className="bgwhite b-shadow border ptpx10 pbpx10 rounded-5 mtpx30 grid-cols-1">
                            {e.dropdown.map((drop) => (
                              <NavLink
                                to={drop.route}
                                activeClass="active"
                                className="fsize14 font-500 cursor-pointer dropmenu activetext my-0 plpx20 prpx20 ptpx5 pbpx5"
                              >
                                {drop.name}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <NavLink
                        activeClass="active"
                        className="fsize16 font-500 mlpx16 mrpx16 activetext cursor-pointer"
                        to={e.route}
                      >
                        {e.name}
                      </NavLink>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
          <div className="hidden md-block sm-block">
            <div className="bg-light-primary sidebar-icon justify-center items-center flex">
              <FeatherIcon
                icon="align-justify"
                className="textprimary"
                size={25}
                onClick={() => setsidebarshow(true)}
              />
            </div>
          </div>
          <div className="flex md-hidden sm-hidden">
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx7 pbpx7 plpx24 prpx24 fsize15 bgprimary">
              Enquity Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;

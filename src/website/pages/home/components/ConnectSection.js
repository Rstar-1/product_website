import React, { useState } from "react";
import Select from "react-select";
import FeatherIcon from "feather-icons-react";

const ConnectSection = () => {
  // Add Edit Status Delete Popup
  const [editshow, seteditshow] = useState(false);
  const [cmsshow, setcmsshow] = useState(false);
  // Add Edit Status Delete Popup

  const options = [
    { value: "Team", label: "Team" },
    { value: "Service", label: "Service" },
    { value: "Gallery", label: "Gallery" },
    { value: "Client", label: "Client" },
    { value: "Faq", label: "Faq" },
    { value: "Event", label: "Event" },
  ];

  const Textcms = [
    {
      cmsdata: "Know More",
      sectionname: "HerSection",
      sectionID: "HR1000",
    },
    {
      cmsdata: "Designing a Better world",
      sectionname: "HerSection",
      sectionID: "HR1001",
    },
    {
      cmsdata: "and Care",
      sectionname: "HerSection",
      sectionID: "HR1002",
    },
    {
      cmsdata:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill dummy or placeholder text commonly used in graphic design, publishing, empty spaces in a layout that do not yet have content.",
      sectionname: "HerSection",
      sectionID: "HR1003",
    },
    {
      cmsdata: "Connect Us",
      sectionname: "HerSection",
      sectionID: "HR1004",
    },
    {
      cmsdata: "Know More",
      sectionname: "HerSection",
      sectionID: "HR1005",
    },
  ];
  const Imagecms = [
    {
      cmsdata:
        "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
      sectionname: "HerSection",
      sectionID: "HRI1000",
    },
  ];

  const [sectioncp, setsectioncp] = useState("section1");
  console.log(setsectioncp);

  return (
    <div className="relative automation">
      {/* // ========================== Automation ========================== // */}
      <div className="absolute right-0 top-0 mx14 mtpx20">
        <div
          className="primarybtn rounded-5 p6"
          title="Sections"
          onClick={() => seteditshow(true)}
        >
          <FeatherIcon icon="grid" size="16" className="flex" />
        </div>
        <div
          className="secondarybtn rounded-5 p6 mtpx8"
          title="Edit"
          onClick={() => setcmsshow(true)}
        >
          <FeatherIcon icon="edit-2" size="16" className="flex" />
        </div>
      </div>

      {/* Edit */}
      <div
        className={
          editshow
            ? "fixed top-0 h-100 z-99 overflow-hidden navview"
            : "fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite wid-sidebar h-100 absolute right-0 top-0 b-shadow">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Update Sections
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => seteditshow(false)}
              />
            </div>
          </div>
          <div className="px16">
            <div className="mtpx15 grid-cols-2 gap-8">
              <div className="">
                <label className="fsize14 textgray">Section Name</label>
                <div className="">
                  <p className="fsize12 textprimary">HeroSection</p>
                </div>
              </div>
              <div className="">
                <label className="fsize14 textgray">Section ID</label>
                <div className="">
                  <p className="fsize12 textsuccess">HR1000</p>
                </div>
              </div>
            </div>
            <div className="mtpx15">
              <label className="fsize14 textgray">Section Path</label>
              <div className="mtpx8">
                <input
                  className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                  placeholder="Enter Sub Title"
                />
              </div>
            </div>
            <div className="mtpx10">
              <label className="fsize14 textgray">Layer 1</label>
              <div className="mtpx8">
                <input
                  className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                  placeholder="Enter Sub Title"
                />
              </div>
            </div>
            <div className="mtpx15">
              <label className="fsize14 textgray">Layer 2</label>
              <div className="mtpx8">
                <Select
                  options={options}
                  className="select"
                  placeholder="Enter Section Id"
                  aria-label="sectionid"
                />
              </div>
            </div>
            <div className="mtpx15">
              <label className="fsize14 textgray">Layer 3</label>
              <div className="mtpx8">
                <Select
                  options={options}
                  className="select"
                  placeholder="Enter Section Id"
                  aria-label="sectionid"
                />
              </div>
            </div>
            <div className="mtpx15">
              <label className="fsize14 textgray">Background</label>
              <div className="mtpx8">
                <input
                  className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                  placeholder="Enter Sub Title"
                />
              </div>
            </div>
            <div className="mtpx20 flex justify-center">
              <button
                type="submit"
                className="w-full border-0 ptpx10 pbpx10 md-ptpx6 md-pbpx6 sm-ptpx8 sm-pbpx8 fsize14 rounded-5 primarybtn"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit */}

      {/* CMS */}
      <div
        className={
          cmsshow
            ? "fixed top-0 h-100 z-99 overflow-hidden navview"
            : "fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite wid-sidebar h-100 absolute right-0 top-0 b-shadow">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                CMS
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setcmsshow(false)}
              />
            </div>
          </div>
          <div className="px16">
            <div className="mtpx15">
              <div className="">
                <label className="fsize14 textgray">Section Name</label>
                <div className="">
                  <p className="fsize12 textprimary">HeroSection</p>
                </div>
              </div>
            </div>
            <div className="mtpx15 grid-cols-1 gap-12">
              <div className="bg-fa py8">
                <div className="px8">
                  <div className="flex items-center justify-between">
                    <h4 className="fsize14 my1 tetdark font-500">
                      CMS (HR1000)
                    </h4>
                    <div className="flex items-center gap-6">
                      <div className="dot bgsuccess rounded-full"></div>
                      <FeatherIcon
                        icon="edit-3"
                        size="13"
                        className="flex textprimary"
                      />
                    </div>
                  </div>
                  <p className="fsize12 textgray">Know More</p>
                </div>
              </div>
              <div className="bg-fa py8">
                <div className="px8">
                  <div className="flex items-center justify-between">
                    <h4 className="fsize14 my1 tetdark font-500">
                      CMS (HR1000)
                    </h4>
                    <div className="flex items-center gap-6">
                      <div className="dot bgsuccess rounded-full"></div>
                      <FeatherIcon
                        icon="edit-3"
                        size="13"
                        className="flex textprimary"
                      />
                    </div>
                  </div>
                  <p className="fsize12 textgray">Know More</p>
                </div>
              </div>
            </div>
            <div className="mtpx20 flex justify-center">
              <button
                type="submit"
                className="w-full border-0 ptpx10 pbpx10 md-ptpx6 md-pbpx6 sm-ptpx8 sm-pbpx8 fsize14 rounded-5 primarybtn"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CMS */}

      {/* // ========================== Automation ========================== // */}

      {/* // ========================== Section 1 ========================== // */}
      {sectioncp === "section1" ? (
        <>
          <div className="container mx-auto">
            <div className="flex sm-flex-column-reverse items-center w-full py60 md-py35 sm-py30">
              <div className="w-50 sm-w-full sm-mtpx20">
                <div className="prpx20 sm-prpx1">
                  <small className="fsize24 md-fsize22 sm-fsize17 font-500 textprimary">
                    {Textcms?.find((item) => item?.sectionID === "HR1000")
                      ?.cmsdata || null}
                  </small>
                  <h2 className="fsize46 md-fsize40 sm-fsize28 font-600 my1 textdark leading-h">
                    {Textcms?.find((item) => item?.sectionID === "HR1001")
                      ?.cmsdata || null}{" "}
                    <span className="textprimary">
                      {Textcms?.find((item) => item?.sectionID === "HR1002")
                        ?.cmsdata || null}
                    </span>
                  </h2>
                  <p className="fsize16 sm-fsize14 leading textgray font-400 mtpx12 sm-mtpx8">
                    {Textcms?.find((item) => item?.sectionID === "HR1003")
                      ?.cmsdata || null}
                  </p>
                  <div className="mtpx20 flex items-center flex-wrap">
                    <button className="primarybtn border-0 fsize16 sm-fsize14 px25 py10 sm-px18 sm-py8 rounded-5">
                      {Textcms?.find((item) => item?.sectionID === "HR1004")
                        ?.cmsdata || null}
                    </button>
                    <button className="primary2btn border-0 fsize16 sm-fsize14 px25 py10 sm-px18 sm-py8 rounded-5 mlpx10">
                      {Textcms?.find((item) => item?.sectionID === "HR1005")
                        ?.cmsdata || null}
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-50 sm-w-full plpx20 sm-plpx1">
                <img
                  src={
                    Imagecms?.find((item) => item?.sectionID === "HRI1000")
                      ?.cmsdata || null
                  }
                  alt="hero_img"
                  className="w-full hero_img flex object-cover rounded-5"
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/* // ========================== Section 1 ========================== // */}
    </div>
  );
};

export default ConnectSection;

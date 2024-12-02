import React, { useState } from "react";
import Select from "react-select";
import FeatherIcon from "feather-icons-react";

const HeroSection = () => {
  // Add Edit Status Delete Popup
  const [editshow, seteditshow] = useState(false);
  // Add Edit Status Delete Popup

  const options = [
    { value: "Team", label: "Team" },
    { value: "Service", label: "Service" },
    { value: "Gallery", label: "Gallery" },
    { value: "Client", label: "Client" },
    { value: "Faq", label: "Faq" },
    { value: "Event", label: "Event" },
  ];

  const [sectioncp, setsectioncp] = useState("section1");
  // const [layerone, setlayerone] = useState(1);
  // const [layertwo, setlayertwo] = useState(2);
  // const [layerthree, setlayerthree] = useState(3);
  console.log(setsectioncp);

  return (
    <div className="relative bg-fa automation">
      {/* // ========================== Automation ========================== // */}
      <div className="absolute right-0 top-0 mx14 mtpx20">
        <div
          className="primarybtn rounded-5 p6"
          title="CMS"
          onClick={() => seteditshow(true)}
        >
          <FeatherIcon icon="grid" size="16" className="flex" />
        </div>
        <div className="secondarybtn rounded-5 p6 mtpx8" title="Edit">
          <FeatherIcon icon="edit-2" size="16" className="flex" />
        </div>
      </div>

      {/* // Edit */}
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
      {/* // Edit */}

      {/* // ========================== Automation ========================== // */}

      {/* // ========================== Section 1 ========================== // */}
      {sectioncp === "section1" ? (
        <>
          <div className="container mx-auto">
            <div className="flex items-center w-full py50">
              <div className="w-50">
                <div className="prpx20">
                  <small className="fsize18 font-400 textgray">Sub Title</small>
                  <h2 className="fsize40 font-800 my1 texttertiary">
                    We Learn <span className="textprimary">and Care</span>
                  </h2>
                  <p className="fsize16 textgray font-400 mtpx16">
                    Lorem ipsum is a dummy or placeholder text commonly used in
                    graphic design, publishing, and web development to fill
                    empty spaces in a layout that do not yet have content.
                  </p>
                  <div className="mtpx20 flex items-center flex-wrap">
                    <button className="primarybtn border-0 fsize13 px18 py8 rounded-5">
                      Connect Us
                    </button>
                    <button className="primary2btn border-0 fsize13 px18 py8 rounded-5 mlpx10">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-50 plpx20">
                <img
                  src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
                  alt="hero_img"
                  className="w-full hero_img flex object-cover rounded-5"
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/* // ========================== Section 1 ========================== // */}

      {/* // ========================== Section 2 ========================== // */}
      {sectioncp === "section1" ? (
        <>
          <div className="container mx-auto">
            <div className="flex items-center w-full py50">
              <div className="w-50">
                <div className="prpx20">
                  <small className="fsize18 font-400 textgray">Sub Title</small>
                  <h2 className="fsize40 font-800 my1 texttertiary">
                    We Learn <span className="textprimary">and Care</span>
                  </h2>
                  <p className="fsize16 textgray font-400 mtpx16">
                    Lorem ipsum is a dummy or placeholder text commonly used in
                    graphic design, publishing, and web development to fill
                    empty spaces in a layout that do not yet have content.
                  </p>
                  <div className="mtpx20 flex items-center flex-wrap">
                    <button className="primarybtn border-0 fsize13 px18 py8 rounded-5">
                      Connect Us
                    </button>
                    <button className="primary2btn border-0 fsize13 px18 py8 rounded-5 mlpx10">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-50 plpx20">
                <img
                  src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
                  alt="hero_img"
                  className="w-full hero_img flex object-cover rounded-5"
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/* // ========================== Section 2 ========================== // */}
    </div>
  );
};

export default HeroSection;

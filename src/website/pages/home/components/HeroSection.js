import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

const HeroSection = () => {
  const [sectioncp, setsectioncp] = useState("section1");
  const [layerone, setlayerone] = useState(1);
  const [layertwo, setlayertwo] = useState(2);
  const [layerthree, setlayerthree] = useState(3);
  console.log(setsectioncp, setlayerone, setlayertwo, setlayerthree);

  return (
    <div className="relative bg-fa">
      {/* // ========================== Edit ========================== // */}
      <div className="absolute right-0 top-0 mx14 mtpx20">
        <div className="primarybtn rounded-5 p6" title="CMS">
          <FeatherIcon icon="grid" size="16" className="flex" />
        </div>
        <div className="secondarybtn rounded-5 p6 mtpx8" title="Edit">
          <FeatherIcon icon="edit-2" size="16" className="flex" />
        </div>
      </div>
      {/* // ========================== Edit ========================== // */}

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
      {/* {sectioncp === "section1" ? (
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
      ) : null} */}
      {/* // ========================== Section 2 ========================== // */}

      {/* // ========================== Section 3 ========================== // */}
      {/* {sectioncp === "section1" ? (
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
      ) : null} */}
      {/* // ========================== Section 3 ========================== // */}

      {/* // ========================== Section 4 ========================== // */}
      {/* {sectioncp === "section1" ? (
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
      ) : null} */}
      {/* // ========================== Section 4 ========================== // */}

      {/* // ========================== Section 5 ========================== // */}
      {/* {sectioncp === "section1" ? (
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
      ) : null} */}
      {/* // ========================== Section 5 ========================== // */}

      {/* // ========================== Section 6 ========================== // */}

      {/* {sectioncp === "section1" ? (
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
      ) : null} */}
      {/* // ========================== Section 6 ========================== // */}
    </div>
  );
};

export default HeroSection;

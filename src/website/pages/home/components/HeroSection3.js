import React from "react";
import FeatherIcon from "feather-icons-react";

const HeroSection3 = () => {
  return (
    <div className="relative herosection4-img bgforth">
      <img
        src="https://zyan.vercel.app/images/bg/banner_bg2.png"
        alt="herosection4-img"
        className="w-full sm-hidden herosection4-img filter-b6 object-cover"
      />
      <div className="absolute top-0 text-left left-0 flex items-center herosection4-img">
        <div className="w-full container mx-auto">
          <div className="flex sm-block items-center">
            <div className="w-50 md-w-50 sm-w-full">
              <h3 className="textwhite font-600 sm-font-400 mtpx9 sm-mtpx2 leading-h mbpx1 fsize50 md-fsize29 sm-fsize21">
                HI, I'M ZYAN! CREATIVE DESIGNER
              </h3>
              <p className="textwhite font-400 mtpx15 mbpx1 fsize16 sm-fsize14 md-fsize14">
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail, I
                specialize in translating complex ideas into user-friendly
                interfaces that captivate and engage.
              </p>
              <div className="flex items-center justify-start gap-10 mtpx30 md-mtpx20 sm-mtpx20">
                <button className="cursor-pointer font-500 textwhite border-primary ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 bgsuccess">
                  Download
                </button>
                <div className="mlpx15 sm-mlpx8 flex items-center">
                  <div className="video4-icon flex items-center justify-center">
                    <FeatherIcon
                      icon="play"
                      fill="#fff"
                      size="20"
                      className="textwhite mlpx3 mtpx2"
                    />
                  </div>
                  <p className="mlpx10 sm-mlpx8 fsize16 sm-fsize13 textwhite">
                    Watch The Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;

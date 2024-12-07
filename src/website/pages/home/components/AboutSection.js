import React from "react";
import FeatherIcon from "feather-icons-react";

const AboutSection = () => {
  return (
    <div className="ptpx60 pbpx90 md-ptpx30 md-pbpx60 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-50 sm-w-full prpx20 md-prpx9 sm-prpx1">
            <div className="relative justify-end flex">
              <img
                src="https://linoor-nextjs.vercel.app/_next/static/media/featured-image-1.7be0781f.jpg"
                className="w-70 md-w-80 sm-w-80 leftabout4-img object-cover rounded-10"
                alt="leftabout4-img"
              />
              <div className="absolute bottom-0 left-0">
                <img
                  src="https://linoor-nextjs.vercel.app/_next/static/media/featured-image-2.ff901bda.jpg"
                  className="w-90 leftsecondabout4-img object-cover rounded-10"
                  alt="leftsecondabout4-img"
                />
              </div>
              <div className="absolute top-0 left-0">
                <div className="line-about"></div>
              </div>
            </div>
          </div>
          <div className="w-50 sm-w-full plpx20 md-plpx1 sm-plpx1 sm-mtpx50">
            <h4 className="fsize35 md-fsize23 sm-fsize21 mtpx1 mbpx1 textdark">
              WE’RE THE BEST AGENCY IN DOWNTOWN
            </h4>
            <h6 className="fsize18 md-fsize16 sm-fsize14 mtpx6 mbpx1 textprimary font-500">
              WE ARE COMMITTED TO PROVIDING OUR CUSTOMERS SERVICE WHILE OFFERING
              OUR EMPLOYEES THE BEST TRAINING.
            </h6>
            <p className="mtpx17 sm-mtpx10 fsize16 sm-fsize13 md-fsize14 textgray">
              We spot, invest, and nurture passionate founders obsessed with
              solving the challenges of Indian consumers and businesses.
            </p>
            <div className="mtpx20 md-mtpx15 flex items-center">
              <div className="grid-cols-1 w-80 md-w-70 sm-w-70 border-about md-prpx7">
                <div className="flex items-center md-items-start sm-items-start">
                  <FeatherIcon
                    icon="check"
                    size="17"
                    className="textprimary flex md-mtpx5"
                  />
                  <p className="fsize14 mlpx10 sm-fsize12 md-fsize13 textdark">
                    Suspe ndisse suscipit sagittis leo.
                  </p>
                </div>
                <div className="flex items-center md-items-start sm-items-start mtpx3">
                  <FeatherIcon
                    icon="check"
                    size="17"
                    className="textprimary flex md-mtpx5"
                  />
                  <p className="fsize14 mlpx10 sm-fsize12 md-fsize13 textdark">
                    Entum estibulum dignissim posuere.
                  </p>
                </div>
                <div className="flex items-center md-items-start sm-items-start mtpx3">
                  <FeatherIcon
                    icon="check"
                    size="17"
                    className="textprimary flex md-mtpx5"
                  />
                  <p className="fsize14 mlpx10 sm-fsize12 md-fsize13 textdark">
                    If you are going to use a passage.
                  </p>
                </div>
              </div>
              <div className="w-20 md-w-30 sm-w-30 flex justify-end">
                <div className="round-about rounded-full text-center">
                  <div>
                    <h5 className="mtpx1 mbpx1 fsize16 sm-fsize14 textwhite">
                      Since
                    </h5>
                    <small className="textwhite font-500 fsize14 sm-fsize12">
                      2000
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 mtpx20 sm-mtpx14 fsize16 sm-fsize13 bgprimary">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

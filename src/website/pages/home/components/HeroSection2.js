import React from "react";

const HeroSection2 = () => {
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
        "Lorem ipsum is a dummy or placeholder dummy or placeholder text commonly spaces in a layout that do not yet have content.",
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
        "https://wphix.com/template/medixer-prv/medixer/assets/images/ilustration/ilustration-1.png",
      sectionname: "HerSection",
      sectionID: "HRI1000",
    },
  ];

  return (
    <div className="relative automation bg_doctor">
      <div className="container mx-auto">
        <div className="flex sm-flex-column-reverse items-center w-full ptpx50 md-ptpx35 sm-ptpx30 sm-pbpx20">
          <div className="w-50 sm-w-full sm-mtpx20">
            <div className="prpx20 sm-prpx1">
              <div className="flex md-grid-cols-2 sm-block items-center mbpx14">
                <div className="flex items-center md-mbpx10 sm-mbpx10">
                  <div className="bgprimary rounded-full dot rouned-full"></div>
                  <p className="fsize15 mlpx6 textgray font-400">
                    Psychologist
                  </p>
                </div>
                <div className="flex items-center mlpx15 md-mlpx1 md-mbpx10 sm-mbpx10 sm-mlpx1">
                  <div className="bgsecondary rounded-full dot rouned-full"></div>
                  <p className="fsize15 mlpx6 textgray font-400">Dentist</p>
                </div>
                <div className="flex items-center mlpx15 md-mlpx1 sm-mlpx1">
                  <div className="bgsuccess rounded-full dot rouned-full"></div>
                  <p className="fsize15 mlpx6 textgray font-400">Neurologist</p>
                </div>
              </div>
              <h2 className="fsize46 md-fsize40 sm-fsize28 font-600 my1 textgray leading-h">
                {Textcms?.find((item) => item?.sectionID === "HR1001")
                  ?.cmsdata || null}
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
              </div>
            </div>
          </div>
          <div className="w-50 sm-w-full plpx20 sm-plpx1">
            <img
              src={
                Imagecms?.find((item) => item?.sectionID === "HRI1000")
                  ?.cmsdata || null
              }
              alt="doctor_img"
              className="w-full doctor_img flex object-contain rounded-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;

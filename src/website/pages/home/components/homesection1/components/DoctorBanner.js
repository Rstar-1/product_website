import React from 'react'

const DoctorBanner = () => {
  return (
    <div className="ptpx60 bg-doctor md-ptpx30 sm-ptpx30">
      <div className="container mx-auto">
        <div className="flex sm-block items-center">
          <div className="w-50 md-w-50 sm-w-full">
            <p className="textsecondary font-400 sm-text-justify mbpx1 fsize14 md-fsize14 sm-fsize13">
              Quality with Integnity
            </p>
            <h3 className="textprimary font-600 sm-font-400 mtpx4 sm-mtpx3 leading mbpx3 fsize35 md-fsize25 sm-fsize20">
              Krishi Engineering Works
            </h3>
            <p className="textgray font-400 mbpx1 mtpx8 sm-mtpx4 fsize16 md-fsize16 sm-fsize14 sm-line-clamp4">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <div className="flex md-grid-cols-2 sm-block items-center mtpx16">
              <div className="flex items-center md-mbpx10 sm-mbpx10">
                <div className="bgprimary rounded-full dot8-circle"></div>
                <p className="fsize15 mlpx6 textgray font-500">Web Developer</p>
              </div>
              <div className="flex items-center mlpx15 md-mlpx1 md-mbpx10 sm-mbpx10 sm-mlpx1">
                <div className="bgsecondary rounded-full dot8-circle"></div>
                <p className="fsize15 mlpx6 textgray font-500">App Developer</p>
              </div>
              <div className="flex items-center mlpx15 md-mlpx1 sm-mlpx1">
                <div className="bgwarning rounded-full dot8-circle"></div>
                <p className="fsize15 mlpx6 textgray font-500">
                  Cloud developer
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start mtpx20 md-mtpx17 sm-mtpx14">
              <button className="border-white cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 bgprimary">
                Connect
              </button>
              <button className="cursor-pointer font-500 rounded-5 ptpx8 pbpx8 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 primarybtn mlpx20 md-mlpx16 sm-mlpx15">
                About Us
              </button>
            </div>
          </div>
          <div className="w-50 md-w-50 sm-w-full sm-mtpx20">
            <img
              src="https://wphix.com/template/medixer-prv/medixer/assets/images/ilustration/ilustration-1.png"
              className="w-full doctor1-img flex object-contain"
              alt="doctor1-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorBanner

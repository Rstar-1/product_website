import React from 'react'

const DoctorRightAbout = () => {
  return (
    <div className="ptpx60 pbpx90 md-ptpx30 md-pbpx60 sm-ptpx20 sm-pbpx20 bg-doctor">
      <div className="container mx-auto">
        <div className="flex sm-flex-column-reverse w-full items-center">
          <div className="w-60 md-w-50 sm-w-full sm-mtpx50">
            <h4 className="fsize35 md-fsize23 sm-fsize21 mtpx1 mbpx1 textprimary">
              About us
            </h4>
            <p className="mtpx17 sm-mtpx10 fsize16 sm-fsize14 md-fsize14 textgray">
              We spot, invest, and nurture passionate founders obsessed with
              solving the challenges of Indian consumers and businesses.
              <br></br> We are an energetic team of serial entrepreneurs,
              super-angels & venture capital professionals with an established
              knack of choosing winners at their early stages.<br></br> With our
              founders, we design & support robust models to create category
              leaders that deliver massive value for every stakeholder.
            </p>
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 mtpx20 sm-mtpx14 fsize16 sm-fsize13 bgprimary">
              Know More
            </button>
          </div>
          <div className="w-40 md-w-50 sm-w-full flex justify-center sm-block">
            <div className="bgprimary doctor6-img w-80 rounded-10">
              <img
                src="https://html.themexriver.com/it-firm/images/resource/about-2.jpg"
                className="w-full doctor6-img doctor-margin rounded-10 object-cover"
                alt="doctor6-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRightAbout

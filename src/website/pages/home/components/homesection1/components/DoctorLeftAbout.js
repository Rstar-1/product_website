import React from 'react';
import FeatherIcon from "feather-icons-react";

const DoctorLeftAbout = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-50 md-w-50 sm-w-full prpx20 md-prpx9 sm-prpx1">
            <div className="relative doctor3-img">
              <img
                src="https://html.themeholy.com/mediax/demo/assets/img/normal/about_1_3.png"
                className="w-full doctor3-img object-contain absolute z-20"
                alt="doctor3-img"
              />
              <div className="absolute bottom-0 right-0 z-50">
                <div className="d-shadow bgwhite plpx15 prpx15 sm-plpx5 sm-prpx5 doctor-square mbpx14 md-mbpx1">
                  <div>
                    <h6 className="fsize16 mtpx1 mbpx1 text-center">
                      Dr. Esita Jabed
                    </h6>
                    <p className="fsize13 textgray text-center">
                      Mention the languages in which the staff.
                    </p>
                    <div className="mtpx5 flex items-center justify-center">
                      <FeatherIcon
                        icon="star"
                        size="16"
                        fill="#ff5722"
                        className="flex mlpx2 textwarning"
                      />
                      <FeatherIcon
                        icon="star"
                        size="16"
                        fill="#ff5722"
                        className="flex mlpx2 textwarning"
                      />
                      <FeatherIcon
                        icon="star"
                        size="16"
                        fill="#ff5722"
                        className="flex mlpx2 textwarning"
                      />
                      <FeatherIcon
                        icon="star"
                        size="16"
                        fill="#ff5722"
                        className="flex mlpx2 textwarning"
                      />
                      <FeatherIcon
                        icon="star"
                        size="16"
                        fill="#ff5722"
                        className="flex mlpx2 textwarning"
                      />
                    </div>
                    <div className="mtpx5 flex items-center justify-center">
                      <FeatherIcon
                        icon="phone"
                        size="16"
                        fill="#4bb543"
                        className="flex textsuccess"
                      />
                      <p className="fsize13 textsuccess mlpx5 text-center">
                        +91 9807654321
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 md-w-50 sm-w-full plpx20 md-plpx10 sm-plpx1 md-mtpx20 sm-mtpx20 bg-leftabout">
            <div className="flex items-center">
              <img
                src="https://html.themeholy.com/mediax/demo/assets/img/theme-img/title_icon.svg"
                alt="doctor4-img"
                className="doctor4-img"
              />
              <p className="textprimary font-600 fsize18 md-fsize16 sm-fsize14 mlpx5">
                ABOUT US COMPANY
              </p>
            </div>
            <h4 className="fsize36 md-fsize22 sm-fsize20 mtpx4 mbpx1 textdark">
              Affordable Health Care Solutions
            </h4>
            <p className="mtpx14 sm-mtpx10 fsize14 sm-fsize13 md-fsize13 textgray">
              A brief statement outlining the purpose and mission of the clinic.
              This can include the commitment to patient care, community health,
              and any specifical goals for our values.
            </p>
            <div className="grid-cols-2 md-grid-cols-2 sm-grid-cols-1 md-items-start mtpx15 md-mtpx8 sm-mtpx5">
              <div className="flex items-center md-items-start mtpx15 md-mtpx8 sm-mtpx6 md-mrpx6">
                <img
                  src="https://html.themeholy.com/mediax/demo/assets/img/icon/service_card_2.svg"
                  alt="doctor4-img"
                  className="doctor4-img md-mtpx5"
                />
                <p className="font-500 fsize16 md-fsize13 sm-fsize13 textdark mlpx6">
                  Medical Professionals
                </p>
              </div>
              <div className="flex items-center md-items-start mtpx15 md-mtpx8 sm-mtpx6 md-mrpx6">
                <img
                  src="https://html.themeholy.com/mediax/demo/assets/img/icon/service_card_2.svg"
                  alt="doctor4-img"
                  className="doctor4-img md-mtpx5"
                />
                <p className="font-500 fsize16 md-fsize13 sm-fsize13 textdark mlpx6">
                  Facilities
                </p>
              </div>
              <div className="flex items-center md-items-start mtpx15 md-mtpx8 sm-mtpx6 md-mrpx6">
                <img
                  src="https://html.themeholy.com/mediax/demo/assets/img/icon/service_card_2.svg"
                  alt="doctor4-img"
                  className="doctor4-img md-mtpx5"
                />
                <p className="font-500 fsize16 md-fsize13 sm-fsize13 textdark mlpx6">
                  Emergency Care
                </p>
              </div>
              <div className="flex items-center md-items-start mtpx15 md-mtpx8 sm-mtpx6 md-mrpx6">
                <img
                  src="https://html.themeholy.com/mediax/demo/assets/img/icon/service_card_2.svg"
                  alt="doctor4-img"
                  className="doctor4-img md-mtpx5"
                />
                <p className="font-500 fsize16 md-fsize13 sm-fsize13 textdark mlpx6">
                  Medical Consulting
                </p>
              </div>
              <div className="flex items-center md-items-start mtpx15 md-mtpx8 sm-mtpx6 md-mrpx6">
                <img
                  src="https://html.themeholy.com/mediax/demo/assets/img/icon/service_card_2.svg"
                  alt="doctor4-img"
                  className="doctor4-img md-mtpx5"
                />
                <p className="font-500 fsize16 md-fsize13 sm-fsize13 textdark mlpx6">
                  Services Offered
                </p>
              </div>
              <div className="flex items-center md-items-start mtpx15 md-mtpx8 sm-mtpx6 md-mrpx6">
                <img
                  src="https://html.themeholy.com/mediax/demo/assets/img/icon/service_card_2.svg"
                  alt="doctor4-img"
                  className="doctor4-img md-mtpx5"
                />
                <p className="font-500 fsize16 md-fsize13 sm-fsize13 textdark mlpx6">
                  Specializations
                </p>
              </div>
            </div>
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 mtpx25 sm-mtpx14 fsize16 sm-fsize13 bgprimary">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorLeftAbout

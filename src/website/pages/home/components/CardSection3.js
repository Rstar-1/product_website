import React from "react";

const CardSection3 = () => {
  const servicecard = [
    {
      title: "Select a project",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_1.svg",
    },
    {
      title: "Project analysis",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_2.svg",
    },
    {
      title: "Plan Execute",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_3.svg",
    },
  ];
  return (
    <div className="ptpx40 pbpx40 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <h4 className="fsize32 md-fsize22 sm-fsize20 mtpx1 mbpx1 textprimary font-600">
          Our Service
        </h4>
        <div className="grid-cols-3 md-grid-cols-2 sm-grid-cols-1 relative z-50 mtpx30 sm-mtpx20">
          {servicecard.map((e) => (
            <div className="sm-mbpx10">
              <div className="b-shadow service5-h flex items-center rounded-5 mrpx20 sm-mrpx1 sm-mbpx10 mbpx30 overflow-hidden">
                <div className="plpx20 prpx20 md-plpx10 md-prpx10 sm-plpx10 sm-prpx10 w-full">
                  <div className="service5-circle bgwhite rounded-full flex items-center justify-center">
                    <img
                      src={e.img}
                      alt="service5-img"
                      className="service5-img object-contain"
                    />
                  </div>
                  <h4 className="fsize20 md-fsize18 sm-fsize16 mtpx12 mbpx1 font-500">
                    {e.title}
                  </h4>
                  <p className="mtpx8 fsize16 sm-fsize13 md-fsize13">
                    {e.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection3;

import React from "react";

const Brand2 = () => {
  const branddata = [
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_1.svg",
      name: "Creative",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_2.svg",
      name: "Brand Agency",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_3.svg",
      name: "Zinaco Brand",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_4.svg",
      name: "Creative Agency",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_5.svg",
      name: "Digital Agency",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_6.svg",
      name: "Finance",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_7.svg",
      name: "Organic",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_8.svg",
      name: "Technology",
    },
  ];

  return (
    <div className="ptpx40 pbpx40 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
          {branddata.map((e) => (
            <div className="bgwhite b-shadow rounded-5">
              <div className="mx-auto py18">
                <div className="flex justify-center">
                <img
                  src={e.picture}
                  alt="brand1-img"
                  className="brand1-img object-contain"
                />
                </div>
                <p className="mtpx12 fsize16 md-fsize14 sm-fsize14 font-500 textgray text-center">
                  {e.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand2;

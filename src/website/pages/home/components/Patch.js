import React from "react";

const Patch = () => {
  return (
    <div className="relative patch1-img">
      <img
        src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.8940111406662126.png-9Yvw6z3vyV3f8MxqBgWVa-1709983963"
        alt="patch1-img"
        className="w-full filter-b6 patch1-img object-cover flex"
      />
      <div className="absolute top-0 text-left left-0 flex items-center justify-start patch1-img">
        <div className="w-full container mx-auto">
          <div className="w-50 md-w-80 sm-w-full">
            <h3 className="textwhite font-600 sm-font-400 mtpx9 sm-mtpx4 leading mbpx3 fsize40 md-fsize25 sm-fsize20">
              Lorem Ipsum
            </h3>
            <p className="textwhite font-400 mtpx20 fsize16 md-fsize16 sm-fsize14 sm-line-clamp4">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patch;

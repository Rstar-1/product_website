import React, { useState } from "react";
import Select from "react-select";
import FeatherIcon from "feather-icons-react";

const Ideas = () => {
  const options = [
    { value: "Case", label: "Case" },
    { value: "Case2", label: "Case2" },
    { value: "Case3", label: "Case3" },
  ];

  return (
    <div className="relative bg_hero">
      <div className="container mx-auto">
        <div className="block items-start w-full py50 md-py35 sm-py30">
          <div className="w-70 sm-w-full  prpx24">
            <small className="fsize24 md-fsize22 sm-fsize17 font-500 textprimary">
              Step 1
            </small>
            <h2 className="fsize46 md-fsize36 sm-fsize28 font-600 my1 textdark leading-h">
              Section
              <span className="textprimary mlpx5">Builder</span>
            </h2>
            <p className="fsize16 sm-fsize14 leading textgray font-400 mtpx12 sm-mtpx8">
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web in graphic design, publishing.
            </p>
          </div>
          <div className="w-full mtpx20">
            <div className="bgwhite b-shadow p20 rounded-10">
              <div className="w-full">
                <label className="fsize14 textgray">Company Logo</label>
                <div className="relative">
                  <div className="border-images mtpx8">
                    <div>
                      <FeatherIcon
                        icon="upload-cloud"
                        className="textprimary flex mx-auto"
                        size={30}
                      />
                      <p className="mtpx5 textgray text-center fsize12">
                        Upload here your Image
                      </p>
                    </div>
                  </div>
                  <input
                    className="img-input absolute top-0 left-0"
                    placeholder="Enter CMS Data"
                    type="file"
                    name="picture"
                    id="picture"
                    aria-label="picture"
                  />
                </div>
              </div>
              <div className="grid-cols-4 gap-4 mtpx20">
                <div className="">
                  <label className="fsize14 textgray">Company Name</label>
                  <div className="mtpx8">
                    <input
                      className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Enter Company Name"
                    />
                  </div>
                </div>
                <div className="">
                  <label className="fsize14 textgray">Phone Number</label>
                  <div className="mtpx8">
                    <input
                      className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <div className="">
                  <label className="fsize14 textgray">Email ID</label>
                  <div className="mtpx8">
                    <input
                      className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Enter Email ID"
                    />
                  </div>
                </div>
                <div className="">
                  <label className="fsize14 textgray">Live Link</label>
                  <div className="mtpx8">
                    <input
                      className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Enter Live Link"
                    />
                  </div>
                </div>
                <div className="mtpx12">
                  <label className="fsize14 textgray">Category</label>
                  <div className="mtpx8">
                    <Select
                      options={options}
                      className="select"
                      placeholder="Select Category"
                      aria-label="sectionid"
                    />
                  </div>
                </div>
                <div className="mtpx12">
                  <label className="fsize14 textgray">Admin</label>
                  <div className="mtpx8">
                    <Select
                      options={options}
                      className="select"
                      placeholder="Select Admin"
                      aria-label="sectionid"
                    />
                  </div>
                </div>
                <div className="mtpx12">
                  <label className="fsize14 textgray">Facebook</label>
                  <div className="mtpx8">
                    <input
                      className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Enter Facebook"
                    />
                  </div>
                </div>
                <div className="mtpx12">
                  <label className="fsize14 textgray">Instagram</label>
                  <div className="mtpx8">
                    <input
                      className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Enter Instagram"
                    />
                  </div>
                </div>
                <div className="mtpx12">
                  <label className="fsize14 textgray">Twitter</label>
                  <div className="mtpx8">
                    <input
                      className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Enter Twitter"
                    />
                  </div>
                </div>
              </div>
              <div className="grid-cols-4 gap-12 mtpx20">
                <div className="flex items-center justify-between bg-fa py8 px10 rounded-5">
                  <p className="fsize14 textgray">Digital Card</p>
                  <label class="toggle-switch flex">
                    <input type="checkbox" />
                    <span class="tog_slider"></span>
                  </label>
                </div>
                <div className="flex items-center justify-between bg-fa py8 px10 rounded-5">
                  <p className="fsize14 textgray">Catelouge</p>
                  <label class="toggle-switch flex">
                    <input type="checkbox" />
                    <span class="tog_slider"></span>
                  </label>
                </div>
                <div className="flex items-center justify-between bg-fa py8 px10 rounded-5">
                  <p className="fsize14 textgray">Website</p>
                  <label class="toggle-switch flex">
                    <input type="checkbox" />
                    <span class="tog_slider"></span>
                  </label>
                </div>
                <div className="flex items-center justify-between bg-fa py8 px10 rounded-5">
                  <p className="fsize14 textgray">App</p>
                  <label class="toggle-switch flex">
                    <input type="checkbox" />
                    <span class="tog_slider"></span>
                  </label>
                </div>
              </div>
              <div className="mtpx25 flex justify-center">
                <button
                  type="submit"
                  className="w-full border-0 py10 md-py6 sm-py8 fsize14 rounded-5 primarybtn"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;

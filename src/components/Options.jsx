import React, { useEffect, useState, useRef } from "react";

import { useGlobalContext } from "../Context";
const Options = () => {
  const {
    openRules,
    houseChoice,
    status,
    stat,
    chooseBtn,
    buttons,
    clickBtn,
    displayHouse,
  } = useGlobalContext();

  return (
    <>
      <div className="buttons flex items-center">
        <div
          className={
            !clickBtn
              ? "choices before:content-[''] before:border-l-[140px] lg:before:border-l-[240px]  before:border-l-transparent before:border-r-[140px] lg:before:border-r-[240px] before:border-r-transparent before:border-t-[140px] lg:before:border-t-[240px] before:absolute before:border-t-black before:opacity-20 after:content-['']  after:border-r-[100px] lg:after:border-r-[180px] after:border-r-transparent after:border-t-[100px] lg:after:border-t-[180px] after:border-t-[#1f3757] after:absolute lg:after:top-[7.3rem] after:top-[5.3rem] top-[0rem] md:after:top-[7.8rem]  after:border-l-[100px] lg:after:border-l-[180px] after:border-l-transparent sm:after:top-[6.5rem]"
              : "choices before:content-[''] before:w-full before:h-full before:absolute before:left-0 before:top-0 before:bg-transparent before:z-[3]"
          }
        >
          {buttons.map((item) => {
            const { id, name, img } = item;
            return (
              <button
                key={id}
                className={
                  !clickBtn && name === "rock"
                    ? `opt-btn col-span-2 ${name}`
                    : `opt-btn ${name}`
                }
                id={stat ? "opaque" : ""}
                onClick={() => chooseBtn(name)}
              >
                <div className="inner">
                  <div className="btn-img">
                    <img src={img} alt={name} />
                  </div>
                </div>
              </button>
            );
          })}
          {clickBtn && (
            <div className="op-round w-[123.37px] lg:h-[203px] lg:w-[203px] md:w-[170px] md:h-[170px]  sm:w-[150px] sm:h-[150px] h-[132.66px] rounded-[50%]">
              {displayHouse &&
                houseChoice.map((item) => {
                  const { id, name, img } = item;
                  return (
                    <button
                      key={id}
                      className={
                        stat === false
                          ? `opt-btn after:opacity-5 ${name}`
                          : `opt-btn ${name}`
                      }
                    >
                      <div className="inner">
                        <div className="btn-img">
                          <img src={img} alt={name} />
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          )}
          {clickBtn && (
            <div className="labels sm:absolute sm:-top-[6rem] flex justify-around sm:mt-[2rem] sm:justify-center sm:gap-[10rem] w-screen mx-auto text-white text-[14px] leading-[15px] uppercase font-bold tracking-[1.875px]">
              <span>you picked</span>
              <span>the house picked</span>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={openRules}
        className="btn rounded-lg text-white border transition hover:bg-white duration-300 px-8 sm:right-5 absolute  bottom-10 py-1 uppercase"
      >
        Rules
      </button>
    </>
  );
};

export default Options;

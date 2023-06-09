import React from "react";
import { useGlobalContext } from "../Context";
import { FaTimes } from "react-icons/fa";
import { rulesBtns } from "../Data";
import rule from '../assets/rules.png'
const RulesModal = () => {
  const { closeRules, rules } = useGlobalContext();
  return (
    <div className={rules ? "show modal" : "modal"}>
      <div className='flex flex-col gap-[5rem] bg-white sm:p-5 sm:relative sm:rounded-lg sm:gap-0'>
      <p className="uppercase rule-head sm:text-left">rules</p>
      <div className="w-[300px]">
        <img src={rule} className="w-full"/>
      </div>
      <FaTimes
        onClick={closeRules}
        className="text-4xl absolute bottom-[6rem] right-[50%] sm:top-6 sm:right-5 cursor-pointer text-gray-400"
      />
    </div>
    </div>
  );
};

export default RulesModal;

import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";

const Status = () => {
  const { displayStatus, playAgain, status } = useGlobalContext();

 
  return <> <div className={displayStatus ? "flex flex-col gap-2 scale-[1] status" : 'status'}>
    <p className="font-bold leading-[67px] text-center uppercase text-[56px] text-white">{status}</p>
    <button onClick={playAgain} className="btn uppercase text-base leading-[19px] tracking-[2.5px] font-semibold py-3 px-12 rounded-lg bg-white text-[#3B4262] hover:text-red-600 transition duration-500">play again</button>
  </div></>;
};
    
export default Status;

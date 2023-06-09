import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";

const Navbar = () => {
  const {displayStatus, status} = useGlobalContext();
  const [score, setScore] = useState(0);
  useEffect(()=>{
    if(status === 'You Win'){
      setScore(s => s + 1)
    }
    else if(status === 'You lose'){
      setScore(s => s == 0 ? 0 : s - 1)
    }
  },[displayStatus])
  return (
    <nav className="absolute rounded-md mx-auto flex justify-between p-3 align-middle w-5/6 lg:w-3/6">
      <span className="app-name">Rock Paper Scissors</span>
      <div className="nav-right rounded-sm shadow-sm flex-col flex justify-center lg:w-36 sm:h-20 sm:w-24 md:h-24 md:w-28 lg:h-28 lg:rounded-lg sm:rounded-lg">
        <span className="uppercase text-blue-800 text-xs md:text-sm lg:text-base leading-3 ">
          score
        </span>
        <span className="score text-4xl leading-10 md:text-5xl lg:text-6xl lg:leading-11">
          {score}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

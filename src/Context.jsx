import React, { useContext, useEffect,  useState } from "react";
import {btns} from "./Data";
const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [rules, setRules] = useState(false);
    const [buttons, setButtons] = useState(btns)
    const [clickBtn, setClickBtn] = useState(false)
    const [houseChoice, setHouseChoice] = useState([{id: 0, name: '', img: ''}])
    const [displayHouse, setDisplayHouse] = useState(false);
    const [displayStatus, setDisplayStatus] = useState(false);
    const [status, setStatus] = useState('')
    const [stat, setStat] = useState(null);
    useEffect(() => {
      if (displayHouse) {
        const timer = setTimeout(() => {
          setDisplayStatus(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [displayHouse]);

    useEffect(() => {
      if (clickBtn) {
        const timer = setTimeout(() => {
          setDisplayHouse(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }, [clickBtn]);
    const chooseBtn = (btn) => {
        let houseChoiceNum = (Math.floor(Math.random() * btns.length))
        let houseChoiceName = btns[houseChoiceNum].name;
        setHouseChoice(btns.filter(item => item.name === houseChoiceName))    
        setClickBtn(true)
        setButtons(btns.filter(item => item.name === btn ))
       
    }

    useEffect(()=>{
        if(houseChoice != []){
            if(buttons[0] === houseChoice[0]){
                 setStatus("it's a tie!")
            }
            else if(buttons[0].name === 'paper' && houseChoice[0].name === 'scissors'){
                setStatus("You lose")
            }
            else if(buttons[0].name === 'paper' && houseChoice[0].name === 'rock'){
                setStatus("You Win")
            }
            else if(buttons[0].name === 'scissors' && houseChoice[0].name === 'rock'){
                setStatus("You lose")
            }
            else if(buttons[0].name === 'scissors' && houseChoice[0].name === 'paper'){
                setStatus("You Win")
            }
            else if(buttons[0].name === 'rock' && houseChoice[0].name === 'paper'){
                setStatus("You lose")
            }
            else if(buttons[0].name === 'rock' && houseChoice[0].name === 'scissors'){
                setStatus("You Win")
            }
        }
    }, [houseChoice, buttons])
    const openRules = () => {
        setRules(true);
    }
    const closeRules = () => {
        setRules(false);
    }
    const playAgain = () => {
        setButtons(btns)
        setHouseChoice([{id: 0, name: '', img: ''}])
        setDisplayHouse(false)
        setClickBtn(false)
        setDisplayStatus(false)
        setStatus('')
        setStat(null)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          if (status === "You Win") {
            setStat(true);
          } else if (status === "You lose") {
            setStat(false);
          }
          else{
            setStat(null)
          }
        }, 2500);
        return () => clearTimeout(timer);
      }, [status, stat]);
    
    return <AppContext.Provider value={{displayStatus, stat, status, playAgain, openRules, displayHouse, houseChoice, clickBtn, chooseBtn, buttons, closeRules, rules}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext, AppProvider};   
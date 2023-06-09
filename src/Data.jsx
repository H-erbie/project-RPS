import paper from './assets/paper.png'
import sci from './assets/sci.png'
import rock from './assets/rock.png'
import img from './assets/img.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export const btns = [
    {
        id: 1,
        img: paper,
        name: 'paper'
    },
    {
        id: 2,
        img: sci,
        name: 'scissors'
    },
    {
        id: 3,
        img: rock,
        name: 'rock'
    },
]
export const rulesBtns = [
    {
        id: 1,
        img: img2,
        icon: <FaArrowLeft/>,
        text: 'beat',
        name: 'paper',
    },
    {
        id: 2,
        img: img1,
        icon: <FaArrowRight/>,
        text: 'beat',
        name: 'scissors'
    },
    {
        id: 3,
        img: img,
        icon: <FaArrowRight/>,
        text: 'beat',
        name: 'rock'
    },
]
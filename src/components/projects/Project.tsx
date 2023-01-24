import React from "react"
import { motion } from "framer-motion"

import img1 from "../../assets/images/geo-quiz/geo-quiz-screen-1.png"
import img2 from "../../assets/images/geo-quiz/geo-quiz-screen-2.png"
import img3 from "../../assets/images/geo-quiz/geo-quiz.screen-3.png"
import img4 from "../../assets/images/geo-quiz/geo-quiz-mobile.gif"

function Project() {
    return (
        <div className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div className="slide first">
                    <img src={img1} alt="img" />
                </div>

                <div className="slide">
                    <img src={img2} alt="img" />
                </div>

                <div className="slide">
                    <img src={img3} alt="img" />
                </div>

                <div className="slide">
                    <img src={img4} alt="img" />
                </div>

                <div className="navigation-auto">
                    <div className="auto"></div>
                    <div className="auto"></div>
                    <div className="auto"></div>
                    <div className="auto"></div>
                </div>

            </div>

            <div className="manual-navigation">
                <label htmlFor="radio1" className="manual-btn"></label>
                <label htmlFor="radio2" className="manual-btn"></label>
                <label htmlFor="radio3" className="manual-btn"></label>
                <label htmlFor="radio4" className="manual-btn"></label>
            </div>

        </div >
    )
}

export default Project



{/* <img src={img2} alt="" /> */ }
{/* <img src={img3} alt="" /> */ }
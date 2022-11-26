import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import AboutNBA from "../HomeRightMenu/AboutNBA";

const SpecficInterestRightView = (props) => {
  return (
    <>
      <div className={rbar.right_bar_wrap}>
        <div className={rbar.serch_box_wrap}>
          <input className={rbar.seach_bar_ele} placeholder="Search " />
        </div>
        <AboutNBA />
      </div>
    </>
  );
};

export default SpecficInterestRightView;

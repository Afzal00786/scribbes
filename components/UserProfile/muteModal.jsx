import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserMuteModal = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="userblock">
        <Modal
          className="userblock"
          show={props?.state}
          onHide={props?.onClick}
          centered
        >
          <div className="text-[24px] font-grotesk font-bold text-center">
            Mute @mikesomeoneuser ?
          </div>
          <div className="pt-[46px] text-[24px] font-DM font-normal leading-[30px]">
            Are you sure you want to mute @mikesomeoneuser ?
          </div>
          <div className="mt-[108px] border-[#FF0000] border-[1px] w-full h-[63px] rounded-[41px] flex items-center justify-center cursor-pointer text-black  font-bold font-DM text-[24px]">
            Mute
          </div>
          <div
            className="mt-[25px] border-[#D9D9D9] border-[1px] w-full h-[63px] rounded-[41px] flex items-center justify-center cursor-pointer text-black  font-bold font-DM text-[24px]"
            onClick={props?.onClick}
          >
            Cancel
          </div>
        </Modal>
      </div>
    </>
  );
};

export default UserMuteModal;

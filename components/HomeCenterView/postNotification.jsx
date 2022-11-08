import React, { useState } from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import comnt from "../../Asstes/Images/comnt.png";
import share from "../../Asstes/Images/share.png";
import Image from "next/image";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineCreate } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import psm from "../../Asstes/style/post_share_modal.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import saveVedio from "../../Asstes/Images/saveVedio.png";
import face from "../../Asstes/Images/face.png";
import messanger from "../../Asstes/Images/messanger.png";
import tt from "../../Asstes/Images/tt.png";
import instaM from "../../Asstes/Images/instaM.png";
import whatsapp from "../../Asstes/Images/whatsapp.png";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PostNotification = (props) => {
  const [shareactive, setSahreActive] = useState(false);
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(10);
  const activePageTab = useSelector(
    (state) => state.allGernalFunction.activePageTab
  );
  const [isLike, setIsLike] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLike = () => {
    if (isLike == false) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
      setIsLike(false);
      return;
    }
    setIsLike(true);
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (activePageTab === 3) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [activePageTab]);

  return (
    <>
      <div className={HomCen.post_noti_wrap}>
        <div
          className={isLike == true ? HomCen.noti_box_clicked : HomCen.noti_box}
          onClick={() => handleLike()}
        >
          <IoIosArrowUp className="text-2xl" />
          <div className={HomCen.like_counter}> {props.showValue && like}</div>
        </div>
        <div className={HomCen.noti_box}>
          <Image src={comnt} />
          <div className={HomCen.like_counter2}> {props.showValue && 56}</div>
        </div>
        {activePageTab != 3 ? (
          <div
            className={HomCen.noti_box}
            onClick={() => setSahreActive(!shareactive)}
          >
            <Image src={share} />
            <div className={HomCen.like_counter2}> {props.showValue && 56}</div>
            {shareactive && (
              <div className={HomCen.share_post_toggle}>
                <div className={HomCen.share_toggle_container}>
                  <div className={HomCen.share_toggle_item}>
                    <RiShareForwardLine className="text-lg" />

                    <div>Share</div>
                  </div>
                  <div className={HomCen.share_toggle_item}>
                    <MdOutlineCreate className="text-lg" />

                    <div>Quote Scribbe</div>
                  </div>
                  <div
                    className={HomCen.share_toggle_item}
                    onClick={handleShow}
                  >
                    <BsShare className="text-lg" />

                    <div>Share Via</div>
                  </div>
                  <div className={HomCen.share_toggle_item}>
                    <AiOutlineLink className="text-lg" />

                    <div>Copy Post URL</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {/*<===========share modal=======>*/}

      <Modal
        className="post_share_modal"
        show={show}
        onHide={handleClose}
        centered
      >
        <div className={psm.main_container}>
          <div className={psm.modal_header}>
            <div
              className="text-3xl cursor-pointer"
              onClick={() => handleClose()}
            >
              <BsArrowLeftShort />
            </div>
            <div className={psm.modal_heading}>Share Via</div>
          </div>
          <div className={psm.header_text}>
            Share this post through different platform.
          </div>
          <div className={psm.seprator}></div>
          <div className={psm.social_media_wrap}>
            <div className="cursor-pointer">
              <Image src={saveVedio} />
            </div>
            <div className={psm.meta_container}>
              <div className={psm.media_box}>
                <Image src={face} />
              </div>
              <div className={psm.media_box}>
                <Image src={messanger} />
              </div>
              <div className={psm.media_box}>
                <Image src={tt} />
              </div>
              <div className={psm.media_box}>
                <Image src={instaM} />
              </div>
              <div className={psm.media_box}>
                <Image src={whatsapp} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PostNotification;

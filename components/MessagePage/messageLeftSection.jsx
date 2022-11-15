import React from "react";
import mls from "../../Asstes/style/message_left_sec.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";
import msgUser from "../../Asstes/Images/msgUser.png";
import msgOnline from "../../Asstes/Images/msgOnline.png";
import userGrl from "../../Asstes/Images/userGrl.png";
import sentImage from "../../Asstes/Images/sentImage.png";
import grl from "../../Asstes/Images/grl.png";
import { handleMessageView } from "../../redux/reducers/scribbes";
import { useDispatch } from "react-redux";

const MessageLeftSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const mesageUser = [
    {
      title: "Jimmy McGill",
      userEmail: "(@saulgoodman)",
      profile: msgUser,
      des: "Did you watch the match last night? It was epic!",
      active: true,
      hours: "22hr",
      sendImage: false,
    },
    {
      title: "Maisy ",
      userEmail: "(@maisycrazy)",
      profile: userGrl,
      des: "Did you watch the match last night? It was epic! Broo, I really enjo...",
      active: false,
      hours: "22hr",
      sendImage: false,
    },
    {
      title: "Rebbaca Realtor  ",
      userEmail: "(@beccaestates)",
      profile: grl,
      des: "Sent you a photo",
      active: true,
      hours: "22hr",
      sendImage: true,
    },
    {
      title: "Maisy ",
      userEmail: "(@maisycrazy)",
      profile: userGrl,
      des: "Did you watch the match last night? It was epic! Broo, I really enjo...",
      active: false,
      hours: "8 Aug",
      sendImage: false,
    },
  ];

  return (
    <>
      <div className={mls.main_container}>
        <div className={mls.header_wrap}>
          <div className={mls.header_content}>
            <BsArrowLeft
              className="cursor-pointer"
              onClick={() => router.back()}
            />
            Messages
          </div>
          <div className={mls.search_box}>
            <input placeholder="Search" className={mls.search_ele} />
          </div>
        </div>
        <div className={mls.content_box}>
          {mesageUser.map((data) => {
            return (
              <>
                <div
                  className={mls.masg_wrap}
                onClick={()=>dispatch(handleMessageView(true))}
                >
                  <div className={mls.msg_info_wrap}>
                    <div className={mls.msg_profile_box}>
                      <div className={mls.online_status}>
                        {data.active && <Image src={msgOnline} />}
                      </div>
                      <Image src={data.profile} />
                    </div>
                    <div className={mls.msg_des_box}>
                      <div className="flex justify-between items-center">
                        <div className={mls.user_name}>
                          {data.title}
                          <span className="text-[#BCBCBC]">
                            {data.userEmail}
                          </span>
                        </div>
                        <div className="text-[#BCBCBC] font-DM font-normal text-sm xl:text-base">
                          {data.hours}
                        </div>
                      </div>
                      <div
                        className={
                          data.active == true ? mls.user_text2 : mls.user_text
                        }
                      >
                        <div>{data.sendImage && <Image src={sentImage} />}</div>
                     {data.des}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MessageLeftSection;

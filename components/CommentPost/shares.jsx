import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import macount from "../../Asstes/Images/macount.png";
import notMuted from "../../Asstes/Images/notMuted.png";
import profile from "../../Asstes/Images/profile.png";
import Image from "next/image";
import scv from "../../Asstes/style/setting_center_view.module.css";
import ScribbedModalTabs from "./scribbedModalTabs"
import FollowAndUnFollowBtn from "./followBtn"

const ScribbedByshares = () => {
	const mutedAccounts = [
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: false,
		},
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: false,
		},
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: false,
		},
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: true,
		},
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: false,
		},
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: false,
		},
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: false,
		},
		{
		  image: profile,
		  name: "John Doe",
		  email: "@JohnDoeuser",
		  des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
		  mute: false,
		},
	  ];
  return (

	<>
	       <div className={scv._ma_body_container}>
          <div className={scv.ma_body} id="style-desk">
            {mutedAccounts.map((data) => {
              return (
                <>
                  <div className="flex justify-between w-[100%]">
                    <div className="flex gap-[17px]">
                      <div>
                        <Image src={data.image} />
                      </div>
                      <div>
                        <div className={scv.ma_username}>{data.name}</div>
                        <div className="font-DM text-xs font-normal">
                          {data.email}
                        </div>
                        <div className="pt-[13px] max-w-[400px] text-base font-DM leading-[20px]">
                          {data.des}
                        </div>
                      </div>
                    </div>
             <div>
              <FollowAndUnFollowBtn/>
             </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
	
	
	</>
  )
}

export default ScribbedByshares
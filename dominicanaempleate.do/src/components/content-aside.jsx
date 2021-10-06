import React from "react";
import asideAds from "../assets/icons/ads.jpeg"


const ContentAside = () => {

    return (

        <div className="aside">
            <img src={asideAds} style={{ width: "100%", height:600, objectFit: "cover" }} alt="" />
        </div>


    );
}

export default ContentAside;
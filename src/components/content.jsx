import React from "react";

import ContentAside from "./content-aside";
import ContentJobs from "./content-jobs";


import Search from "./search";

const Content = () => {

    return (
        <>
            <Search />
            <div className="container mt-3 d-flex justify-content-center ">

                <ContentAside />
                <ContentJobs />

            </div>
        </>
    );

}

export default Content;
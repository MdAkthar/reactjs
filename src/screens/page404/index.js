import React from "react";
import assests from "../../assets";
import Lottie from "lottie-react";
import './styles.css';

const Page404=()=>{


return(
    <div className="page">
        <Lottie animationData={assests.Lottie.page404} loop={true} />
    </div>
)



}
export default Page404;
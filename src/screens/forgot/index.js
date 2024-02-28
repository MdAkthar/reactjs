import React from "react";
import './styles.css';
import assets from "../../assets";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Forgot = () => {

    const navigate=useNavigate();

    const handleBack = () => {
        navigate('/app')
    }

    return (
        <div className="container">
            <div className='forget-log'>
                <img className='log-inner' src={assets.Images.logo} />
            </div>
            <div className="forget-list">
                <h3 className="forget-h">Reset Password</h3>
                <input className="pass" type="email" placeholder="Enter your Email" />
                <div className='locks'>
                    <MdMail />
                </div>
                <div className="send">
                    <button className="button-send">Send</button><br />
                    <button className="button-back" onClick={()=>handleBack()}>Back</button>
                </div>
            </div>
        </div>
    )





}
export default Forgot;



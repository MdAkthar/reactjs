import React from "react";
import './styles.css'
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Input = () => {

const  navigate=useNavigate();

const handleClick=()=>{
    navigate('/forget')
}

    return (
        <div>
            <div className='input'>
                <h3 className="input-top">Academy</h3>
                <input type='text' id='text' className='input-field' placeholder='Username' /><br />
                <input type="password" id="password" className="input-field" placeholder="Password" />
                <div className='icon'>
                    <FaUser />
                </div>
                <div className="lock">
                    <FaLock />
                </div>
            </div>
            <div className="login">
                <button className="button-login">Login</button><br />
                <a href="forget" className="a" onClick={()=>handleClick()}>Forgot Password?</a>
            </div>
        </div>

    )




}
export default Input;
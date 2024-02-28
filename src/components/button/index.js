import React from "react";
import './styles.css';



const Button=()=>{

return(
    <div>
        <button className="button">Super Admin</button>
        <button className="button">Admin</button>
        <button className="button">Teacher</button>
        <button className="button">Student</button> 
        <button className="button">Parent</button>
        <button className="button">Accountant</button>
        <button className="button">Receptionist</button>
        <div className="button-inner">
            <h2 className="button-in">Access Area</h2><hr/>
        </div>
    </div>
)



}
export default Button;
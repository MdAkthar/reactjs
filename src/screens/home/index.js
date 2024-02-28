import React from 'react';
import './styles.css';
import Button from '../../components/button';
import assets from '../../assets';
import Input from '../../components/input';

const Home=()=>{


return(
    <div className='container'>
        <div>
            <Button/>
        </div>
        <div className='logo'>
            <img className='logo-inner' src={assets.Images.logo}/>
        </div>
        <div>
            <Input/>
        </div>
    </div>
)






}
export default Home;
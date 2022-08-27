import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';


function Nav(){

    const [style, setStyle] = useState("-ml-80");

    function set(){
        if(style === "-ml-80"){
            setStyle("-ml-0");
        }else{
            setStyle("-ml-80");
        }
    }


    return(<>
        <nav className=' w-full h-auto fixed top-0 left-0 z-10 px-4 md:px-10 lg:px-32 xl:px-52 flex items-center justify-between bg-slate-100'>
            <div>
                <NavLink to='/'>
                    <img className=' w-16' src={logo} alt="logo.png" />
                </NavLink>
            </div>
            <div className=' md:hidden'>
                <button onClick={set} className=' text-orange-500 text-3xl'><i className="fa-solid fa-bars"></i></button>
            </div>
            <div className=' hidden md:flex gap-4'>
                <NavLink className={({isActive})=> isActive?'text-orange-500' : ' hover:text-orange-500'} to='/'>Home</NavLink>
                <NavLink className={({isActive})=> isActive?'text-orange-500' : ' hover:text-orange-500'} to='/about'>About Us</NavLink>
                <NavLink className={({isActive})=> isActive?'text-orange-500' : ' hover:text-orange-500'} to='/service'>Our Service</NavLink>
                <NavLink className={({isActive})=> isActive?'text-orange-500' : ' hover:text-orange-500'} to='/contact'>Contact Us</NavLink>
            </div>
        </nav>
        <div className={` ${style} -ml-80 transition-all duration-500 ease-in-out  w-72 h-screen fixed top-16 z-10 bg-slate-200 px-4`}>
            <div className=' flex flex-col gap-2 pt-4'>
                <NavLink className={({isActive})=> isActive?'bg-orange-500 rounded-md' : ' hover:bg-orange-500 rounded-md '} to='/'><span className=' pl-1'>Home</span></NavLink>
                <NavLink className={({isActive})=> isActive?'bg-orange-500 rounded-md' : ' hover:bg-orange-500  rounded-md'} to='/about'><span className=' pl-1'>About Us</span></NavLink>
                <NavLink className={({isActive})=> isActive?'bg-orange-500 rounded-md' : ' hover:bg-orange-500  rounded-md'} to='/service'><span className=' pl-1'>Our Service</span></NavLink>
                <NavLink className={({isActive})=> isActive?'bg-orange-500 rounded-md' : ' hover:bg-orange-500  rounded-md'} to='/contact'><span className=' pl-1'>Contact Us</span></NavLink>
            </div>
        </div>

        </>)
}


export default Nav;
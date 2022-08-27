import React from 'react';


function Footer(){
    const date = new Date();
    return(
        <footer className=' w-full h-auto p-5 bg-slate-900 text-white  text-center'>
            Copyright © {date.getFullYear()} Arafat Sofa Repairing Center | All Rights Reserved
        </footer>
    )
}


export default Footer;
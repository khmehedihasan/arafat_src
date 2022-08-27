import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import s3 from '../assets/images/s3.jpg'


function About(){
    return(
        <div>
            <Nav />
            <div className='w-full h-auto  px-4 md:px-10 lg:px-32 xl:px-52 pt-32 pb-10'>
            <h1 className=' text-3xl text-center text-slate-700 font-bold'><span className=' border-b border-slate-700'>About Us</span></h1>
                <div className=' w-full h-auto mt-20 '>
                    <div className=' w-full mt-10 flex flex-col md:flex-row'>
                        <img className=' w-full md:w-1/2' src={s3} alt=""  />
                        <div className=' w-full md:w-1/2 px-4 mt-4 md:mt-0'>
                            <h1 className=' font-bold'>Sofa Repairing Service</h1>
                            <p className=' text-justify'>Arafat Sofa Repairing Center is the best sofa repairing company. Here wooden tables, chairs and other furniture with all kinds of sofas are repaired. We accept orders online and repair at home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default About;
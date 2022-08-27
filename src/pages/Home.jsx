import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import bg from '../assets/images/bg.jpg';
import { Link } from 'react-router-dom';
import s1 from '../assets/images/s1.jpg'
import s2 from '../assets/images/s2.jpeg'
import Chat from '../components/Chat';


function Home(){
    return(
        <>
            <Nav /> 
            <div className=' w-full h-[600px] block relative '>
                <img className=' w-full h-full object-cover absolute mix-blend-overlay' src={bg} alt="" />
                <div className=' w-full h-32 absolute top-1/3 text-center'>
                    <h1 className=' text-4xl font-bold'>Arafat Sofa Repairing Center</h1>
                    <p className=' text-xl uppercase tracking-widest text-orange-600 mt-4 mb-8'>make your old furniture new</p>
                    <Link className=' w-max mx-auto block bg-orange-500 text-white px-2 py-2 rounded-full animate-bounce ' to='/contact' >Contact With Us</Link>
                </div>
            </div>
            <div className=' px-4 md:px-10 lg:px-32 xl:px-52 py-20'>
                <h1 className=' text-3xl text-center'>Arafat Sofa Repairing Center</h1>
                <p className='text-justify text-xl pt-4'>Arafat Sofa Repairing Center is the best sofa repairing company. Here wooden tables, chairs and other furniture with all kinds of sofas are repaired. We accept orders online and repair at home.</p>
            </div>

            <div className='w-full h-auto  px-4 md:px-10 lg:px-32 xl:px-52 pt-10 pb-10'>
            <h1 className=' text-3xl text-center text-slate-700 font-bold'><span className=' border-b border-slate-700'>Our Services</span></h1>
                <div className=' w-full h-auto mt-20 '>
                    <h1 className=' text-2xl md:text-3xl'>Sofa Repairing Service</h1>
                    <div className=' w-full mt-10 flex flex-col md:flex-row'>
                        <img className=' w-full md:w-1/2' src={s1} alt=""  />
                        <div className=' w-full md:w-1/2 px-4 mt-4 md:mt-0'>
                            <h1 className=' font-bold'>Sofa Repairing Service</h1>
                            <p className=' text-justify'>Arafat Sofa Repairing Center is the best sofa repairing company. Here wooden tables, chairs and other furniture with all kinds of sofas are repaired. We accept orders online and repair at home.</p>
                        </div>
                    </div>
                </div>

                <div className=' w-full h-auto mt-20 '>
                    <h1 className=' text-2xl md:text-3xl'>Other furniture repair service</h1>
                    <div className=' w-full mt-10 flex flex-col md:flex-row'>
                        <img className=' w-full md:w-1/2' src={s2} alt=""  />
                        <div className=' w-full md:w-1/2 px-4 mt-4 md:mt-0'>
                            <h1 className=' font-bold'>Other furniture repair service</h1>
                            <p className=' text-justify'>Arafat Sofa Repairing Center is the best sofa repairing company. Here wooden tables, chairs and other furniture with all kinds of sofas are repaired. We accept orders online and repair at home.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full h-auto  px-4 md:px-10 lg:px-32 xl:px-52 py-10 bg-slate-600 flex flex-col md:flex-row gap-4 items-center justify-between'>
                <div className=' w-72 md:w-60 h-72 py-2 bg-slate-100 rounded-md shadow-md text-center'>
                    <span className=' text-8xl text-orange-500'><i className="fa-solid fa-gem"></i></span>
                    <h1 className=' text-3xl uppercase pt-2'>OUR Quality</h1>
                    <p className=' p-1 pt-4'>We provide best quality sofa and all other furniture repairing service.</p>
                </div>
                <div className=' w-72 md:w-60 h-72 py-2 bg-slate-100 rounded-md shadow-md text-center'>
                    <span className=' text-8xl text-orange-500'><i className="fa-solid fa-hand-holding-dollar"></i></span>
                    <h1 className=' text-3xl uppercase pt-2'>our pricing</h1>
                    <p className=' p-1 pt-4'>We take minimum price for repairing.
                    We take for how much we work and no extra charge.</p>
                </div>
                <div className=' w-72 md:w-60 h-72 py-2 bg-slate-100 rounded-md shadow-md text-center'>
                    <span className=' text-8xl text-orange-500'><i className="fa-solid fa-flag"></i></span>
                    <h1 className=' text-3xl uppercase pt-2'>our goal</h1>
                    <p className=' p-1 pt-4'>Our goal is serve furniture repairing service all over our country at low cost.</p>
                </div>
            </div>

            <Chat />

            <Footer />
        </>
    )
}

export default Home;
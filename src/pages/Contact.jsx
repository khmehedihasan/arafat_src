import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function Contact(){
    return(
        <div>
            <Nav />
            <div className=' w-full h-auto px-4 md:px-0 pt-32'>
                <h1 className=' text-3xl text-center text-slate-700 font-bold'><span className=' border-b border-slate-700'>Contact Us</span></h1>
                <form className=' w-full md:w-[600px] h-auto mx-auto p-4 bg-slate-500 mb-10 mt-20 rounded-sm'>

                    <label htmlFor='name'>Name:</label><br />
                    <input className=' w-full rounded-sm px-2 mb-2 border-none outline-none text-slate-500' type="text" name="name" id="name" placeholder='Enter your name.' /><br />

                    <label htmlFor='email'>Email:</label><br />
                    <input className=' w-full rounded-sm px-2 mb-2 border-none outline-none text-slate-500' type="email" name="email" id="email" placeholder='Enter your email.' /><br />

                    <label htmlFor='phone'>Phone:</label><br />
                    <input className=' w-full rounded-sm px-2 mb-2 border-none outline-none text-slate-500' type="number" name="phone" id="phone" placeholder='Enter your phone.' /><br />

                    <label htmlFor='message'>Message:</label><br />
                    <textarea className=' w-full rounded-sm px-2 mb-2 border-none outline-none text-slate-500' name="message" id="message" cols="30" rows="6" placeholder='Message...'></textarea>

                    <input className=' bg-blue-900 text-white px-3 py-[2px] rounded-sm cursor-pointer hover:bg-blu' type="button" value="Send" />
                </form>
            </div>
            <div className=' w-full h-auto  px-4 md:px-10 lg:px-32 xl:px-52 pb-10 text-slate-800'>
                <div className=' mt-40'>
                    <h1 className=' text-2xl font-bold'><span className=' border-b border-slate-700'>Contact Info</span></h1>
                    <div className=' mt-8'>
                       <div>
                            <span className=' font-bold'>Phone: </span>
                            <span> 01778-114918</span>
                       </div>
                       <div>
                            <span  className=' font-bold'>Email: </span>
                            <span> arafatsofarepair21@gmail.com</span>
                       </div>
                        <div className=' w-80'>
                            <span  className=' font-bold'>Address: </span>
                            <span>58/4, D.I.T Road, East Hazipara, Rampura, Dhaka, Bangladesh 1219 Dhaka, Dhaka Division, Bangladesh</span>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex gap-4'>
                    <a className=' text-4xl' href="https://www.facebook.com/ArafatSofaRepairingCenter/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-square"></i></a>
                    <a className=' text-4xl' href=" " ><i className="fa-brands fa-instagram-square"></i></a>
                    <a className=' text-4xl' href=" " ><i className="fa-brands fa-twitter-square"></i></a>
                    <a className=' text-4xl' href="https://api.whatsapp.com/send?phone=8801778114918" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp-square"></i></a>
                </div>
            </div>


            <iframe className=' w-full h-96' title='Arafat Sofa Repairing Center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1535.3465620245795!2d90.41808696027563!3d23.75842766178745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b87969f919a7%3A0xe45f6b3e2854b6a!2zNTcgRSBIYXppcGFyYSwg4Kai4Ka-4KaV4Ka-IDEyMTk!5e0!3m2!1sbn!2sbd!4v1656327286444!5m2!1sbn!2sbd"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Footer />
        </div>
    )
}


export default Contact;
import React, { useRef } from 'react';
import './contact.css';
import Adobe from '../../assets/adobe.png';
import Innovatech from '../../assets/Innovatech.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/github (2).png'
import emailjs from '@emailjs/browser';






const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uckmpjb', 'template_xercpof', form.current, {
            publicKey: '6L0icjMvgaC4OY2rf',
          })
          .then(() => { console.log('SUCCESS!');
            e.target.reset();
            alert('Email Sent!');
          },
            
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
   <section id="contactPage">
       <div id="clients">
       <h1 className="contactPageTitle">My Clients</h1>
       <p className="clientDesc">
        I have had the opportunity to work with a diverse group of companies.
        Some of the Notable companies i have worked with includes
       </p>
       <div className="clientImgs">
        <img src={Innovatech} alt="Client" className="clientImg" />
        <img src={Adobe} alt="Client" className="clientImg" />
        {/* <img src={Microsoft} alt="Client" className="clientImg" />
        <img src={Facebook} alt="Client" className="clientImg" /> */}
       </div>
       </div>
       <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Pls fill out the form below to discuss any work opportunities</span>
        <form className="contactForm"ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" className="email" placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name="message" rows={5} placeholder='Your Message'></textarea>
            <button type='submit' value="Send" className="submitBtn">Submit</button>
            <div className="links">
                <a href="https://www.facebook.com/Ceejay4l"><img src={FacebookIcon} alt="Facebook" className="link" /></a>
                <a href="https://x.com/Ceejay_4l"><img src={TwitterIcon} alt="Twitter" className="link" /></a>
                <a href="https://www.youtube.com/channel/UCBgHoBIqx5hG1rcWz2pjpwg"><img src={YoutubeIcon} alt="Youtube" className="link" /></a>
                <a href="https://www.instagram.com/ceejay_4l/"> <img src={InstagramIcon} alt="Instagram" className="link" /></a>
                <a href="https://github.com/Jamadi09"><img src={GithubIcon} alt="Github" className='link' /></a>
                </div>
        </form>
       </div>
   </section>
  );
}

export default Contact
import React, { useEffect } from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll'; 
import Aos from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {
  const PDF_FILE_URL = "http://localhost:3000/CV PDF.pdf"
  const downloadFileAtURL=(url)=>{
    fetch(url).then(response=>response.blob()).then(blob=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const filename = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href=blobURL 
    aTag.setAttribute('download', filename);
    aTag.click();
    aTag.remove();
  })
  };
    
    
    useEffect(()=>{
      Aos.init({duration: 3000,
                delay: 100,
                easing: 'ease-in-sine',
      });
    }, [])
  return (
  <session id="intro">
    <div className="introContent">
      <span className="hello" data-aos="flip-left" >Hello,</span>
      <span className="introText" data-aos = "flip-left">I'm <span className="introName" data-aos = "fade-right">Joel</span><br />Website Designer</span>
      <p className="introPara" data-aos = "fade-right">I am a skilled web designer with experience in creating <br /> visually appealing and user-friendly websites</p>
      <Link><button className="btn" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}><img src={btnImg} alt="Hire Me" className='btnImg' />Download Resume</button></Link>
    </div>
    <img src={bg} alt="profile" className="bg" />
  </session>
  )
}

export default Intro
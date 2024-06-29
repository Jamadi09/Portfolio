import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do </span>

      <span className="skillDesc">I am a skilled and passionate webdesigner with experience in creating visually 
        appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. 
        I am proficient in HTML, CSS, JAVASCRIPT, JQUERY, REACTJS, NODEJS, EXPRESS JS, MONGODB, and NEXT JS and as 
        well as UI/UX design principles. I am always eager to learn new skills and stay up
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX DESIGN</h2>
                <p>This is a demo text, your can write your own content here</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>WEBDESIGN</h2>
                <p>This is a demo text, your can write your own content here</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>APPDESIGN</h2>
                <p>This is a demo text, your can write your own content here</p>
            </div>
        </div>
      </div>
      
    </section>
  );
}

export default Skills
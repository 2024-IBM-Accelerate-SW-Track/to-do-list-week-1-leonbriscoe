import React, { Component } from 'react';
import "./About.css";
import profilePic from '../assets/profile_pic_name.jpg'; 

  
export default class About extends Component {
  render() {
    return (
      <div>
       <div>
<div className="split left">
<div className="centered">
<img 
className="profile_image"
// Image goes here
src = {profilePic}
alt="Profile Pic"
></img>
</div>
</div>
<div className="split right">
<div className="centered">
<div className="name_title">Leon Danquah</div>
<div className="brief_description">
I am a rising Junior attending the University at Buffalo majoring in Computer Science.During my free time, I enjoy listening to music, working out, and watching anime.
</div>
</div>
</div>
</div>

      </div>
    );
  }
}
import React from 'react'
import MotionHoc from "./MotionHoc";
import Footer from '../components/Footer';
import '../page-styles/upload.css'
import Images from '../components/Images';
import '../page-styles/upload.css'
const TeamComponent = () => {
  
  return (
    <>
      <div className="header">
        <h1>Upload Images Here</h1>
      </div>
      <Images/>
      <Footer/>
    </>
  )
};

const Upload = MotionHoc(TeamComponent);

export default Upload;

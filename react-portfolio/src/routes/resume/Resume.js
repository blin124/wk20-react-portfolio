import React, { Component } from 'react';
import Pdf from './Resume.pdf';

function Resume(){

  return (
    <div className = "App">
      <a href = {Pdf} target = "_blank">Download Pdf</a>
    </div>
  );
}

export default Resume;
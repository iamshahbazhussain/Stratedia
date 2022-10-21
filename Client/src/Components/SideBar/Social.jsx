import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Collapse } from 'antd';
import { MdGroups } from 'react-icons/md';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

import './Social.scss'

const { Panel } = Collapse;

const Social = () => {

 


  return (
    <>
    <div className="main_so">
    <MdGroups className='so_icon'/>
       <Collapse>
        <Panel  header='Social' key="1">
            
<div className="icon">
    <FaFacebookF/>
    Facebook
</div>
<div className="icon">
    <FaInstagram/>
    Instagram
</div>
<div className="icon">
    <FaLinkedinIn/>
    Linkedin
</div>
<div className="icon">
    <FaYoutube/>
    Youtube
</div>
  
<div className="icon">
    <FaTwitter/>
    Twitter
</div>
<div className="icon">
    <FaPinterest/>
    Pinterest
</div>
<div className="icon">
    <FaTiktok/>
    Tiktok
</div>
  
        </Panel>
       
      </Collapse>
    </div>
    </>
  )
}

export default Social

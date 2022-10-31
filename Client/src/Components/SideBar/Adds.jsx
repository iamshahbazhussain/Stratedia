import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Collapse } from 'antd';
import { MdGroups } from 'react-icons/md';

import { MdDashboard } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import './Social.scss'

const { Panel } = Collapse;

const Ads = () => {




    return (
        <>
            <div className="main_so">
                <MdDashboard className='so_icon' />
                <Collapse>
                    <Panel header='Ads' key="1">
                        <div className="icon">
                            <FaFacebookF />
                            Facebook Ads
                        </div>
                        <div className="icon">
                            <FaInstagram />
                            Instagram Ads
                        </div>
                        <div className="icon">
                            <FaLinkedinIn />
                            Linkedin Ads
                        </div>
                    </Panel>
                </Collapse>
            </div>
        </>
    )
}

export default Ads

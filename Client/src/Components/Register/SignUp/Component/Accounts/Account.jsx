import React from 'react';

// picture 
import right from '../../../../../Assets/right.jpg';
import face from '../../../../../Assets/face.png';
import insta from '../../../../../Assets/insta.png';
import link from '../../../../../Assets/link.png';
import twitter from '../../../../../Assets/twitter.png';
import tiktok from '../../../../../Assets/tiktok.png';
import pintrest from '../../../../../Assets/pintrest.png';
import google from '../../../../../Assets/google.png';
import shop from '../../../../../Assets/shop.png';
import snap from '../../../../../Assets/snap.png';

// Css 
import './Account.scss';


//map for account cards

const cards = [
    {
        img: face,
        name: 'Facebook',
        type: 'Page or Group',
    },
    {
        img: insta,
        name: 'Instagram',
        type: 'Business Account',
    },
    {
        img: twitter,
        name: 'Twitter',
        type: 'Profile',
    },
    {
        img: link,
        name: 'Linkedin',
        type: 'Page',
    },
    {
        img: pintrest,
        name: 'Pinterest',
        type: 'Profile',
    },
    {
        img: tiktok,
        name: 'Tiktok',
        type: 'Business Account',
    },
    {
        img: snap,
        name: 'Snapchat',
        type: 'Profile',
    },
    {
        img: shop,
        name: 'Shopify',
        type: 'Store',
    },
]





const Account = () => {

    return (
        <>
            <div className="main_account">
                <div className="signup_content">
                    <div className="title">Get started with Stratedia</div>
                    <div className="para">Connect a channel to plan, create and schedule content.<br />You can always add one later.</div>
                    <div className="cards_main">

                        {/* card map  */}

                        {cards.map((e) => {
                            
                            return (
                                <>
                                    <div className="card">
                                        <img src={e.img} alt="Image Error" />
                                        <div className="name">{e.name}</div>
                                        <div className="type">{e.type}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Account
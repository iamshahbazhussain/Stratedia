import React, { useState } from 'react';

// Components :
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Email from './Components/Email/Email';
import LoginContent from './Components/LoginContent/LoginContent';
import ResetPassword from './Components/ResetPassword/ResetPassword';

// CSS :
import './Login.scss';





const Login = () => {

    const [stepper, setStepper] = useState(0)

    const currentStep = () => {
        switch (stepper) {
            case 0:
                return (<LoginContent setStepper={setStepper} />);
                break;
            case 1:
                return (<Email setStepper={setStepper} />);
                break;
            case 2:
                return (<ResetPassword setStepper={setStepper} />);
                break;
            default:
                return (<LoginContent setStepper={setStepper} />);
                break;
        }
    }

    return (
        <>
            <Navbar />
            <div className='main_login'>
                <div className="login_left">
                    {currentStep()}
                </div>
                <div className="login_right">
                    <div className="para">
                        “To all my friends in business I will advise you to contact Steve Bibby & his company Stratedia to get your website done or upgraded. It’s amazing how much contact I get from google & my website dfwraps.com he’s great at getting your business name out there. It has worked great for us & we couldn’t be happier.”
                    </div>
                    <div className="name">DON GAYTON</div>
                    <div className="prof">CEO</div>
                    <div className="prof">DF WRAPS</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login

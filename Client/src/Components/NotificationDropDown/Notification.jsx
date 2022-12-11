import React, { useState, useEffect } from 'react'

// MUI :
import { IconButton } from '@mui/material'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// ANT-D :
import { Popover } from 'antd'

// ICONS | ASSETS :
import { BsBellFill, BsFillBellFill } from "react-icons/bs";

// APIs :
import { useSelector, useDispatch } from 'react-redux';
import { addNotification } from '../../GlobalStore/actions/notificationsActions';
import { readAllNotificationsAPI } from '../../API/notifications';

// CSS :
import "./Notification.scss";




const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 8,
        top: 10,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 2px',
        fontSize: "10px",
        backgroundColor: "red",
        color: "white",
        height: "18px",
        minWidth: "18px"
    },
}));

const Notification = () => {
    let dispatch = useDispatch();

    let userData = useSelector((state) => state.userData);
    const allNotifications = useSelector((state) => state.notificationData);

    const [notificationsCount, setNotificationsCount] = useState(0)

    const readAllNotifications = async () => {
        let res = await readAllNotificationsAPI()
        if (res.error != null) {

        } else {
        }
        setNotificationsCount(0)
    }
    useEffect(() => {
        if (allNotifications) {
            let count = 0
            allNotifications.map((data) => {
                if (data.status == "unRead") {
                    count += 1;
                }
            })
            setNotificationsCount(count)
        }
    }, [allNotifications])

    const NotificationContent = () => {
        return (
            <>
                <div className="notification_box">
                    {
                        allNotifications.length >= 1 ?
                            allNotifications.reverse().map((data, key) => {
                                return (
                                    <div className="notification" key={key}>
                                        <div className="img_box" style={data.status == "unRead" ? { backgroundColor: "green" } : {}}>
                                            <BsFillBellFill />
                                        </div>
                                        <div className="detials_box">
                                            <div className="title"> {data.title} </div>
                                            <div className="details"> {data.details} </div>
                                            <div className="date"> {data.createdAt?.substring(0, 10)} </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <>
                                <div className="center_div">
                                    No Notification
                                </div>
                            </>
                    }

                </div>
            </>
        )
    }

    return (
        <>
            <div className="notification_contianer">
                <Popover placement="bottomRight" title={"Notifications"} content={NotificationContent} trigger="click" className='notification_popover'>
                    <StyledBadge badgeContent={notificationsCount}>
                        <IconButton onClick={readAllNotifications}> <BsBellFill fontSize={"18px"} color='#00caef' /> </IconButton>
                    </StyledBadge>
                </Popover>
            </div>
        </>
    )
}

export default Notification
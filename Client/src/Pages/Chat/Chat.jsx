import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Sidebar, ConversationList, Conversation, Avatar, ConversationHeader, TypingIndicator, MessageSeparator, Search, Loader } from '@chatscope/chat-ui-kit-react';

import { FaUserAlt } from "react-icons/fa"
import ChatIcon from "../../Assets/chatIcon.webp"

import { getMyConversationsAPI, getConversationAPI, getAllMessagesAPI, saveMessagesAPI } from '../../API/chat';
import { useSelector } from "react-redux"
import { io } from "socket.io-client";

import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import "./Chat.scss"





const Chat = () => {
    let location = useLocation()

    let userID = location?.state?.userID;
    let UserData = useSelector((state) => state.userData)

    const [allConversations, setAllConversations] = useState(null)
    const [selectedChatUser, setSelectedChatUser] = useState(null)
    const [selectedConversation, setSelectedConversation] = useState(null)
    const [allMessages, setAllMessages] = useState(null)
    const [messageInputValue, setMessageInputValue] = useState("");
    const [newMessage, setNewMessage] = useState(null)

    const socket = useRef();

    const saveMessage = async () => {
        let data = {
            conversationId: selectedConversation._id,
            sender: UserData._id,
            text: messageInputValue
        }
        let res = await saveMessagesAPI(data)
        if (res.error != null) {

        } else {
            setMessageInputValue("")
            gettingMessages()
            socket.current.emit("sendMessage", {
                senderId: UserData._id,
                receiverId: selectedChatUser._id,
                text: "refresh",
            });
        }
    }
    const gettingMessages = async () => {
        let res = await getAllMessagesAPI(selectedConversation._id)
        if (res.error != null) {

        } else {
            setAllMessages(res.data.data)
        }
    }
    const selectConversation = (data) => {
        let chatUser = UserData?.role == "admin" ? data.members[0] : data.members[1]
        setSelectedChatUser(chatUser)
        setSelectedConversation(data)
    }

    const getSingleConversation = async () => {
        let res = await getConversationAPI(userID)
        if (res.error != null) {

        } else {
            let chatUser = UserData?.role == "admin" ? res.data.data.members[0] : res.data.data.members[1]
            setSelectedChatUser(chatUser)
            setSelectedConversation(res.data.data)

        }
    }
    const getMyConversations = async () => {
        const res = await getMyConversationsAPI()
        if (res.error != null) {

        } else {
            setAllConversations(res.data.data)
        }
    }

    useEffect(() => {
        if (selectedConversation) {
            gettingMessages()
        }
    }, [selectedConversation])
    useEffect(() => {
        if (allConversations && userID) {
            getSingleConversation()
        }
    }, [allConversations])
    useEffect(() => {
        // let SOCKET_URL = "http://52.196.106.22/socket/"
        let SOCKET_URL = "http://localhost:4000"
        socket.current = io(SOCKET_URL, {
            transports: ["websocket"],
        });
        getMyConversations()
    }, [])

    useEffect(() => {
        if (UserData) {
            socket && socket.current.on("connect", () => { });
            socket && socket.current.emit("addUser", UserData?._id);
        }
        // return () => {
        //     socket && socket.current.emit("disconnect");
        // };
    }, [UserData]);
    useEffect(() => {
        socket && socket.current.on("getMessage", (data) => {
            // alert("comming")
            setNewMessage(data)
        });
    }, []);
    useEffect(() => {
        if (newMessage) {
            gettingMessages();
        }
    }, [newMessage])

    return (
        <>
            <div className="chat_container">
                <MainContainer responsive>
                    <Sidebar position="left" scrollable={true} loading={allConversations == null ? true : false}>
                        <Search placeholder="Search..." />
                        <ConversationList>
                            {
                                allConversations && allConversations.length >= 1 ?
                                    allConversations.map((data) => {
                                        let chatUser = UserData?.role == "admin" ? data.members[0] : data.members[1]
                                        return (
                                            <>
                                                <Conversation name={`${chatUser?.firstName} ${chatUser?.lastName}`} onClick={() => selectConversation(data)} active={selectedChatUser?._id == chatUser?._id ? true : false}>
                                                    <Avatar src={chatUser?.profileImg} name={`${chatUser?.firstName}`} />
                                                </Conversation>
                                            </>
                                        )
                                    })
                                    :
                                    <>
                                        No Conversations
                                    </>
                            }
                        </ConversationList>
                    </Sidebar>

                    <ChatContainer>
                        {
                            selectedConversation ?
                                <ConversationHeader>
                                    <Avatar src={selectedChatUser?.profileImg} />
                                    <ConversationHeader.Content userName={`${selectedChatUser?.firstName} ${selectedChatUser?.lastName}`} info="Active 10 mins ago" />
                                </ConversationHeader>
                                :
                                <ConversationHeader>
                                    <ConversationHeader.Content>
                                        <span style={{
                                            height: "41px"
                                        }}></span>
                                    </ConversationHeader.Content>
                                </ConversationHeader>

                        }
                        <MessageList>
                            {
                                selectedConversation ?
                                    allMessages ?
                                        allMessages.length >= 1 ?
                                            allMessages.map((data) => {
                                                return (
                                                    <>
                                                        <Message model={{
                                                            message: data.text,
                                                            // sentTime: "15 mins ago",
                                                            // sender: "Zoe",
                                                            direction: data.sender == UserData._id ? "outgoing" : "incoming",
                                                            position: "single"
                                                        }} />
                                                    </>
                                                )
                                            })
                                            :
                                            <MessageList.Content style={{
                                                display: "flex",
                                                "flexDirection": "column",
                                                "justifyContent": "center",
                                                alignItems: "center",
                                                height: "100%",
                                                textAlign: "center",
                                                fontSize: "1.2em"
                                            }}>
                                                No Messages Yet
                                            </MessageList.Content>
                                        :
                                        <MessageList.Content style={{
                                            display: "flex",
                                            "flexDirection": "column",
                                            "justifyContent": "center",
                                            alignItems: "center",
                                            height: "100%",
                                            textAlign: "center",
                                            fontSize: "1.2em"
                                        }}>
                                            <Loader />
                                        </MessageList.Content>
                                    :
                                    <MessageList.Content style={{
                                        display: "flex",
                                        "flexDirection": "column",
                                        "justifyContent": "center",
                                        alignItems: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        fontSize: "1.2em"
                                    }}>
                                        <div className="start_chat">
                                            <img src={ChatIcon} alt="" />
                                        </div>
                                        <p>Please Select a Conversation to start Chat</p>
                                    </MessageList.Content>

                            }
                            {/* <MessageSeparator content="Saturday, 30 November 2019" /> */}
                        </MessageList>
                        <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={() => saveMessage()} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </>
    )
}

export default Chat
import React, { useEffect, useState } from "react";
import "./ChatPage.css";
import axios from 'axios';

export default function ChatPage() {
    const [chats, setChats] = useState([]);

    const fetchChats = async() => {
        const {data} = await axios.get('/api/chat');

        setChats(data);
    };
    useEffect(() => {
        fetchChats();
    }, []);

    return(
        <div className="main-container-chatpage">
            {chats.map()}
        </div>
    );
}
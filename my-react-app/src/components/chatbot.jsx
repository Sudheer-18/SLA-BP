import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/chatbot.module.css";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([
        { sender: "bot", text: "Hello! How can I help you?" }
    ]);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        setChatHistory(prev => [...prev, { sender: "user", text: message }]);
        setMessage("");
        setLoading(true);
        setChatHistory(prev => [...prev, { sender: "bot", text: "typing", isLoading: true }]);

        try {
            const response = await axios.post("http://localhost:5001/api/chatbot", {
                topic: message,
            });

            const reply = response.data.response || "Sorry, no response.";

            setChatHistory(prev => [
                ...prev.filter(msg => !msg.isLoading),
                { sender: "bot", text: reply }
            ]);
        } catch (err) {
            console.error("API error:", err);
            setChatHistory(prev => [
                ...prev.filter(msg => !msg.isLoading),
                { sender: "bot", text: "Sorry, I couldn't understand that." }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.chatBox}>
                <div className={styles.messages}>
                    {chatHistory.map((msg, index) => (
                        <p key={index} className={msg.sender === "bot" ? styles.bot : styles.user}>
                            <strong>{msg.sender}:</strong>{" "}
                            {msg.isLoading ? <span className={styles.dots}></span> : msg.text}
                        </p>
                    ))}
                </div>
            </div>
            <div className={styles.inputSection}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    className={styles.input}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                    disabled={loading}
                />
                <button className={styles.sendButton} onClick={handleSubmit} disabled={loading}>
                    {loading ? "..." : "Send"}
                </button>
            </div>
        </div>
    );
};

export default Chatbot;

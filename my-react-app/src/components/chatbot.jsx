import React from "react";
import styles from "../styles/chatbot.module.css";

const Chatbot = () => {
    return (
        <div className={styles.container}>
            <div className={styles.part1}>
                <div className={styles.messages}>
                    <p>Bot: Hello! How can I help you?</p>
                </div>
            </div>
            <div className={styles.part2}>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Type a message..." className={styles.input} />
                    <button className={styles.sendButton}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;

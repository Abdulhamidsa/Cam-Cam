"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Chat.module.scss";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

const Chatbot = () => {
  const [showChat, setShowChat] = useState(true);
  const [allMsgs, setAllMsgs] = useState([]);
  const [quesAnsw, setQuesAnsw] = useState([
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to all EU countires.",
    },
    {
      question: "How can I track my order?",
      answer: "Check your confirmation email where you can fimd a link to track your order!",
    },
    {
      question: "What materials does Cam Cam use?",
      answer: "I'm doing well, thank you!",
    },
    {
      question: "How sustainable is Cam Cam?",
      answer: "I'm doing well, thank you!",
    },
  ]);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (allMsgs.length === 0) {
      setAllMsgs([{ sender: "Cam Cam Chatbot", content: "Hey there, how can I help you?" }]);
    } else if (allMsgs.length === 1) {
      setAllMsgs((prevAllMsgs) => [...prevAllMsgs, { options: quesAnsw.map((qa) => qa.question) }]);
    }

    // Scroll chat container to the bottom
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [showChat, allMsgs, quesAnsw]);

  const handleToggleChat = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };

  const handleOptionClick = (option) => {
    setAllMsgs((prevAllMsgs) => [...prevAllMsgs, { sender: "User", content: option }, { sender: "Chatbot", content: getAnswerByQuestion(option) }]);
  };

  const getAnswerByQuestion = (question) => {
    const matchedPair = quesAnsw.find((pair) => pair.question === question);
    return matchedPair ? matchedPair.answer : "Sorry, I don't have an answer to that question.";
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={`${styles.chatBubble} ${showChat ? styles.hidden : ""}`} onClick={handleToggleChat}>
        <Image src={"/chat.svg"} width={50} height={50}></Image>
      </div>
      <div className={`${styles.chatContainer} ${showChat ? "" : styles.hidden}`} ref={chatContainerRef}>
        <div className={styles.allMsgsContainer}>
          <RxCross1 className={styles.excit} onClick={handleToggleChat} />

          {allMsgs.map((msg, index) => (
            <div key={index} className={`${styles.msg} ${msg.sender === "User" ? styles.userallMsgs : styles.chatbotallMsgs}`}>
              <span className={styles.sender}>{msg.sender}</span>
              {msg.content && <p className={styles.content}>{msg.content}</p>}{" "}
              {msg.options && (
                <div className={styles.optionsContainer}>
                  {msg.options.map((option, optionIndex) => (
                    <span key={optionIndex} className={styles.optionButton} onClick={() => handleOptionClick(option)}>
                      {option}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <form className={styles.inputContainer}>
          <input type="text" name="userInput" className={styles.input} placeholder="Type a message..." />
          <button type="submit" className={styles.sendButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;

// const handleSendMsg = (event) => {
//   event.preventDefault();
//   const userInput = event.target.elements.userInput.value.trim();
//   event.target.elements.userInput.value = "";

//   if (allMsgs.length === 0) {
//     setAllMsgs([
//       { sender: "Chatbot", content: "Welcome! How can I assist you today?" },
//       { sender: "Options", options: quesAnsw.map((qa) => qa.question) },
//     ]);
//   } else {
//     const matchedPair = quesAnsw.find((pair) => pair.question === userInput);
//     if (matchedPair) {
//       setAllMsgs((prevAllMsgs) => [...prevAllMsgs, { sender: "User", content: userInput }, { sender: "Chatbot", content: matchedPair.answer }, { sender: "hoiii", options: ["Was that helpful?", "Contact customer service"] }]);
//     } else {
//       setAllMsgs((prevAllMsgs) => [...prevAllMsgs, { sender: "User", content: userInput }, { sender: "Chatbot", content: "Sorry, I don't have an answer to that question." }, { sender: "hiiii", options: ["Contact customer service"] }]);
//     }
//   }
// };

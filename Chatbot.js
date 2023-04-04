let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You", "Is Your problem Solved", "How are you?", "whatsup", "May I know your query", "Please give me feedback"];

let btnElement = document.getElementById("sendMsgBtn");
let msgElement = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");

function send() {
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-to-chatbot-container");
    let msg = document.createElement("span");
    msg.textContent = msgElement.value;
    msg.classList.add("msg-to-chatbot");
    msgContainer.appendChild(msg);
    chatContainer.appendChild(msgContainer);
}

function getReply() {
    let rmsgContainer = document.createElement("div");
    rmsgContainer.classList.add("msg-from-chatbot-container");
    let msg = document.createElement("span");
    let number = Math.ceil(Math.random() * chatbotMsgList.length - 1);
    msg.textContent = chatbotMsgList[number];
    msg.classList.add("msg-from-chatbot");
    rmsgContainer.appendChild(msg);
    chatContainer.appendChild(rmsgContainer);
}

btnElement.onclick = function() {
    if (msgElement.value === "") {
        alert("Enter Text");
        return;
    } else {
        send();
    }
    msgElement.value = "";
    getReply();
}

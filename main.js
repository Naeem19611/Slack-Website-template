const generalTagLink = document.getElementById("generalTag");
const randomTagLink = document.getElementById("randomTag");
const h1Tag = document.getElementById("heading");
const pTag = document.getElementById("paragraph");
const lbTag = document.getElementById("leftBottomTag");
const topTag = document.getElementById("rightTopTag");
const jTag = document.getElementById("joinedTag");
const txTag = document.getElementById("textTag");
const j1Tag = document.getElementById("joined1Tag");
const channelTag = document.getElementById("addChannel");

// Add click event listener to the "Random" <a> tag
document.getElementById("randomTag").addEventListener("click", () => {
    // Get the new content you want to set for the <h1> and <span> tags (random example)
          const newHeadingContent = `<i class="fa-solid fa-face-kiss-wink-heart" id="giftIcon"></i> You’ve found the # random channel`;
          const newParagraphContent = `This channel is for... well, everything else. It’s a place for team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild! <a href="#">Edit Description</a>`;
          const newLeftBottomContent = ` <a href="#" ># random<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newRightTopContent = `<a href="#"># random<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newJoined1Tag = `<span class="c-message-sender" id="joinedTag" >naeem.mizan143</span>`;
          const newJoinedSpanTag = `<span class="c-message-body">joined # random.</span>`;
          const newInputTextContent = `<input type="text" id="message-input" name="message" placeholder="Message #random">`;
          // const channelInputContent = `<label for="username">Username:</label>
          // <input type="text" id="username" name="username">`;
  
    // Update the content of the <h1> and <span> tags with the new content
          h1Tag.innerHTML = newHeadingContent;
          pTag.innerHTML = newParagraphContent;
          lbTag.innerHTML = newLeftBottomContent;
          topTag.innerHTML = newRightTopContent;
          jTag.innerHTML = newJoinedSpanTag;
          txTag.innerHTML = newInputTextContent;
          j1Tag.innerHTML = newJoined1Tag;
          channelTag.textContent = channelInputContent;
  });

  // Add click event listener to the "general" <a> tag
document.getElementById("generalTag").addEventListener("click", () => {
    // Get the new content you want to set for the <h1> and <span> tags (random example)
          const newHeadingContent = `<i class="fa-solid fa-gift" id="giftIcon"></i> You’re looking at the # general channel`;
          const newParagraphContent = `This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations. <a href="#">Edit Description</a>`;
          const newLeftBottomContent = ` <a href="#" ># general<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newRightTopContent = `<a href="#"># general<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newJoinedSpanTag = `<span class="c-message-body">joined # general.</span>`;
          const newInputTextContent = `<input type="text" name="message" id="message-input" placeholder="Message #general">`;
  

    // Update the content of the <h1> and <span> tags with the new content
          h1Tag.innerHTML = newHeadingContent;
          pTag.innerHTML = newParagraphContent;
          lbTag.innerHTML = newLeftBottomContent;
          topTag.innerHTML = newRightTopContent;
          jTag.innerHTML = newJoinedSpanTag;
          txTag.innerHTML = newInputTextContent;
  });

//    // Add click event listener to the "pTag" <a> tag

//   //Send Message Area 

//   let currentTag = 'general';
  

// function switchTag(tag) {
//     currentTag = tag;
//     // const generalMessages = document.getElementById('generalTag');
//     // const randomMessages = document.getElementById('randomTag');

//     //         if (currentTag === 'general') {
//     //             generalMessages.style.display = 'block';
//     //             randomMessages.style.display = 'none';
//     //         } else {
//     //             generalMessages.style.display = 'none';
//     //             randomMessages.style.display = 'block';
//     //         }

// }

// function sendMessage() {
//     const messageInput = document.getElementById('message-input');
//     const messageDisplay = document.getElementById('message-display');
    
//     const message = messageInput.value;
//     if (message.trim() !== '') {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('message');

//         const timestamp = new Date().toLocaleTimeString(); // Get local timestamp
//         messageElement.innerHTML = `<img id="avatar" src="images/Naeem12.jpg"  class="right-img" alt=""> <span class="c-message-sender" id="joinedTag" >naeem.mizan143</span> <div class="timestamp">${timestamp}</div><div class="message-content">${message}</div>`;

//         if (currentTag === 'random') {
//             messageElement.classList.add('random-tag-message');
//         }

//         // Insert the new message at the top of the message display
//         messageDisplay.insertBefore(messageElement, messageDisplay.firstChild);


//         messageInput.value = ''; // Clear the input
//     }
// }

let activeTag = "general"; // Store the active tag
    
document.addEventListener("DOMContentLoaded", function() {
  
    const messageHistories = {
      general: [],
      random: []
    };
    messageHistories[activeTag]
    messageHistories[activeTag] = readFromLocalStorage(activeTag);
    // refreshMessageContainer();
    
    const general = document.getElementById("generalTag");
    const random = document.getElementById("randomTag");
    let inputBox = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const messageContainer = document.getElementById("messageContainer");
    const timezoneSpan = document.getElementById("timezone");

    displayMessages(messageHistories[activeTag]);
  
    general.addEventListener("click", function(event) {
      event.preventDefault();
      activatedTag("general");
    });
  
    random.addEventListener("click", function(event) {
      event.preventDefault();
      activatedTag("random");
    });
  
    sendButton.addEventListener("click", sendMessage);
    inputBox.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  
    function activatedTag(tag) {
      activeTag = tag;

      refreshMessageContainer();
      inputBox = document.getElementById("message-input");
      inputBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          sendMessage();
        }
      });

      if(messageHistories[activeTag].length == 0){
        messageHistories[activeTag] = readFromLocalStorage(activeTag);
      }
      displayMessages(messageHistories[tag]);
      // saveToLocalStorage('activeTag', activeTag);
      
    }
  
    function sendMessage() {
      //inputBox = document.getElementById("message-input");
      const messageText = inputBox.value;
      if (messageText.trim() !== "") {
        messageHistories[activeTag].push(messageText);
        let index = messageHistories[activeTag].length-1;
        displayMessage(index, messageText);
        inputBox.value = ""; // Clear the input box

        saveToLocalStorage(activeTag, messageHistories);
        
      }
    }

    // Function to save data to local storage
  function saveToLocalStorage(activeTag, messageHistories) {
    localStorage.setItem(activeTag, JSON.stringify(messageHistories[activeTag]));
    }

    //Read data to Local Storage
    function readFromLocalStorage(activeTag) {
      let histories = localStorage.getItem(activeTag);
      debugger;
      if(histories){
         return JSON.parse(histories);
      }
      return [];
    }

   //remove to data to local storage 
   function removeFromLocalStorage(activeTag) {
    localStorage.removeItem(activeTag);
    }

// Function to clear all data from local storage
    function clearLocalStorage() {
      localStorage.clear();
    }

    
     

  
    function refreshMessageContainer() {
      messageContainer.innerHTML = ""; // Clear existing messages
    }

    function displayMessages(messages) {
      let index = 0;
      for (const message of messages) {
        displayMessage(index, message);
        index++;
      }
    }

    function displayMessage(index, text) {
      const messageDiv = document.createElement("div");
      messageDiv.id = index;
      messageDiv.className = "c-message-kit-guiter";
      const now = new Date();
      const timeString = now.toLocaleTimeString(timezoneSpan);
      messageDiv.innerHTML = `
        <div class="c-message-kit-guiter-left">
          <img id="avatar" src="images/Naeem12.jpg" class="right-img" alt="">
        </div>
        <div class="c-message-kit-guiter-right">
          <span class="c-message-sender">naeem.mizan143</span>
          <span style="color:#c3c0c0; font-size:14px"> ${timeString}</span> <br>
          <span class="c-message-body">${text}</span>
        </div>
        
        <span class="delete-option" style="color:#d63031; cursor:pointer;margin-left:5px"  onclick="deleteMessage(this)">Delete</span>
      `;

      function removeFromMessageHistory(activeTag, indexToRemove){
        messageHistories[activeTag].splice(indexToRemove, 1);
      }
      messageDiv.removeFromHistory = removeFromMessageHistory;
      messageContainer.appendChild(messageDiv);

    }

   
  });

  
  function deleteMessage(deleteOption) {
    const messageDiv = deleteOption.closest(".c-message-kit-guiter");
    if (messageDiv) {
      let index = messageDiv.id;
      messageDiv.removeFromHistory(activeTag, index);
      messageDiv.remove();
      
      //saveToLocalStorage(activeTag);
    }
  }


  




  

// window.addEventListener("scroll", function(){
//     let main = document.querySelector(".main");
//     main.classList.toggle("sticky",window.scrollY > 0) ;
// })

// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");
// const sign_in_btn2 = document.querySelector("#sign-in-btn2");
// const sign_up_btn2 = document.querySelector("#sign-up-btn2");

//     sign_up_btn.addEventListener("click", () => {
//         container.classList.add("sign-up-mode");
//     });

//         sign_in_btn.addEventListener("click", () => {
//             container.classList.remove("sign-up-mode");
//         });
        
//     sign_up_btn2.addEventListener("click", () => {
//         container.classList.add("sign-up-mode2");
//     });

//     sign_in_btn2.addEventListener("click", () => {
//         container.classList.remove("sign-in-mode2");
//     });
        

//     //set timezone

//     function setDynamicTimezone() {
//         var date = new Date(); // Get the current date and time
//         var timezoneOffset = date.getTimezoneOffset() / 60; // Calculate the timezone offset in hours
//         var timezone = (timezoneOffset > 0 ? '-' : '+') + Math.abs(timezoneOffset); // Format the timezone offset
  
//         // Set the timezone value to a cookie or local storage for server-side processing
//         document.cookie = 'timezone=' + timezone;
  
//         // Display the timezone offset to the user
//         document.getElementById('timezone').textContent = timezone;
//     }

    
  
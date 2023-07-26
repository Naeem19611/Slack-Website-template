const generalTagLink = document.getElementById("generalTag");
const randomTagLink = document.getElementById("randomTag");
const h1Tag = document.getElementById("heading");
const pTag = document.getElementById("paragraph");
const lbTag = document.getElementById("leftBottomTag");
const topTag = document.getElementById("rightTopTag");
const jTag = document.getElementById("joinedTag");
const txTag = document.getElementById("textTag");

// Add click event listener to the "Random" <a> tag
document.getElementById("randomTag").addEventListener("click", () => {
    // Get the new content you want to set for the <h1> and <span> tags (random example)
          const newHeadingContent = `<i class="fa-solid fa-face-kiss-wink-heart" id="giftIcon"></i> You’ve found the # random channel`;
          const newParagraphContent = `This channel is for... well, everything else. It’s a place for team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild! <a href="#">Edit Description</a>`;
          const newLeftBottomContent = ` <a href="#" ># random<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newRightTopContent = `<a href="#"># random<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newJoinedSpanTag = `<span class="c-message-body">joined # random.</span>`;
          const newInputTextContent = `<input type="text" name="message" placeholder="Message #random">`;
  
    // Update the content of the <h1> and <span> tags with the new content
          h1Tag.innerHTML = newHeadingContent;
          pTag.innerHTML = newParagraphContent;
          lbTag.innerHTML = newLeftBottomContent;
          topTag.innerHTML = newRightTopContent;
          jTag.innerHTML = newJoinedSpanTag;
          txTag.innerHTML = newInputTextContent;
  });

  // Add click event listener to the "general" <a> tag
document.getElementById("generalTag").addEventListener("click", () => {
    // Get the new content you want to set for the <h1> and <span> tags (random example)
          const newHeadingContent = `<i class="fa-solid fa-gift" id="giftIcon"></i> You’re looking at the # general channel`;
          const newParagraphContent = `This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations. <a href="#">Edit Description</a>`;
          const newLeftBottomContent = ` <a href="#" ># general<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newRightTopContent = `<a href="#"># general<i class="fa-solid fa-chevron-down" id="arrow-down"></i></a>`;
          const newJoinedSpanTag = `<span class="c-message-body">joined # general.</span>`;
          const newInputTextContent = `<input type="text" name="message" placeholder="Message #general">`;
  

    // Update the content of the <h1> and <span> tags with the new content
          h1Tag.innerHTML = newHeadingContent;
          pTag.innerHTML = newParagraphContent;
          lbTag.innerHTML = newLeftBottomContent;
          topTag.innerHTML = newRightTopContent;
          jTag.innerHTML = newJoinedSpanTag;
          txTag.innerHTML = newInputTextContent;
  });

   // Add click event listener to the "pTag" <a> tag

  






















window.addEventListener("scroll", function(){
    let main = document.querySelector(".main");
    main.classList.toggle("sticky",window.scrollY > 0) ;
})

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
        
    sign_up_btn2.addEventListener("click", () => {
        container.classList.add("sign-up-mode2");
    });

    sign_in_btn2.addEventListener("click", () => {
        container.classList.remove("sign-in-mode2");
    });
        

    //set timezone

    function setDynamicTimezone() {
        var date = new Date(); // Get the current date and time
        var timezoneOffset = date.getTimezoneOffset() / 60; // Calculate the timezone offset in hours
        var timezone = (timezoneOffset > 0 ? '-' : '+') + Math.abs(timezoneOffset); // Format the timezone offset
  
        // Set the timezone value to a cookie or local storage for server-side processing
        document.cookie = 'timezone=' + timezone;
  
        // Display the timezone offset to the user
        document.getElementById('timezone').textContent = timezone;
    }

    
  
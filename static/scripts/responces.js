function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }  
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    }  else if  (input == "Who I'm??") {
        return "I am Naeem!";
    }  else if  (input == "how are you?") {
        return "I am Fine and You?";
    }  else if (input == "what is slack?") {
        return "Slack is a messaging app for business that connects people to the information they need.!";
    } else if  (input == "goodbye") {
        return "Talk you later!";
    } else {
        return "Try asking something else!";
    }
}
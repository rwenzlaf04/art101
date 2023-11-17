// index.js - Javascript for the Web
// Author: Ruby Wenzlaff
// Date: 17 November, 2023

function generateRandomText() {
  const text = "Hey babe, how was your day. It was alright I ran into a evil sorcerer on my home from work. From under the hood of his tattered brown poncho, his face was distressed, twisted up in knots like the old oak tree in my parents' backyard. He told me that he'd come from the ginger bread house, the one in the woods, the one with glistening gum drops lining the walls and the foot path made of hard candy stones. Only the house wasn't the same as it used to be. The girl who lived in the house was always asleep, and one day not long ago, she woke up. As she was waking up her dad was leaving the house. He blew her a kiss, and the walls of the candy house came falling down. She was walking in a crowded city, like New York City. She tried to talk to the people all around her, but the people were made of paper and they all blew away. Oh, that's nice babe. Im making chicken for dinner.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();

  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});



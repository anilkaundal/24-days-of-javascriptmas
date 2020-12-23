/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!
*/

const textarea = document.getElementById("string");
const counterFotter = document.getElementById("counterFooter");
const tweetBtn = document.getElementById("btn");

const maxWidth = 140;
const twwetUrl = "https://twitter.com/intent/tweet?text=";

tweetBtn.addEventListener("click", () => {
  const areaText = textarea.value;
  if (areaText.length) {
    location.href = `${twwetUrl}${areaText}`;
  }
});

textarea.addEventListener("input", handleTextarea);

function handleTextarea(event) {
  const value = event.target.value;
  lengthCounter(value);
}

function lengthCounter(text) {
  const textLength = text.length;
  const remainingLen = maxWidth - textLength;

  if (tweetBtn.className.includes("buttonDisabled")) {
    tweetBtn.classList.remove("buttonDisabled");
    tweetBtn.disabled = false;
  }
  if (remainingLen <= 20) {
    counterFotter.style.color = "red";
  } else {
    counterFotter.style.color = "#3d3d3d";
  }

  if (remainingLen < 0) {
    tweetBtn.classList.add("buttonDisabled");
    tweetBtn.disabled = true;
  }
  counterFotter.textContent = `${remainingLen}/${maxWidth}`;
}

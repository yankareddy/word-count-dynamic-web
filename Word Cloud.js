let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let addBtnEl = document.getElementById("addBtn");
let errorMsg = "Please enter a word";

function createAndAddWordToWordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordEl.classList.add("m-3");
    wordsContainerEl.appendChild(wordEl);
}

for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

addBtnEl.onclick = function() {
    let userEnterdWord = userInputEl.value;
    if (userEnterdWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEnterdWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}
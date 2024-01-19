// Get all the Element
let refresh = document.querySelector("#refresh");
let author = document.querySelector("#author");
let adviceNo = document.querySelector("#advice");
let adviceMsg = document.querySelector("#message");
let remaining = document.querySelector("#remaining");
let currentScore = document.querySelector("#currentScore");
let totalScore = document.querySelector("#totalScore");
let img = document.querySelector("img");
let btn = document.querySelector("button");

// Get the User Name
let getUserName = prompt("Please Enter Your Name");
// Declare empty total Score
let total = 0;
let attempt = 6;

// Make a function on Button Element
btn.addEventListener("click", function () {
  let randomNumGenerate = Math.trunc(Math.random() * 6) + 1;
  img.src = `images/dice-${randomNumGenerate}.png`;
  img.style.transform = `rotate(360deg)`;

  setTimeout(() => {
    img.style.transform = `rotate(0deg)`;
  }, 300);

  adviceNo.innerHTML = randomNumGenerate;
  currentScore.innerHTML = randomNumGenerate;
  total += randomNumGenerate;
  totalScore.innerHTML = total;

  attempt--;
  remaining.innerHTML = attempt;

  if (attempt < 1 && total != 25) {
    btn.disabled = true;
    setTimeout(failGame, 1000);
  }

  if (total >= 25) {
    btn.disabled = true;
    setTimeout(winGame, 1000);
  }

  if (randomNumGenerate == 1) {
    adviceMsg.innerHTML = `The best way to predict the future is to invent it.`;
    author.innerHTML = `-- Alan Kay --`;
  } else if (randomNumGenerate == 2) {
    adviceMsg.innerHTML = `Your most unhappy customers are your greatest source of learning.`;
    author.innerHTML = `-- Bill Gates --`;
  } else if (randomNumGenerate == 3) {
    adviceMsg.innerHTML = `Code is like humor. When you have to explain it, it’s bad.`;
    author.innerHTML = `-- Cory House --`;
  } else if (randomNumGenerate == 4) {
    adviceMsg.innerHTML = `Programs must be written for people to read, and only incidentally for machines to execute.`;
    author.innerHTML = `-- Harold Abelson --`;
  } else if (randomNumGenerate == 5) {
    adviceMsg.innerHTML = `The only way to do great work is to love what you do.`;
    author.innerHTML = `-- Steve Jobs --`;
  } else if (randomNumGenerate == 6) {
    adviceMsg.innerHTML = `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`;
    author.innerHTML = `-- Martin Fowler --`;
  }
});

// Function to Stop the Game if your failed
function failGame() {
  adviceNo.innerHTML = "0";
  adviceMsg.innerHTML = `"OOP's You'r Failed 😢 ${getUserName}" <br>
                                "Refresh the Game and Try You'r luck Next time 😍"`;
  author.textContent = `-- 😰😰😰 --`;
}

//  Function for winning the Game
function winGame() {
  adviceNo.innerHTML = "0";
  adviceMsg.innerHTML = `Congratulations! 🎉 ${getUserName} <br>
        You've won the game! 🏆 Refresh the Game and Try Your Luck Again! 😍`;
  author.textContent = `-- 🏆🥇🏆 --`;
}

//  Function for Refresh the Game
refresh.addEventListener("click", function () {
  img.src = `images/dice-1.png`;
  adviceNo.innerHTML = "0";
  currentScore.innerHTML = "00";
  totalScore.innerHTML = "00";
  total = 0;
  attempt = 6;
  adviceMsg.textContent = `It's time to check your luck! <br>You have total 6 attempts to win the game! You have to make 25 Score!`;
  author.textContent = `-- Click the below Image --`;
  btn.disabled = false;
});

window.onload = pageReady;

function pageReady() {
  // handles & variables
  let btn = document.querySelector("#submit");
  let btnReload = document.querySelector("#reload-btn");
  let answerBoard = document.querySelector("#answer-area");
  let question = document.querySelector("#question");
  let questionLabel = document.querySelector("#question-label");
  let year = document.querySelector("#year");
  let errorMsg = "Please enter a valid question!";
  let regularLabel = "Ask the Magic 8 Ball a (yes or no) question:";
  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];
  let answer;
  let randomNum;

  // focus on question input on page load
  question.focus();

  // get year for copyright in footer
  let newDate = new Date();
  let currentYr = newDate.getFullYear();
  if (currentYr > 2023) {
    year.innerHTML = `2023 &ndash; ${currentYr}`;
  } else {
    year.innerHTML = currentYr;
  }

  // eightBall function
  function eightBall() {
    // validate question input
    if (!question.value) {
      questionLabel.innerHTML = errorMsg;
      questionLabel.classList.add("red");
      return false;
    } else {
      questionLabel.innerHTML = regularLabel;
      questionLabel.classList.remove("red");

      // add "?" at end of question if missing
      if (question.value.indexOf("?") === -1) {
        question.value = question.value + "?";
      }

      // capitalize first letter of question
      question.value = question.value.charAt(0).toUpperCase() + question.value.slice(1);

      // capitalize " i "
      if (question.value.indexOf(" i ") !== -1) {
        question.value = question.value.replace(/ i /g, " I ");
      }

      // generate randomNum value
      randomNum = Math.floor(Math.random() * answers.length);
      // generate eightBall response based on answers arr and randomNum
      answer = answers[randomNum];
      // generate next card
      let newCard =
        `<div class="card fade-in">
          <p class="question">${question.value}</p>
          <p class="answer">${answer}</p>
        </div>`;
      answerBoard.innerHTML = newCard;
      // clear quesiton input
      question.value = "";
      // focus on question input
      question.focus();
      // prevent form submit
      return false;
    }
  }
  // event listener
  // click on button
  btn.onclick = eightBall;

  // reload btn
  btnReload.onclick = () => {
    location.reload();
    return false;
  }
}

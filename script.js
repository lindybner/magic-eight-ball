window.onload = pageReady;

function pageReady() {
  // handles & variables
  let btn = document.querySelector("#submit");
  let answerBoard = document.querySelector("#answer-area");
  let question = document.querySelector("#question");
  let questionLabel = document.querySelector("#question-label");
  let year = document.querySelector("#year");
  let errorMsg = "Please enter a valid question!";
  let regularLabel = "Ask the Magic Eight Ball a (yes or no) question:";
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
  let date = new Date();
  year.innerHTML = date.getFullYear();

  // eightBall function
  function eightBall(event) {
    // validate question input
    if (!question.value) {
      questionLabel.innerHTML = errorMsg;
      questionLabel.classList.add("red");
      event.preventDefault();
    } else {
      questionLabel.innerHTML = regularLabel;
      questionLabel.classList.remove("red");

      // generate randomNum value
      randomNum = Math.floor(Math.random() * answers.length);
      // generate eightBall response based on answers arr and randomNum
      answer = answers[randomNum];
      // generate next card
      let newCard = `<div class="card fade-in"><p class="question">Q: ${question.value}</p><p class="answer">A: ${answer}</p></div>`;
      answerBoard.innerHTML = newCard + answerBoard.innerHTML;
      // clear quesiton input
      question.value = "";
      // focus on question input
      question.focus();
      // prevent form submit
      event.preventDefault();
    }
  }
  // event listener - click on button
  btn.addEventListener("click", eightBall);
}

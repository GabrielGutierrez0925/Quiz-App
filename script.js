const questions = [
    {
      question:"What car brand sold the most cars in 2022?",
      answers: [
          {text:"Toyota", correct: false},
          {text:"Honda", correct: false},
          {text:"Chevrolet", correct: false},
          {text:"Ford", correct: true},
      ]
    },
    {
      question:"Who won the World Cup in 2022?",
      answers: [
          {text:"Germany", correct: false},
          {text:"Argentina", correct: true},
          {text:"Mexico", correct: false},
          {text:"United States", correct: false},
      ]
    },
    {
      question:"Who is the writer of the manga 'One Piece'?",
      answers: [
          {text:"Masashi Kishimoto", correct: false},
          {text:"Hajime Isayama", correct: false},
          {text:"Eiichiro Oda", correct: true},
          {text:"Gege Akutami", correct: false},
      ]
    },
    {
      question:"Who is the main character of One Piece?",
      answers: [
          {text:"Roronoa Zoro", correct: false},
          {text:"Nico Robin", correct: false},
          {text:"Rob Lucci", correct: false},
          {text:"Monkey D. Luffy", correct: true},
      ]
    },
    {
      question:"What is 100 divided by 10?",
      answers: [
          {text:"23", correct: false},
          {text:"10", correct: true},
          {text:"11", correct: false},
          {text:"50", correct: false},
      ]
    },
    {
      question:"Who is the lead singer in the band Queen?",
      answers: [
          {text:"Freddie Mercury", correct: true},
          {text:"Bon Jovi", correct: false},
          {text:"Lil Durk", correct: false},
          {text:"Blake Shelton", correct: false},
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML = "Next";
    timeLeft = 60;
    showQuestions();
  }
  
  function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct
      }
      button.addEventListener("click", selectAnswer)
    });
  }
  
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
      timeLeft = timeLeft - 10
        }
        Array.from(answerButtons.children).forEach(button => {
          if(button.dataset.correct === "true"){
            button.classList.add("correct");
          }
          button.disabled = true;
        });
        nextButton.style.display = "block";
    }
  
    function showScore(){
      resetState();
      questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
    }
  
    function handelNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex < questions.length){
        showQuestions();
      }else{
        showScore();
      }
  
    }
  
  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      handelNextButton();
    }else{
      startQuiz();
    }
  });
  startQuiz();
  
  var timeLeft = 60;
  
  function startTimer () {
      var timerH3 = document.querySelector("#timer");
  
      setInterval(function() {
        timerH3.textContent = timeLeft;
        timeLeft = timeLeft - 1;
      }, 1000)
  }
  
  function begin(){
    // make the quiz appear
    var quizDiv = document.querySelector(".quiz") ;
  
    quizDiv.style.display = "block";
  
    // start the timer
    startTimer();
  }
  
  var startButton = document.querySelector("button")
  startButton.addEventListener("click", begin)
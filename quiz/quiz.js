(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1. Hans?? beyn??lxalq m??qavil?? u??aqlar??n h??quqlar??n?? qoruyur?",
      answers: {
        A: "Waitangi m??qavil??si",
        B: "U??aq H??quqlar?? haqq??nda Birl????mi?? Mill??tl??r Konvensiyas??",
        C: "??qlim D??yi??ikliyi ??zr?? Birl????mi?? Mill??tl??r T????kilat??n??n ????r??iv?? Konvensiyas??",
        D: "??mumd??nya ??nsan H??quqlar?? B??yannam??si",
      },
      correctAnswer: "A",
    },

    {
      question: "2. U??aq h??quqlar?? ya??l?? olan h??r k??s?? ??amil edilir...",
      answers: {
        A: "16 ya??dan a??a????",
        B: "10 ya??a q??d??r",
        C: "18 ya??dan a??a????",
        D: "25 ya??dan a??a????",
      },
      correctAnswer: "C",
    },
    {
      question: "3. Bunlardan hans?? h??quq deyil?",
      answers: {
        A: "Ail??nizin m??d??niyy??tini t??tbiq etm??k",
        B: "??z dilinizd?? dan????maq",
        C: "Dinin?? ??m??l etm??k",
        D: "??st??diyini geyinm??k",
      },
      correctAnswer: "D",
    },

    {
      question: "4. Sizin ... ya??amaq h??ququnuz var.",
      answers: {
        A: "B??y??k evd??",
        B: "T??hl??k??siz v?? t??miz evd??",
        C: "Hovuzlu evd??",
        D: "??z yataq ota????n??zla evd??",
      },
      correctAnswer: "B",
    },

    {
      question: "5. H??quqlar??n??z?? ??yr??nm??k sizin h??ququnuzdur.",
      answers: {
        A: "Do??rudur",
        B: "Yanl????",
      },
      correctAnswer: "A",
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

let form = document.getElementById("quiz");
let questions = document.querySelectorAll("fieldset");
let modal = document.getElementById("myModal");
let modalClose = document.getElementById("close");
let fit = document.getElementById("fit");
let slight = document.getElementById("slight");
let pysc = document.getElementById("psyc");
let major = document.getElementById("major");
let answer = {};

function modalReset() {
  modal.style.display = "none";
  fit.style.display = "none";
  slight.style.display = "none";
  pysc.style.display = "none";
  major.style.display = "none";
}
function clearResult() {
  modalReset();
  form.reset();
}
function evaluateAnswer(result) {
  if (result >= 5 && result <= 7) {
    fit.style.display = "block";
    return;
  }

  if (result >= 8 && result <= 12) {
    slight.style.display = "block";
    return;
  }

  if (result >= 13 && result <= 17) {
    pysc.style.display = "block";
    return;
  }

  if (result >= 18 && result <= 20) {
    major.style.display = "block";
    return;
  }
}

function giveAdvice() {}
//submitting the test form
form.addEventListener("submit", e => {
  e.preventDefault();
  let result = Object.values(answer).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  modalReset();
  evaluateAnswer(result);
  modal.style.display = "block";
});

//getting the value on change of an event
questions.forEach(question => {
  question.addEventListener("change", e => {
    answer[e.target.name] = +e.target.value;
  });
});

modalClose.addEventListener("click", e => {
  clearResult();
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    clearResult();
  }
});

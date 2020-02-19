let form = document.getElementById("quiz");
let questions;
let modal = document.getElementById("myModal");
let modalClose = document.getElementById("close");
let modalClose2 = document.getElementById("close2");
let fit = document.getElementById("fit");
let slight = document.getElementById("slight");
let pysc = document.getElementById("psyc");
let major = document.getElementById("major");
let allquestion = document.querySelector("#allquestions");
let answer = {};

let button = document.querySelector("#formButton");

console.log(questions);

questionsPools = [
  "Do you have trouble falling or staying asleep, or sleeping too much",
  "Do you have poor appetite or do you overeat",
  "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
  "Do you have poor appetite or do you overeat",
  "Do you have poor appetite or do you overeat",
  "Do you have little interest or pleasure in doing things",
  "Do you Feel down, depressed, or hopeless",
  "Do you Feel tired or having little energy",
  "Do you Feel bad about yourself - or that you are a failure or have let yourself or your family down",
  "Do move or speak so slowly that other people could have noticed"
];

function modalReset() {
  // modal.style.display = "none";
  fit.style.display = "none";
  slight.style.display = "none";
  pysc.style.display = "none";
  major.style.display = "none";
}
function clearResult() {
  modalReset();
  form.reset();
  button.removeAttribute("data-toggle");
  button.removeAttribute("data-target");
}
function evaluateAnswer(result) {
  if (result >= 10 && result <= 15) {
    fit.style.display = "block";
    return;
  }

  if (result >= 16 && result <= 25) {
    slight.style.display = "block";
    return;
  }

  if (result >= 26 && result <= 35) {
    pysc.style.display = "block";
    return;
  }

  if (result >= 35 && result <= 40) {
    major.style.display = "block";
    return;
  }
}

function giveAdvice() {}
//submitting the test form
form.addEventListener("submit", e => {
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#exampleModalCenter");
  e.preventDefault();
  let result = Object.values(answer).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(result);
  modalReset();
  evaluateAnswer(result);
  // modal.style.display = "block";
});

//getting the value on change of an event
// questions.forEach(question => {
//   question.addEventListener("change", e => {
//     answer[e.target.name] = +e.target.value;
//   });
// });

modalClose.addEventListener("click", e => {
  clearResult();
});
modalClose2.addEventListener("click", e => {
  clearResult();
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    clearResult();
  }
});

window.addEventListener("load", () => {
  allquestion.innerHTML = questionsPools.map((quest, i) => {
    let ind = i + 1;
    return `<fieldset class="fieldset" name="q${ind}" >
    <h5 class="card-title">${ind}. ${quest}?</h5>
<div class="custom-control custom-radio">
   <input class="custom-control-input" type="radio" name="q${ind}" id="q${ind}1" value="1" required>
   <label class="custom-control-label" for="q${ind}1"><p class="card-text">
   Not at all
   </p>
   </label>
</div>
<div class="custom-control custom-radio">
   <input class="custom-control-input" type="radio" name="q${ind}" id="q${ind}2" value="2">
   <label class="custom-control-label" for="q${ind}2"><p class="card-text">
  Several days
  </p>
   </label>
</div>
<div class="custom-control custom-radio">
   <input class="custom-control-input" type="radio" name="q${ind}" id="q${ind}3" value="3">
   <label class="custom-control-label" for="q${ind}3"><p class="card-text">
   More than half the days
   </p>
   </label>
</div>
<div class="custom-control custom-radio">
   <input class="custom-control-input" type="radio" name="q${ind}" id="q${ind}4" value="4">
   <label class="custom-control-label" for="q${ind}4"><p class="card-text">
   Nearly every day
   </p>
   </label>
            </fieldset>`;
  });

  questions = document.querySelectorAll("fieldset");
  console.log(questions);
  //getting the value on change of an event
  questions.forEach(question => {
    question.addEventListener("change", e => {
      answer[e.target.name] = +e.target.value;
    });
  });
});

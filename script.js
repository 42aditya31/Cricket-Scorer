let runs = 0;
let over = 0;
let ball = 0;
let wicket = 0;

function updateScore() {
  document.getElementById(
    "Score_per_Wicket"
  ).textContent = `Score / Wicket : ${runs} / ${wicket}`;
  document.getElementById("CurrentOver").textContent = `CurrentOver : ${over}`;
  document.getElementById("Ball").textContent = `Ball :  ${over} . ${ball}`;
 
}

document.getElementById("run2").addEventListener("click", () => {
  runs += 2;
  ball += 1;
  updateOverBall();
});
document.getElementById("run1").addEventListener("click", () => {
  runs += 1;
  ball += 1;
  updateOverBall();
});
document.getElementById("run3").addEventListener("click", () => {
  runs += 3;
  ball += 1;
  updateOverBall();
});
document.getElementById("run4").addEventListener("click", () => {
  runs += 4;
  ball += 1;
  updateOverBall();
});
document.getElementById("run6").addEventListener("click", () => {
  runs += 6;
  ball += 1;
  updateOverBall();
});
document.getElementById("dot-ball").addEventListener("click", () => {
  ball += 1;
  updateOverBall();
});
document.getElementById("wicket").addEventListener("click", () => {
  wicket += 1;
  ball += 1;
  updateOverBall();
});
document.getElementById("wide_ball").addEventListener("click", () => {
  runs += 1;
  updateScore();
});
document.getElementById("no_ball").addEventListener("click", () => {
  runs += 1;
  updateScore();
});

function updateOverBall() {
  if (ball == 6) {
    ball = 0;
    over += 1;
  }
  updateScore();
  checkWicketsandOver()
 
  updateScore();
}

function checkWicketsandOver() {
  if (wicket === 10 || over === 4) {
    document
      .getElementById("container")
      .insertAdjacentHTML(
        "beforeend",
        `<p id="myParagraph" >Team score ${runs} in ${over}.${ball} over with the loss of ${wicket} wickets </p>`
      );

    runs = 0;
    over = 0;
    ball = 0;
    wicket = 0;
    
  }
};

  

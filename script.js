let runs = 0;
let over = 0;
let ball = 0;
let wicket = 0;

function updateScore() {
    document.getElementById("Score_per_Wicket").textContent = `Score / Wicket: ${runs} / ${wicket}`;
    document.getElementById("CurrentOver").textContent = `Current Over: ${over}`;
    document.getElementById("Ball").textContent = `Ball: ${over}.${ball}`;
}

document.getElementById("run1").addEventListener("click", () => addScore(1));
document.getElementById("run2").addEventListener("click", () => addScore(2));
document.getElementById("run3").addEventListener("click", () => addScore(3));
document.getElementById("run4").addEventListener("click", () => addScore(4));
document.getElementById("run6").addEventListener("click", () => addScore(6));
document.getElementById("dot-ball").addEventListener("click", () => addBall());
document.getElementById("wicket").addEventListener("click", () => addWicket());
document.getElementById("wide_ball").addEventListener("click", () => addExtra(1));
document.getElementById("no_ball").addEventListener("click", () => addExtra(1));

function addScore(score) {
    runs += score;
    addBall();
}

function addExtra(extra) {
    runs += extra;
    updateScore();
}

function addBall() {
    ball += 1;
    if (ball === 6) {
        ball = 0;
        over += 1;
    }
    checkEndCondition();
    updateScore();
}

function addWicket() {
    wicket += 1;
    addBall();
}

function checkEndCondition() {
    if (wicket === 10 || over === 4) {
        displaySummary();
        resetScoreboard();
    }
}

function displaySummary() {
    const summary = document.createElement("p");
    summary.id = "summary";
    summary.textContent = `Final Score: ${runs} in ${over}.${ball} overs with ${wicket} wickets lost.`;
    document.getElementById("container").appendChild(summary);
}

function resetScoreboard() {
    runs = 0;
    over = 0;
    ball = 0;
    wicket = 0;
    setTimeout(() => {
        document.getElementById("summary").remove();
        updateScore();
    }, 3000);
}

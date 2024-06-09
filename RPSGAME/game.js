let score = 0;

function game(event) {
    event.preventDefault();
    let guess_Number = document.getElementById("guess_Number").value;
    let scoreshow = document.getElementById("score");
    let msg = document.getElementById("msg");
    let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let index = Math.floor(Math.random() * Number.length);
    if (guess_Number == Number[index]) {
        msg.innerHTML = `Correct number: ${Number[index]}`;
        scoreshow.innerHTML = ++score;
    } else {
        msg.innerHTML = `Wrong number ! TRY AGAIN `;
    }
    if (score == 10) {
        document.getElementById('btn').disabled = true;
        alert("Game Over !! ")
    }
}

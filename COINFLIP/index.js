
let HEADS = 0;
let TAILS = 0
function Flip() {

    let toss = ["HEADS", "TAILS"]
    let COIN_toss_rs = Math.floor(Math.random() * toss.length)
    let show = document.getElementById("coin_flip").innerHTML = toss[COIN_toss_rs]
    let show_rs = document.getElementById("show_rs").innerHTML = `You Got ${show} `
    let result = document.getElementById("result")
    let total_flips = document.getElementById("total_flips")
    if (show == "HEADS") {
        HEADS++;
        let h = document.getElementById("result").innerHTML = `HEADS: ${HEADS}, TAILS: ${TAILS}`;
    } else if (show == "TAILS") {
        TAILS++;
        let t = document.getElementById("result").innerHTML = `HEADS: ${HEADS}, TAILS: ${TAILS}`;
    }
    let total = HEADS + TAILS
    total_flips.innerHTML = `  THE TOTAL FLIPS  IS : ${total} `;
    if (total == 20) {
        alert('game over')
        let p = document.getElementById("p").innerHTML = "game over"
        document.getElementById("flipButton").disabled = true;
        let usertarget_HEADS = prompt("ENTER THE TARGET FOR HEADS ")
        let usertarget_TAILS = prompt("ENTER THE TARGET FOR TAILS ")
        if (usertarget_HEADS == usertarget_HEADS)|| usertarget_TAILS == usertarget_TAILS {
            console.log("won")

        }

    }

}


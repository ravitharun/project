function calculate() {
    event.preventDefault()
    let amount = parseInt(document.getElementById("amount").value);
    let tip = document.getElementById("Tip")
    let total_cost = document.getElementById("total_cost")
    let percentage = document.getElementById("percentage").value;
    percentage = percentage / 100;
    let tip_amount = amount * percentage
    tip.innerHTML = "TIP AMOUNT : " + tip_amount
    let total = amount + tip_amount;
    total_cost.innerHTML = "TOTAL AMOUNT : " + total
}
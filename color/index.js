function getcolor() {
    let color = document.getElementById("color").value;
    console.log(color)
    let displayValue = document.getElementById("displayValue")
    displayValue.innerHTML = color
    // color display
    let clr = document.getElementById('colordisplay')
    clr.style.backgroundColor = color

}
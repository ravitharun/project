function show() {
    event.preventDefault();
    let text = document.getElementById("text").value;
    console.log(text);
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            let imgUrl = URL.createObjectURL(blob);
            let img = document.createElement("img");
            img.src = imgUrl;
            document.body.appendChild(img);
            document.getElementById("note").innerHTML = "<i> SCAN IT </i>";
            document.getElementById("impnote").innerHTML =
                "<i>  📝 REFRESH THE PAGE WHILE YOU GOING TO NEXT ONE  </i>";
        });
}
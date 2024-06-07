
function gen() {
    let url = "https://dummyjson.com/quotes/random";

    fetch(url)
        .then((data) => data.json())
        .then((text) => {
            let quoteElement = document.getElementById("quote");
            quoteElement.innerHTML = text.quote;
            let author = document.getElementById("author");
            author.textContent = "Author :" + " " + text.author

        })

}
{/* <script> */ }
const key = 'ig9OpZ8lU94_NlDTRq69DOUGJ9oYXuR_btMgUP0fO08';
let currentPage = 1; // Initialize the current page number


function search() {
    let text = document.getElementById("text").value;
    const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${text}&client_id=${key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let imagesDiv = document.getElementById("images");
            data.results.forEach(result => {

                let img = document.createElement('img');
                img.src = result.urls.regular;
                // document.getElementById("images").innerHTML=""
                imagesDiv.appendChild(img);

            });
            currentPage++;


            // }

        });

}
function load(){
    search()
    document.getElementById("images").innerHTML = "";
}
function prev() {
    event.preventDefault()
    if (currentPage > 1) {
        currentPage--; // Decrement currentPage
        document.getElementById("images").innerHTML = ""; // Clear previous images
        search(); // Call search function for previous page
    } else {
        console.log("You are on the first page.");
        // Optionally, you can provide some feedback to the user indicating they are on the first page.
    }
}



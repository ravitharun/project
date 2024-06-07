
function check() {
    let user = prompt("Enter your GitHub username");
    console.log(user)
    if (user == null) {
        alert("FILL THE GITHUB NAME ")

    }
    else {
        let url = `https://api.github.com/users/${user}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let avatar_url = data.avatar_url;
                let img = document.createElement('img');
                img.src = avatar_url;
                let container = document.getElementById('container');
                container.appendChild(img);

                let link = document.getElementById('click');
                link.href = data.html_url;
                link.innerHTML = link.href;
            })
            .catch(error => console.error('Error fetching data:', error));

    }
}

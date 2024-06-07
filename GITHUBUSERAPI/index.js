function check() {
    let user = prompt("enter your github name");
    let url = `https://api.github.com/users/${user}`
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })

}
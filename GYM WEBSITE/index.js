const http = require('http');
const fs = require('fs');
const home = fs.readFileSync("home.html", "utf-8");
const about = fs.readFileSync("About.html", "utf-8");
// const TEAM = fs.readFileSync("OURTEAM.html", "utf-8");
const membership = fs.readFileSync("membership.html", "utf-8");
const contact = fs.readFileSync("Contact.html", "utf-8");
const ERROR = fs.readFileSync("Error.html", "utf-8");
const notifier = require('node-notifier');

// Basic notification
notifier.notify('Hello, there!');

// Notification with options
notifier.notify({
    title: 'My notification',
    message: 'Hello, there!',
    sound: true, // Only Notification Center or Windows Toasters
    wait: true // Wait with callback, until user action is taken against notification
});
http.createServer(function (req, res) {
    let url = req.url
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (url == "/") {
        res.end(home);
    }
    else if (url == "/about") {
        res.end(about);
    }
    else if (url == "/membership") {
        res.end(membership);
    }
    else if (url == "/contact") {
        res.end(contact);
    }
    else {
        res.end(ERROR)
    }
}).listen(80, '127.0.0.1', () => {
    console.log("Server is listening on http://127.0.0.1:80");
});

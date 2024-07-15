const express = require('express');
const path = require('path');
const app = express();
const User_data = require('./modules/data'); // Ensure you have a correct path to your data module

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log(req.url);
    res.render('index');
});

app.post('/submit', async (req, res) => {
    const Userinfo = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailid: req.body.emailid,
        password: req.body.password,
        currpassword: req.body.currpassword,
        userdateofbirth: req.body.userdateofbirth,
        user_message: req.body.user_message,
    };    
    try {
        await User_data.insertMany([Userinfo]);
        res.render('submited', { user: Userinfo }); // Pass user info to the template if needed
    } catch (error) {
        console.error('Error inserting user data:', error);
        res.status(500).send('An error occurred while saving the data.');
    }
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

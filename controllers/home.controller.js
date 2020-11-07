// [GET] /
module.exports.index = (req, res) => {
    res.render('home');
}

// [GET] /register
module.exports.getRegister = (req, res) => {
    res.render('register');
}

// [POST] /register
module.exports.postRegister = (req, res) => {
    const { email, password } = req.body;

    console.log(email, password)

    res.send('Register POST');
}

// [GET] /login
module.exports.getLogin = (req, res) => {
    res.render('home');
}

// [POST] /login
module.exports.postLogin = (req, res) => {
    const { email, password } = req.body;

    console.log(email, password)

    res.send('Login POST');

}

// [GET] /logout
module.exports.logout = () => {
    res.send('Logout !!!!');
}
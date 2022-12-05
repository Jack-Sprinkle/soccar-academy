const knex = require('knex')(require('../knexfile'))
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {uuid} = require('uuidv4');


//Create a new user
exports.register = async(req, resp) => {
    //Grab user information from client form.
    const {
        user_name, 
        user_email, 
        user_password, 
        epic_id, 
        discord_name, 
        mmr_standard, 
        user_bio, 
        user_coach
    } = req.body;

    //If user did not fill out all required fields and made it through client side validation.
    //reject request
    if (
        !user_name ||
        !user_email ||
        !user_password ||
        !epic_id ||
        !discord_name ||
        !mmr_standard ||
        !user_coach
    ) {
        return resp.status(400).send("Please enter the required fields.")
    }

    //Hash user password for security.
    const hashedPassword = bcrypt.hashSync(user_password);

    //Create the new user with hashed password, so only hashed password is stored in DB
    const newUser = {
        id: uuid(),
        user_name, 
        user_email, 
        user_password: hashedPassword, 
        epic_id, 
        discord_name, 
        mmr_standard, 
        user_bio, 
        user_coach
    }

    //Insert new user into the DB
    try {
        await knex('users').insert(newUser);
        resp.status(201).send("Registered successfully")
    } catch (error) {
        resp.status(400).send("Failed to register")
    }
}

//Login an existing user
exports.login = async(req, resp) => {
    //Grab user password from the body of the request
    const {user_email, user_password} = req.body;

    //Make sure the form fields are filled out
    if(!user_email || !user_password) {
        return resp.status(400).send("Please enter the required fields");
    }

    //Find the user
    const user = await knex('users').where({user_email: user_email}).first()
    if(!user) {
        return resp.status(400).send('Invalid Email')
    }

    //Validate password
    const passwordValidated = bcrypt.compareSync(user_password, user.user_password)
    if(!passwordValidated) {
        return resp.status(400).send("Invalid Password");
    }

    //Generate a JSON Web Token
    const token = jwt.sign(
        {id: user.id, email: user.email},
        process.env.JWT_KEY,
        {expiresIn: "24h"}
    )

    resp.json({token})
}

//Get and verify current user
//This will get information about current logged in user
//If an invalid JWT is provided, the 'authorize' middleware will reject request with 401.
//expected header for request: Authorization: "Bearer JWT_TOKEN"
exports.current = async(req, resp) => {
    const user = await knex('users').where({id: req.user.id}).first()
    delete user.user_password;
    resp.json(user);
}
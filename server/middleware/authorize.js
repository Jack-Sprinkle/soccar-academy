const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, resp, next) => {
    //If there is not an authorization header in request, reject the request
    if(!req.headers.authorization) {
        return resp.status(401).send('Please login');
    }

    //Grab the authorization header
    const authHeader = req.headers.authorization;
    //Split the authorization header and just get the token
    const authToken = authHeader.split(' ')[1];

    //verify the token
    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);

        //Adding the decoded token to the request object for use in future routes
        req.user = decoded
        console.log(decoded)

        //move on to endpoint the client wants to call
        next();
    } catch (error) {
        //Reject request if there is an error verifying
        resp.status(401).send("Invalid auth token")
    }
}
SocCar Academy

- I created SocCar Academy to give Rocket League players a place to learn and chat. A user can track their progress through their dashboard, find other users who are willing to coach through the "Find Coach" page and contribute to a list of forums to grow the community and learn.

- Tech stack: JavaScript, React, Node.js, Express and MySQL for the database.

Overview setup instructions.
- Clone the repo in whichever way you prefer.
- Set up server environment (see specific instructions below).
- Set up client environment (see specific instructions below).

Server setup instructions
1. Cd into the server folder.
2. In the terminal run "npm install".
3. Create a MySQL database either through MySQL workbench or a editor extention you use.
4. Set up your .env file using the sample as a guide. Entering your specific PORT, HOST, DB Name, etc...
5. In the terminal, run the command "npm run migrate". This will migrate all tables necessary.
6. After migrating the tables, we will seed the tables one at a time. In the terminal, run the following commands in order:
    a. npx knex seed:run --specific=users.js
    b. npx knex seed:run --specific=mmr.js
    c. npx knex seed:run --specific=posts.js
    d. npx knex seed:run --specific=comments.js
    Because of the foreign key constraints on MMR, Posts and Comments. Each table must be seeded in this order.
7. Run the command node server.js in your server terminal to start the local server.
8. Move on to setting up the client!

Client setup instructions
1. In another terminal, Cd into the client folder.
2. In the client terminal, run "npm install".
3. Set up your .env file using the sample as a guide. Entering your specific URL for your server allowing Axios calls to occur. 
3. In the client terminal, run "npm start".


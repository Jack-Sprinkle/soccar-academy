const bcrypt = require('bcryptjs');
const {uuid} = require('uuidv4');


//Generate random password for each user
const generatePassword = () => {
    const password = Math.random()
    .toString(36)
    .substring(2)
    const hashedPassword = bcrypt.hashSync(password);
    return hashedPassword;
}



module.exports = [
    {
        id: uuid(),
        user_name: 'User 1',
        user_email: 'user1@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user1',
        discord_name: 'user1',
        mmr_standard: '945',
        user_bio: 'looking forward to getting better!',
        user_coach: 'no'
    },

    {
        id: uuid(),
        user_name: 'User 2',
        user_email: 'user2@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user2',
        discord_name: 'user2',
        mmr_standard: '543',
        user_bio: '',
        user_coach: 'no'
    },

    {
        id: uuid(),
        user_name: 'User 3',
        user_email: 'user3@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user3',
        discord_name: 'user3',
        mmr_standard: '1064',
        user_bio: '',
        user_coach: 'yes'
    },

    {
        id: uuid(),
        user_name: 'User 4',
        user_email: 'user4@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user4',
        discord_name: 'user4',
        mmr_standard: '1345',
        user_bio: 'Lets get it.',
        user_coach: 'yes'
    },

    {
        id: uuid(),
        user_name: 'User 5',
        user_email: 'user5@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user5',
        discord_name: 'user5',
        mmr_standard: '457',
        user_bio: 'Looking for a solid coach to get better. Love the game.',
        user_coach: 'no'
    },

    {
        id: uuid(),
        user_name: 'User 6',
        user_email: 'user6@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user6',
        discord_name: 'user6',
        mmr_standard: '1032',
        user_bio: 'Hard stuck at D3. Need help.',
        user_coach: 'yes'
    },

    {
        id: uuid(),
        user_name: 'User 7',
        user_email: 'user7@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user7',
        discord_name: 'user7',
        mmr_standard: '1281',
        user_bio: '',
        user_coach: 'yes'
    },

    {
        id: uuid(),
        user_name: 'User 8',
        user_email: 'user8@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user8',
        discord_name: 'user8',
        mmr_standard: '301',
        user_bio: 'Silver player, just trying to get better.',
        user_coach: 'no'
    },

    {
        id: uuid(),
        user_name: 'User 9',
        user_email: 'user9@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user9',
        discord_name: 'user9',
        mmr_standard: '203',
        user_bio: 'where do I even start',
        user_coach: 'no'
    }
]
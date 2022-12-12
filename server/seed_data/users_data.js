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
        id: '305f660a-a2cf-43df-9493-5335472c520d',
        user_name: 'User 1',
        user_email: 'user1@gmail.com',
        user_password: generatePassword(),
        epic_id: 'user1',
        discord_name: 'user1',
        mmr_standard: '945',
        user_bio: 'Looking for a coach to take me to the next leve.',
        user_coach: 'no'
    },

    {
        id: '305f660a-a2cf-43df-9493-5335472c520d',
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
        id: 'f6c68263-74fd-46b3-b316-d2eef411986c',
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
        id: '07b5daaa-7e39-44c3-b2c1-bd5df3be54ac',
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
        id: 'ff771452-d4e8-4d21-8773-2ace1dfff266',
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
        id: '129dd665-07aa-4709-bb98-a121e587b26f',
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
        id: 'c7be8d30-87ad-40e9-8d10-ca1076ca9abe',
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
        id: '40c61905-58a7-47ab-a21b-eabf9e738a43',
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
        id: '28a43464-695b-495e-bac7-a5ac37b485fb',
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
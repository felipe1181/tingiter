const axios = require('axios');
const developer = require('../Models/developer');

module.exports = {
    async index(req,res){
        const {user} = req.headers;
        const loggedDev = await developer.findById(user);

        const users = await developer.find({
            $and:[
                {_id:{$ne: user}},
                {_id:{$nin:loggedDev.likes}},
                {_id:{$nin:loggedDev.deslikes}}
            ]
        });
        return res.json(users);
    },
   async store(req,res){
        const {username} = req.body;

        const userExists = await developer.findOne({user:username});

        if(userExists)
        {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        const {name,bio,avatar_url} = response.data;

        const newDevaloper = await developer.create({
            name: name,
            user:username,
            bio: bio,
            avatar:avatar_url
        });
        
        return res.json(newDevaloper);
    }
}
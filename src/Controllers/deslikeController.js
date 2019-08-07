const developer = require('../Models/developer');
module.exports = {
   async store(req,res){
        console.log( req.params.devId);
        console.log(req.headers.user);

        const {devId} = req.params;
        const {user} = req.headers;
    
        const loggedDev = await developer.findById(user);
        const targetDev = await developer.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: 'developer not exists'});
        }
 

        loggedDev.deslikes.push(targetDev._id);
        await loggedDev.save();


        return res.json(loggedDev);
    }
}
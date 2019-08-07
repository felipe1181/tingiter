/*
* @author Felipe ferraresi github felipe1181 
* developer model
*/
const {Schema,model} = require('mongoose');

const developerSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    user:{
        type:String,
        required: true
    },
    bio:String,
    avatar:{
        type:String,
        required:true
    },
    likes:[{
        type: Schema.Types.ObjectId,
        ref: "developer"
    }],
    deslikes:[{
        type: Schema.Types.ObjectId,
        ref: "developer"
    }]
},{
    timestamps:true //createAt updateAt
});

module.exports = model('developer',developerSchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId, ref:'Users', required:true},
    email : { type:String, required:true, unique:true },
    password : { type:String, required:true },
});

export default mongoose.model('Users', userSchema);
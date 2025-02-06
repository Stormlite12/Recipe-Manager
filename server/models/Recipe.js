import mongoose, { mongo } from "mongoose";



const recipeSchema = new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId, ref:'Users', required:true},
    title : {type:String, required:true},
    description : {type:String, required:true},
    ingredients : {type:[String], required:true},
    instructions : {type: [String], required:true},
    cookingTime : {type:Number, required:true},
    tags : [String],
    imageURL : {type:String},
    visibility: { type: String, enum: ["public", "personal"], required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe
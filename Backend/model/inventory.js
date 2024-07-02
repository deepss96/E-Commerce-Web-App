import mongoose from "mongoose";

const stonexSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Stonex = mongoose.model("Inventory", stonexSchema);

export default Stonex;
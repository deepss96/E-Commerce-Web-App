import Stonex from "../model/inventory.js";

export const getInventory= async(req,res)=>{
    try {
        const Stoneinventory = await Stonex.find()
        res.status(200).json(Stoneinventory)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}
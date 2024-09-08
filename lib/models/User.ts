import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    clerkId: String,
    wishlist: {
        type:Array,
        default:[]
    },
    creatAt:{
        type: Date,
        default: Date.now
    },
    updateAt:{
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.models.User || mongoose.model("User", userSchema);

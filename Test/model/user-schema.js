import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true},
    lastname: {
        type:String,
        required:true},
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minlength:[8, "atleast 8 characters required"]
    },
    role:{
        type:String,
        enum:["customer", "admin", "superadmin"],
        default:"customer"
    },
    resetToken: {
        type: String,
      }, 
      resetTokenExpiry: {
         type: Date }, 
})

const auth = mongoose.model("Logintry", userSchema);
export default userSchema

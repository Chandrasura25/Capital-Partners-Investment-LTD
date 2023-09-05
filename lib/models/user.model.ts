import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    surname: String,
    gender: String,
    mobile_number: String,
    next_of_kin: String,
    mother_middle_name: String,
    homeAddress: String,
    officeAddress: String,
    level_of_education: String,
    image:  String,
    date_of_birth: String,
    onboarded: {type: Boolean, default: false},
});
const User = mongoose.models.User || mongoose.model("User", userSchema); 
export default User;
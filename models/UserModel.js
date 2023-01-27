const mongoose = require('mongoose');

const {Schema, model, models} = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add valid email'
        ]
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [100, "Name <= 500 chars"]
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        trim: true,
        enum: ["Admin", "User"]
    }
});

const User = models.User || model('User', UserSchema); // Next will call this file from time to time, if model exist, use it

module.exports = User;
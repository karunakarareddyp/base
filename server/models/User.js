const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model('employees', UserSchema);

module.exports = User;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['donor', 'beneficiary', 'admin'], default: 'donor' },
  avatar: { type: String, default: 'default.jpg' },
  isAdmin: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  phone: { type: String },
  idCard: { type: String },
  address: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
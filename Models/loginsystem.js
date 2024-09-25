import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
   
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum password length
  },
  role: {
    type: String,
    enum: ['customer','admin','superadmin'],
    default: 'customer'
}
});

const auth = mongoose.model('Logintest', userSchema);
export default auth
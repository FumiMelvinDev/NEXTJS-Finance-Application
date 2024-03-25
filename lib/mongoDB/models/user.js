import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkID: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  transactions: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
    default: [],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

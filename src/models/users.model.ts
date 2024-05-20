import mongoose from "mongoose";
import { UsersInterface } from "../interfaces/energie.interface";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const Users = mongoose.model<UsersInterface>("user", usersSchema);
export default Users;

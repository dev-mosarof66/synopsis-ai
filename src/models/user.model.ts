import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  summaries: mongoose.Types.ObjectId[];
  dayLimit: number;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String, required: true, unique: true
    },
    dayLimit: {
      type: Number,
      default: 0,
      required:true
    },
    summaries: [
      {
        type: mongoose.Schema.Types.ObjectId, ref: "Response"
      }
    ],
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;

import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    email: string;
    currentPlan?: string;
    currentUsage?: number;
    totalUsage?: number;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true },
        currentPlan: { type: String, default: "Free" },
    },
    {
        timestamps: true,
    }
);


const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;

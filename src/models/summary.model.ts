import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISummary extends Document {
  title: string;
  response: string;
  fileId: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const summarySchema = new Schema<ISummary>(
  {
    title: { type: String, required: true },
    response: { type: String, required: true },
    fileId: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Summary: Model<ISummary> =
  mongoose.models.Summary || mongoose.model<ISummary>("Summary", summarySchema);

export default Summary;

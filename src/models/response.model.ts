import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISummary {
  title: string;
  description: string[];
}

export interface IResponse extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  summaries: ISummary[];
  fileId: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const responseSchema = new Schema<IResponse>(
  {
    title: { type: String, required: true },
    summaries: [
      {
        title: { type: String, required: true },
        description: [{ type: String, required: true }],
      },
    ],
    fileId: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const ResponseModel: Model<IResponse> =
  mongoose.models.Response || mongoose.model<IResponse>("Response", responseSchema);

export default ResponseModel;

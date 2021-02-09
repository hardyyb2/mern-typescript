import mongoose, { Document, Schema } from "mongoose";

export interface IName extends Document {
  name: string;
  test: number;
  createdAt: Date;
}

const nameSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name Required"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "Age required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const NameModel = mongoose.model<IName>("name", nameSchema);

export default NameModel;

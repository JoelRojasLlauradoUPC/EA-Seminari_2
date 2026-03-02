import { Schema, model, Types } from 'mongoose';

export interface IRequirement {
  _id?: string;
  title: string;
  description?: string;
  organization: Types.ObjectId; // Enllaçada a Organization
}

const requirementSchema = new Schema<IRequirement>(
  {
    title: { type: String, required: true },
    description: { type: String },
    organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  },
  { timestamps: true }
);

export const RequirementModel = model<IRequirement>('Requirement', requirementSchema);

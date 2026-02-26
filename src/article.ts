import { Schema, model, Types } from 'mongoose';

export interface IArticle {
  _id?: string;
  title: string;
  content: string;
  // reference to an organization so we can populate it later
  organization: Types.ObjectId;
}

const articleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true }
});

export const ArticleModel = model<IArticle>('Article', articleSchema);

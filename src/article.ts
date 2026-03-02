import { Schema, model } from 'mongoose';

const articleSchema = new Schema({
  title: String,
  content: String
});

export const ArticleModel = model('Article', articleSchema);

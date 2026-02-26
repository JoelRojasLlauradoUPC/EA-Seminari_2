import { Types } from 'mongoose';
import { ArticleModel, IArticle } from './article.js';

// CRUD operations for the `Article` collection.
// Each function returns the raw Mongoose promise which callers can await.

export async function createArticle(data: Omit<IArticle, '_id'>) {
  return ArticleModel.create(data);
}

export async function getArticleById(id: string) {
  // populate the linked organization before returning
  return ArticleModel.findById(id).populate('organization').lean();
}

export async function updateArticle(id: string, data: Partial<IArticle>) {
  return ArticleModel.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteArticle(id: string) {
  return ArticleModel.findByIdAndDelete(id);
}

export async function listAllArticles() {
  // use lean for performance if we don't need mongoose documents
  return ArticleModel.find().lean();
}

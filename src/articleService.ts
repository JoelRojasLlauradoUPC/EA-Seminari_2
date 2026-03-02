// @ts-nocheck
import { ArticleModel } from './article.js';

export function createArticle(data) {
  return ArticleModel.create(data);
}

export function getArticleById(id) {
  return ArticleModel.findById(id);
}

export function updateArticle(id, data) {
  return ArticleModel.findByIdAndUpdate(id, data, { new: true });
}

export function deleteArticle(id) {
  return ArticleModel.findByIdAndDelete(id);
}

export function listAllArticles() {
  return ArticleModel.find();
}

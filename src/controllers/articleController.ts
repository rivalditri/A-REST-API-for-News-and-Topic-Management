import { RequestHandler } from "express";

import { ArticleModel } from '../models/article';

export const createArticle: RequestHandler = async (req, res, next) => {
    const { title, text, status } = req.body;
    if (!title || !text || !status) {
        return res.status(400).json({ message: "Please provide all the details" });
    }else{
        var article = await ArticleModel.create({ ...req.body });
    }
    return res.status(200).json({ message: "Article created successfully", data: article });
};

export const getAllArticle: RequestHandler = async (req, res, next) => {
    const article = await ArticleModel.findAll();
    return res.status(200).json({ message: "Article Fetched Successfully", data: article });
};

export const updateArticle: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const { title, text, status } = req.body;
    const article = await ArticleModel.findByPk(id);
    if(!id || !article){
        return res.status(400).json({ message: "sorry, you input the wrong article id" });
    }
    if (!title || !text || !status) {
        return res.status(400).json({ message: "Please provide all the details" });
    }
    await ArticleModel.update({ ...req.body }, { where: { id } });
    const updatedArticleModel: ArticleModel | null = await ArticleModel.findByPk(id);
    return res.status(200).json({ message: "Article Updated Successfully", data: updatedArticleModel });
};

export const deleteArticle: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const article = await ArticleModel.findByPk(id);

    if(!id || !article){
        return res.status(400).json({ message: "sorry, article doesn't exist on database" });
    }
    const deletedArticle: ArticleModel | null = await ArticleModel.findByPk(id);

    await ArticleModel.destroy({ where: { id } });

    return res.status(200).json({ message: "Todo deleted successfully", data: deletedArticle });
};



export const getArticleById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const article: ArticleModel | null = await ArticleModel.findByPk(id);
  if(!id || !article){
    return res.status(400).json({ message: "sorry, article doesn't exist on database" });
}
  return res.status(200).json({ message: "Todo Fetched Successfully", data: article });
};


"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleById = exports.deleteArticle = exports.updateArticle = exports.getAllArticle = exports.createArticle = void 0;
const topic_1 = require("../models/topic");
const createArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, text, status } = req.body;
    if (!title || !text || !status) {
        return res.status(400).json({ message: "Please provide all the details" });
    }
    else {
        var article = yield topic_1.TopicModel.create(Object.assign({}, req.body));
    }
    return res.status(200).json({ message: "Article created successfully", data: article });
});
exports.createArticle = createArticle;
const getAllArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield topic_1.TopicModel.findAll();
    return res.status(200).json({ message: "Article Fetched Successfully", data: article });
});
exports.getAllArticle = getAllArticle;
const updateArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, text, status } = req.body;
    const article = yield topic_1.TopicModel.findByPk(id);
    if (!id || !article) {
        return res.status(400).json({ message: "sorry, you input the wrong article id" });
    }
    if (!title || !text || !status) {
        return res.status(400).json({ message: "Please provide all the details" });
    }
    yield topic_1.TopicModel.update(Object.assign({}, req.body), { where: { id } });
    const updatedTopicModel = yield topic_1.TopicModel.findByPk(id);
    return res.status(200).json({ message: "Article Updated Successfully", data: updatedTopicModel });
});
exports.updateArticle = updateArticle;
const deleteArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const article = yield topic_1.TopicModel.findByPk(id);
    if (!id || !article) {
        return res.status(400).json({ message: "sorry, article doesn't exist on database" });
    }
    const deletedArticle = yield topic_1.TopicModel.findByPk(id);
    yield topic_1.TopicModel.destroy({ where: { id } });
    return res.status(200).json({ message: "Todo deleted successfully", data: deletedArticle });
});
exports.deleteArticle = deleteArticle;
const getArticleById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const article = yield topic_1.TopicModel.findByPk(id);
    if (!id || !article) {
        return res.status(400).json({ message: "sorry, article doesn't exist on database" });
    }
    return res.status(200).json({ message: "Todo Fetched Successfully", data: article });
});
exports.getArticleById = getArticleById;

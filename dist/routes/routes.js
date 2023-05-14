"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const news_controller_1 = __importDefault(require("../controllers/news-controller"));
const topic_controller_1 = __importDefault(require("../controllers/topic-controller"));
const router = (0, express_1.Router)();
// News endpoints
router.get('/news', news_controller_1.default.getAll);
router.get('/news/:id', news_controller_1.default.getById);
router.post('/news', news_controller_1.default.create);
router.put('/news/:id', news_controller_1.default.update);
router.delete('/news/:id', news_controller_1.default.delete);
// Topic endpoints
router.get('/topics', topic_controller_1.default.getAll);
router.get('/topics/:id', topic_controller_1.default.getById);
router.post('/topics', topic_controller_1.default.create);
router.put('/topics/:id', topic_controller_1.default.update);
router.delete('/topics/:id', topic_controller_1.default.delete);
exports.default = router;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../configs/config"));
class NewsController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, topic } = req.query;
                let whereCondition = {};
                if (status) {
                    whereCondition.status = status;
                }
                if (topic) {
                    whereCondition = Object.assign(Object.assign({}, whereCondition), { '$Topics.name$': topic });
                }
                const news = yield config_1.default.News.findAll({
                    where: whereCondition,
                    include: 'Topics',
                });
                return res.json(news);
            }
            catch (error) {
                console.error('Error retrieving news:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const news = yield config_1.default.News.findByPk(id);
                if (news) {
                    res.json(news);
                }
                else {
                    res.status(404).json({ error: 'News not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content, status } = req.body;
            try {
                const news = yield config_1.default.News.create({ title, content, status });
                res.status(201).json(news);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, content, status } = req.body;
            try {
                const news = yield config_1.default.News.findByPk(id);
                if (news) {
                    yield news.update({ title, content, status });
                    res.json(news);
                }
                else {
                    res.status(404).json({ error: 'News not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const news = yield config_1.default.News.findByPk(id);
                if (news) {
                    res.json({
                        message: `News with id ${id} deleted successfully`,
                        data: news
                    });
                    yield news.destroy();
                    res.sendStatus(204);
                }
                else {
                    res.status(404).json({ error: 'News not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.default = new NewsController();

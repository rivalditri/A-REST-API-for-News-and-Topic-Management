import { Request, Response } from 'express';
import models from '../configs/config';

class NewsController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
        const { status, topic } = req.query;
  
        let whereCondition: any = {};
  
        if (status) {
          whereCondition.status = status;
        }
  
        if (topic) {
          whereCondition = {
            ...whereCondition,
            '$Topics.name$': topic,
          };
        }
  
        const news = await models.News.findAll({
          where: whereCondition,
          include: 'Topics',
        });
  
        return res.json(news);
      } catch (error) {
        console.error('Error retrieving news:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

  }
  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const news = await models.News.findByPk(id);
      if (news) {
        res.json(news);
      } else {
        res.status(404).json({ error: 'News not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { title, content, status } = req.body;

    try {
      const news = await models.News.create({ title, content, status });
      res.status(201).json(news);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, content, status } = req.body;

    try {
      const news = await models.News.findByPk(id);
      if (news) {
        await news.update({ title, content, status });
        res.json(news);
      } else {
        res.status(404).json({ error: 'News not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const news = await models.News.findByPk(id);
      if (news) {
        res.json({
            message: `News with id ${id} deleted successfully`,
            data : news
        });
        await news.destroy();
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'News not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new NewsController();

import { Request, Response } from 'express';
import models from '../configs/config';

class TopicController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const topics = await models.Topic.findAll();
      res.json(topics);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const topic = await models.Topic.findByPk(id);
      if (topic) {
        res.json(topic);
      } else {
        res.status(404).json({ error: 'Topic not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { name } = req.body;

    try {
      const topic = await models.Topic.create({ name });
      res.status(201).json(topic);
    } catch   (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  
    public async update(req: Request, res: Response): Promise<void> {
      const { id } = req.params;
      const { name } = req.body;
  
      try {
        const topic = await models.Topic.findByPk(id);
        if (topic) {
          await topic.update({ name });
          res.json(topic);
        } else {
          res.status(404).json({ error: 'Topic not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  
    public async delete(req: Request, res: Response): Promise<void> {
      const { id } = req.params;
  
      try {
        const topic = await models.Topic.findByPk(id);
        if (topic) {
          await topic.destroy();
          res.sendStatus(204);
        } else {
          res.status(404).json({ error: 'Topic not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }
  
  export default new TopicController();
  
import { Router } from 'express';
import NewsController from '../controllers/news-controller';
import TopicController from '../controllers/topic-controller';

const router = Router();

// News endpoints
router.get('/news', NewsController.getAll);
router.get('/news/:id', NewsController.getById);
router.post('/news', NewsController.create);
router.put('/news/:id', NewsController.update);
router.delete('/news/:id', NewsController.delete);

// Topic endpoints
router.get('/topics', TopicController.getAll);
router.get('/topics/:id', TopicController.getById);
router.post('/topics', TopicController.create);
router.put('/topics/:id', TopicController.update);
router.delete('/topics/:id', TopicController.delete);

export default router;

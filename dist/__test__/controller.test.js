const { Request, Response } = require('express');
const NewsController= require('../controllers/news-controller');

test('getNews should return a valid response', async () => {
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  
    // Instantiate the NewsController
    const newsController = NewsController();
  
    // Call the getNews function
    await newsController.getNews(req, res);
  
    // Check if the response is valid
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });
  
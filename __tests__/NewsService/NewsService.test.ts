// __tests__/NewsService.test.ts
import NewsService from '../../src/data/api/NewsService';
import newsApi from '../../src/data/api/api';
import {
  Article,
  Category,
  FilteredArticles,
  Language,
} from '../../src/interfaces';

jest.mock('../../src/data/api/api');

describe('NewsService', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch news by page and itemsPerPage', async () => {
    const mockResponse = {
      data: {
        articles: [
          {
            source: {id: '1', name: 'Test Source'},
            author: 'Test Author',
            title: 'Test Title',
            description: 'Test Description',
            url: 'https://example.com',
            urlToImage: 'https://example.com/image.jpg',
            publishedAt: '2023-10-12',
            content: 'Test Content',
          },
        ],
      },
    };

    // Mocking Axios get method to return a specific response
    (newsApi.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await NewsService.getNews({page: 2, itemsPerPage: 5});

    // Extracting the 'articles' property from the response
    const expectedArticles = mockResponse.data.articles;

    expect(newsApi.get).toHaveBeenCalledWith(
      'top-headlines?language=en&page=2&pageSize=5',
    );
    expect(result).toEqual(expectedArticles);
  });
  it('should fetch news by category', async () => {
    const mockResponse = {
      data: {
        sources: [
          {
            id: '1',
            name: 'test',
            description: 'Test description',
            url: 'https://example.com',
            category: Category.Sports,
            language: Language.En,
            country: 'us',
          },
        ],
      },
    };

    // Mocking Axios get method to return a specific response
    (newsApi.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await NewsService.getNewsByQuery(
      mockResponse.data.sources[0].category,
    );

    // Extracting the 'articles' property from the response
    const expectedArticles = mockResponse.data.sources;

    expect(newsApi.get).toHaveBeenCalledWith(
      `top-headlines/sources?category=${mockResponse.data.sources[0].category}`,
    );
    expect(result).toEqual(expectedArticles);
  });
});

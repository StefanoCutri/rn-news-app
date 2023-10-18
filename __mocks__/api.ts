import { Category, FilteredArticles, Language } from '../src/interfaces';

const mockedArticle = {
  id: '1',
  name: 'test',
  description: 'Test description',
  url: 'https://example.com',
  category: Category.Sports,
  language: Language.En,
  country: 'us',
};

const mockResponse: FilteredArticles = {
  status: 'ok',
  sources: [mockedArticle],
};

export default {
  get: jest.fn().mockResolvedValue({ data: mockResponse }), // Ensure that `data` property is defined
};
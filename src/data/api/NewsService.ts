import newsApi from './api';
import {FilteredArticles, NewsAPI} from '../../interfaces';

interface GetNewsParams {
  page?: number;
  itemsPerPage?: number;
}

const NewsService = {
  getNews: async ({page = 1, itemsPerPage = 10}: GetNewsParams = {}) => {
    try {
      const response = await newsApi.get<NewsAPI>(
        `top-headlines?language=en&page=${page}&pageSize=${itemsPerPage}`,
      );
      return response.data.articles;
    } catch (error) {
      console.log('Error fetching news: ', error);
      throw error;
    }
  },
  
  // Fetch news based on category parameters
  getNewsByQuery: async (category: string = '') => {
    try {
      const response = await newsApi.get<FilteredArticles>(
        `top-headlines/sources?category=${category}`,
      );

      return response.data.sources;
    } catch (error) {
      console.log('Error fetching news: ', error);
      throw error;
    }
  },
};

export default NewsService;
